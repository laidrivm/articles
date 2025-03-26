import { dirname, join, basename, parse, relative, extname } from 'path';
import { readdir, mkdir } from 'node:fs/promises';

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
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp', '.ico'];
    const urlLower = url.toLowerCase();
    // Skip URLs that are clearly not image files
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
    return { processed: false, imagesDownloaded: 0 };
  }
  
  const content = await file.text();
  const imageReferences = extractImageReferences(content);
  if (imageReferences.length === 0) {
    console.log(`No external images found in ${filePath}`);
    return { processed: false, imagesDownloaded: 0 };
  }
  
  console.log(`Found ${imageReferences.length} external images in ${filePath}`);

  const fileDir = dirname(filePath);
  const fileBaseName = parse(filePath).name;
  const imageSubDir = join(fileDir, fileBaseName);
  
  let updatedContent = content;
  let imagesDownloaded = 0;
  
  for (const reference of imageReferences) {
    const { fullMatch, altText, imageUrl } = reference;
    const imageFileName = basename(imageUrl);
    const savePath = join(imageSubDir, imageFileName);
    
    const success = await downloadImage(imageUrl, savePath);
    if (success) {
      imagesDownloaded++;
      const relativeImagePath = `/${relative(rootDir, savePath).replace(/\\/g, '/')}`;
      const newImageReference = `![${altText}](${relativeImagePath})`;
      // Escape special regex characters in the fullMatch
      const escapedFullMatch = fullMatch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      updatedContent = updatedContent.replace(new RegExp(escapedFullMatch, 'g'), newImageReference);
      
      console.log(`Updated reference: ${fullMatch} -> ${newImageReference}`);
    }
  }

  if (imagesDownloaded > 0) {
    await Bun.write(filePath, updatedContent);
    console.log(`Updated ${filePath}`);
    return { processed: true, imagesDownloaded };
  }

  return { processed: false, imagesDownloaded: 0 };
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

async function main() {
  const rootDir = process.cwd();
  const markdownFiles = await findMarkdownFiles(rootDir, rootDir);
  
  console.log(`Found ${markdownFiles.length} markdown files to process`);
  
  let totalProcessedFiles = 0;
  let totalImagesDownloaded = 0;
  
  for (const filePath of markdownFiles) {
    const { processed, imagesDownloaded } = await processMarkdownFile(filePath, rootDir);
    if (processed) {
      totalProcessedFiles++;
      totalImagesDownloaded += imagesDownloaded;
    }
  }
  
  console.log(`Processing complete: ${totalProcessedFiles} files processed, ${totalImagesDownloaded} images downloaded`);
  
  process.exit(0);
}

main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});