import { dirname, join, basename, parse, relative, extname } from 'path';
import { readdir, mkdir } from 'node:fs/promises';
import { Octokit } from '@octokit/rest';

function extractImageReferences(content) {
  const regex = /!\[((?:[^\[\]]|\[(?:[^\[\]]|\[(?:[^\[\]])*\])*\])*?)\]\((https?:\/\/[^\s)]+)\)/g;
  const matches = [];
  let match;

  while ((match = regex.exec(content)) !== null) {
    matches.push({
      fullMatch: match[0],
      altText: match[1],
      imageUrl: match[2]
    });
  }

  return matches;
}

async function downloadImage(url, savePath) {
  try {
    // Skip URLs that are clearly not image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp', '.ico'];
    const urlLower = url.toLowerCase();
    
    if (!imageExtensions.some(ext => urlLower.includes(ext)) && 
        !urlLower.includes('/image') && !urlLower.includes('/img') && 
        !urlLower.includes('postimg') && !urlLower.includes('cdn-images')) {
      console.log(`Skipping non-image URL: ${url}`);
      return false;
    }
    
    console.log(`Downloading: ${url}`);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.status} ${response.statusText}`);
    }
    
    // Check content type to ensure it's an image
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.startsWith('image/')) {
      console.log(`Skipping: ${url} - Not an image (${contentType})`);
      return false;
    }

    const dir = dirname(savePath);
    const dirFile = Bun.file(dir);
    const dirExists = await dirFile.exists();
    if (!dirExists) {
      await mkdir(dir, { recursive: true });
    }

    await Bun.write(savePath, response);
    console.log(`Saved to: ${savePath}`);
    return true;
  } catch (error) {
    console.error(`Error downloading image ${url}:`, error.message);
    return false;
  }
}

async function processMarkdownFile(filePath, rootDir) {
  console.log(`Processing file: ${filePath}`);

  const file = Bun.file(filePath);
  const fileExists = await file.exists();
  if (!fileExists) {
    console.log(`File does not exist: ${filePath}`);
    return false;
  }
  
  const content = await file.text();
  const imageReferences = extractImageReferences(content);
  if (imageReferences.length === 0) {
    console.log(`No external images found in ${filePath}`);
    return false;
  }
  
  console.log(`Found ${imageReferences.length} external images in ${filePath}`);

  const fileDir = dirname(filePath);
  const fileBaseName = parse(filePath).name;
  const imageSubDir = join(fileDir, fileBaseName);
  
  let updatedContent = content;
  let hasChanges = false;
  
  for (const reference of imageReferences) {
    const { fullMatch, altText, imageUrl } = reference;
    const imageFileName = basename(imageUrl);
    const savePath = join(imageSubDir, imageFileName);
    
    const success = await downloadImage(imageUrl, savePath);
    if (success) {
      const relativeImagePath = `/${relative(rootDir, savePath).replace(/\\/g, '/')}`;
      const newImageReference = `![${altText}](${relativeImagePath})`;
      // Escape special regex characters in the fullMatch
      const escapedFullMatch = fullMatch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      updatedContent = updatedContent.replace(new RegExp(escapedFullMatch, 'g'), newImageReference);
      
      console.log(`Updated reference: ${fullMatch} -> ${newImageReference}`);
      hasChanges = true;
    }
  }

  if (hasChanges) {
    await Bun.write(filePath, updatedContent);
    console.log(`Updated ${filePath}`);
    
    return {
      path: filePath.replace(/\\/g, '/').replace(/^\/?/, ''), // Normalize path for GitHub API
      content: updatedContent
    };
  }
  
  return null;
}

async function findMarkdownFiles(dir, rootDir, files = []) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      
      if (entry.isDirectory()) {
        if (entry.name === '.git' || entry.name === 'node_modules') continue;
        
        // Recursively process subdirectories
        await findMarkdownFiles(fullPath, rootDir, files);
      } else if (entry.isFile() && 
                extname(entry.name).toLowerCase() === '.md' && 
                entry.name !== 'README.md') {
        files.push(fullPath);
      }
    }
    
    return files;
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
    return files;
  }
}

async function commitChangesToGitHub(changedFiles) {
  // Get GitHub environment variables
  const token = process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY;
  const ref = process.env.GITHUB_REF;
  
  if (!token || !repository || !ref) {
    throw new Error('Missing required GitHub environment variables. Make sure GITHUB_TOKEN is set in your workflow.');
  }
  
  const [owner, repo] = repository.split('/');
  const branch = ref.replace('refs/heads/', '');
  
  console.log(`Repository: ${owner}/${repo}, Branch: ${branch}`);
  
  // Initialize Octokit
  const octokit = new Octokit({
    auth: token
  });
  
  try {
    if (changedFiles.length === 0) {
      console.log('No changes to commit.');
      return;
    }
    
    // Create a commit with multiple file changes
    // We'll use the contents API instead of the Git Data API
    for (const file of changedFiles) {
      console.log(`Committing changes to ${file.path}`);
      
      try {
        // First, try to get the file to check if it exists and get its SHA
        let fileSha;
        try {
          const { data: fileData } = await octokit.repos.getContent({
            owner,
            repo,
            path: file.path,
            ref: branch
          });
          fileSha = fileData.sha;
          console.log(`Found existing file ${file.path} with SHA: ${fileSha}`);
        } catch (error) {
          // File might not exist yet
          console.log(`File ${file.path} doesn't exist yet or couldn't be fetched`);
          fileSha = undefined;
        }
        
        // Update or create the file
        const { data } = await octokit.repos.createOrUpdateFileContents({
          owner,
          repo,
          path: file.path,
          message: 'update image links from external to local',
          content: Buffer.from(file.content).toString('base64'),
          branch,
          sha: fileSha // Include SHA if the file exists, omit if it's a new file
        });
        
        console.log(`Successfully updated ${file.path}: ${data.commit.html_url}`);
      } catch (error) {
        console.error(`Error updating file ${file.path}:`, error.message);
        throw error;
      }
    }
    
    console.log('All files updated successfully');
  } catch (error) {
    console.error('Error with GitHub API:', error.message);
    throw error;
  }
}

async function main() {
  const rootDir = process.cwd();
  const markdownFiles = await findMarkdownFiles(rootDir, rootDir);
  
  console.log(`Found ${markdownFiles.length} markdown files to process`);
  
  const changedFiles = [];
  
  for (const filePath of markdownFiles) {
    const fileChange = await processMarkdownFile(filePath, rootDir);
    if (fileChange) {
      changedFiles.push(fileChange);
    }
  }
  
  if (changedFiles.length > 0) {
    console.log(`Processed ${changedFiles.length} files with changes. Committing to repository...`);
    await commitChangesToGitHub(changedFiles);
  } else {
    console.log('No changes were made to any files. Skipping commit.');
  }
  
  console.log('Processing complete');
}

main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
