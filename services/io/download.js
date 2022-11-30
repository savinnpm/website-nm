import fs from 'fs'
import https from 'https'
import path from 'path'
import { ensureDirectory, exists } from '.'

const download = function (url, dest, cb) {
  const file = fs.createWriteStream(dest)
  const request = https.get(url, function (response) {
    response.pipe(file)
    file.on('finish', function () {
      file.close(cb) // close() is async, call cb after close completes.
    })
  })

  request.on('error', function (err) { // Handle errors
    fs.unlink(dest) // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message)
  })
}

export const storeLocally = async (url, folder) => {
  const parent = path.resolve('public', 'local-files', folder)
  const filename = (new URL(url)).pathname.split('/').pop()

  await ensureDirectory(parent)

  const storedAt = path.resolve(parent, filename)

  // Static URL
  const publicPath = path.relative(path.resolve('public'), storedAt)

  if (await exists(storedAt)) {
    return publicPath
  }

  download(url, storedAt, (msg) => {
    console.log('message: ', msg)
    console.log('downloaded: ', publicPath)
  })

  return publicPath
}
