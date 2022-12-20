const fs = require('fs')
const https = require('https')
const path = require('path')
const { env } = require('../services/environment')

const download = function (url, dest) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, function (response) {
      if (response.statusCode !== 200) {
        reject(Error('Failed with status: ' + response.statusCode))
        return
      }

      const file = fs.createWriteStream(dest)
      response.pipe(file)

      file.on('finish', function () {
        file.close(() => {}) // close() is async, call cb after close completes.
        resolve()
      })
    })

    request.on('error', function (err) { // Handle errors
      // Delete the file async. (But we don't check the result)

      console.log('Failed downloading, deleting unfinished file...')

      fs.unlink(dest, (err) => {
        console.log('Could not delete file...', dest)
        reject(err)
      })

      reject(err)
    })
  })
}

const updateXmlFiles = async () => {
  const urlPrefix = env.websiteApiServer

  if (!urlPrefix || !urlPrefix.trim()) {
    return
  }

  // pathToStore is relative - DO NOT START WITH `/`
  const files = [
    {
      url: `${urlPrefix}/sitemap.xml`,
      pathToStore: './sitemap.xml'
    },
    {
      url: `${urlPrefix}/atom.xml`,
      pathToStore: './atom.xml'
    },
    {
      url: `${urlPrefix}/rss.xml`,
      pathToStore: './rss.xml'
    },
    {
      url: `${urlPrefix}/blog/atom.xml`,
      pathToStore: './blog/atom.xml'
    },
    {
      url: `${urlPrefix}/blog/rss.xml`,
      pathToStore: './blog/rss.xml'
    },
    {
      url: `${urlPrefix}/pressroom/atom.xml`,
      pathToStore: './pressroom/atom.xml'
    },
    {
      url: `${urlPrefix}/pressroom/rss.xml`,
      pathToStore: './pressroom/rss.xml'
    }
  ]

  for (let idx = 0; idx < files.length; idx++) {
    const item = files[idx]

    const parent = path.resolve('public')
    const storedAt = path.resolve(parent, item.pathToStore)

    try {
      await download(item.url, storedAt)
    } catch (error) {
      console.error(error) // Swallow
    }
  }
}

const udpateFileCache = () => {
  if (env.resetFileCache !== 'true') {
    return
  }

  const localCacheFolder = path.resolve('public', 'cdn')
  console.log('Clearing cache...')
  fs.rmSync(localCacheFolder, { recursive: true, force: true })
}

const main = () => {
  updateXmlFiles()
  udpateFileCache()
}

main()
