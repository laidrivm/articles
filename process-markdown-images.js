import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join, basename, parse, relative } from 'path';
import { glob } from 'glob';

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
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const dir = dirname(savePath);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    
    writeFileSync(savePath, buffer);
    console.log(`Saved to: ${savePath}`);
    return true;
  } catch (error) {
    console.error(`Error downloading image ${url}:`, error.message);
    return false;
  }
}

async function processMarkdownFile(filePath, rootDir) {
  console.log(`Processing file: ${filePath}`);

  const content = readFileSync(filePath, 'utf-8');
  
  const imageReferences = extractImageReferences(content);
  
  if (imageReferences.length === 0) {
    console.log(`No external images found in ${filePath}`);
    return;
  }
  
  console.log(`Found ${imageReferences.length} external images in ${filePath}`);
  
  const fileDir = dirname(filePath);
  const fileBaseName = parse(filePath).name;
  const imageSubDir = join(fileDir, fileBaseName);
  
  let updatedContent = content;
  
  for (const reference of imageReferences) {
    const { fullMatch, altText, imageUrl } = reference;
    const imageFileName = basename(imageUrl);
    const savePath = join(imageSubDir, imageFileName);
    const success = await downloadImage(imageUrl, savePath);
    
    if (success) {
      const relativeImagePath = `/${relative(rootDir, savePath).replace(/\\/g, '/')}`;
      const newImageReference = `![${altText}](${relativeImagePath})`;

      // We need to escape special regex characters in the fullMatch
      const escapedFullMatch = fullMatch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      updatedContent = updatedContent.replace(new RegExp(escapedFullMatch, 'g'), newImageReference);
      
      console.log(`Updated reference: ${fullMatch} -> ${newImageReference}`);
    }
  }

  // Write the updated content back to the file
  writeFileSync(filePath, updatedContent, 'utf-8');
  console.log(`Updated ${filePath}`);
}

async function main() {
  const rootDir = process.cwd();
  const markdownFiles = glob.sync('**/*.md', {
    cwd: rootDir,
    ignore: ['**/README.md', '**/.git/**'],
    absolute: true
  });
  
  console.log(`Found ${markdownFiles.length} markdown files to process`);

  for (const filePath of markdownFiles) {
    await processMarkdownFile(filePath, rootDir);
  }
  
  console.log('Processing complete');
}

main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
