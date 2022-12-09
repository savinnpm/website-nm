const fs = require('fs')
const https = require('https')
const path = require('path')

const download = (url, dest, cb) => {
  const file = fs.createWriteStream(dest)
  const request = https.get(url, function (response) {
    response.pipe(file)
    file.on('finish', function () {
      file.close(() => cb(null)) // close() is async, call cb after close completes.
    })
  })

  request.on('error', function (err) { // Handle errors
    fs.unlink(dest) // Delete the file async. (But we don't check the result)
    if (cb) cb(err)
  })
}

const storeInRoot = async (url) => {
  const parent = path.resolve('public')
  const filename = (new URL(url)).pathname.split('/').pop()

  const storedAt = path.resolve(parent, filename)

  // Static URL
  const publicPath = path.relative(path.resolve('public'), storedAt)

  download(url, storedAt, (err) => {
    if (err) {
      console.log('error downloading: ', filename)
      return
    }

    console.log('downloaded: ', publicPath)
  })
}

function main () {
  if (!process.env.SITEMAP_API_URL_PREFIX || !process.env.SITEMAP_API_URL_PREFIX.trim()) {
    return
  }

  const fileUrls = [`${process.env.SITEMAP_API_URL_PREFIX}sitemap.xml`,
  `${process.env.SITEMAP_API_URL_PREFIX}atom.xml`,
  `${process.env.SITEMAP_API_URL_PREFIX}rss.xml`]

  fileUrls.forEach(url => storeInRoot(url))
}

main()
