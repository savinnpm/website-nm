import fs from 'fs'
import https from 'https'
import path from 'path'
import { ensureDirectory, exists } from '.'

const download = function (url, dest, cb) {
  const request = https.get(url, function (response) {
    if (response.statusCode !== 200) {
      return
    }

    const file = fs.createWriteStream(dest)
    response.pipe(file)

    file.on('finish', function () {
      file.close(() => cb(null)) // close() is async, call cb after close completes.
    })
  })

  request.on('error', function (err) { // Handle errors
    // Delete the file async. (But we don't check the result)
    fs.unlink(dest, (err) => {
      console.warn('Could not delete')
      cb(err)
    })

    if (cb) cb(err)
  })
}

export const storeLocally = async (url, folder = 'images') => {
  const parent = path.resolve('public', 'cdn', folder)
  const filename = (new URL(url)).pathname.split('/').pop()

  await ensureDirectory(parent)

  const storedAt = path.resolve(parent, filename)

  // Static URL
  const publicPath = path.relative(path.resolve('public'), storedAt)

  if (await exists(storedAt)) {
    return '/' + publicPath
  }

  download(url, storedAt, (err) => {
    if (err) {
      console.log('error downloading: ', filename)
      return
    }

    console.log('downloaded: ', publicPath)
  })

  return '/' + publicPath
}
