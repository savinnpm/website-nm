import { env } from '../environment'
import { storeLocally } from '../io/download'

export const storeOgImage = async (filename, folder = 'images') => {
  if (!filename) {
    return '/assets/images/meta/og/home.png'
  }

  const relativePath = await storeLocally(`${env.fileUrlPrefix}${filename}`, folder)
  return relativePath
}

export const getOgImageAlt = (alt) => {
  if (!alt) {
    return ''
  }

  return alt
}
