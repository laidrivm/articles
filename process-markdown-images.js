import {readdir, stat} from 'node:fs/promises'
import path from 'path'

function findExternalImages(content) {
  const imageRegex = /!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g
  const externalImages = []
  
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    externalImages.push({
      fullMatch: match[0],
      altText: match[1],
      href: match[2]
    });
  }
  
  return externalImages;
}

async function processMarkdownFiles() {
  const rootDir = Bun.main.replace(/\/[^/]+$/, '')

  async function processFile(filePath) {
    if (Bun.file(filePath).name === 'README.md') return
    
    const fileContent = await Bun.file(filePath).text()
    
    const externalImages = findExternalImages(fileContent)
    console.log(externalImages)

    let updatedContent = fileContent
    const imageDownloadPromises = []
    
    for (const image of externalImages) {
      const fileNameDir = Bun.file(filePath).name.replace('.md', '')
      
      try {
        Bun.mkdirSync(fileNameDir, {recursive: true})
      } catch (err) {
        console.log(fileNameDir + ' already exists')
      }

      const fileName = path.basename(image.href)
      const localImagePath = path.join(fileNameDir, fileName)
      const relativeImagePath = path.join(fileNameDir.split(path.sep).pop(), fileName)
      
      const downloadPromise = fetch(image.href)
        .then(async response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          const arrayBuffer = await response.arrayBuffer()
          Bun.write(localImagePath, arrayBuffer)
          
          updatedContent = updatedContent.replace(
            image.fullMatch,
            `![${image.altText}](/${relativeImagePath})`
          )
        })
        .catch(error => {
          console.error(`Error downloading ${image.href}:`, error)
        })
      
      imageDownloadPromises.push(downloadPromise)
    }
    await Promise.all(imageDownloadPromises)
    
    if (imageDownloadPromises.length > 0) {
      await Bun.write(filePath, updatedContent)
    }
  }

  async function processDir(dir) {
    const files = await readdir(dir)
    
    for (const file of files) {
      const filePath = path.join(dir, file)
      const fileStat = await stat(filePath)
      
      if (fileStat.isDirectory()) {
        await processDir(filePath)
      } else if (file.endsWith('.md')) {
        await processFile(filePath)
      }
    }
  }

  await processDir(rootDir)
}

processMarkdownFiles().catch(console.error)