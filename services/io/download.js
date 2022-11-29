import fs from "fs";
import path from "path";
import axios from "axios";
import { ensureDirectory, exists } from ".";

export const storeLocally = async (url, folder) => {
  const parent = path.resolve('public', 'local-files', folder)
  const filename = (new URL(url)).pathname.split('/').pop()

  await ensureDirectory(parent);

  const storedAt = path.resolve(parent, filename)

  // Static URL
  const publicPath = path.relative(path.resolve('public'), storedAt);

  if (await exists(storedAt)) {
    return publicPath
  }

  const response = await axios({
    method: "get",
    url: url,
    responseType: "stream"
  })

  response.data.pipe(fs.createWriteStream(storedAt));

  console.log('downloaded: ', publicPath);

  return publicPath
}