import fs from 'fs'
import https from 'https'
import path from 'path'
import { ensureDirectory, exists } from '.'

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

  try {
    await download(url, storedAt)
  } catch (error) {
    // Swallow
    console.error(error)
  }

  return '/' + publicPath
}
