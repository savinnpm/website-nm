import { storeLocally } from '../io/download'

export const storeOgImage = async (filename, folder = 'og-images') => {
  if (!filename) {
    return '/assets/images/meta/og/home.webp'
  }

  const relativePath = await storeLocally(`${process.env.FILE_URL_PREFIX}${filename}`, folder)
  return relativePath
}

export const getOgImageAlt = (alt) => {
  if (!alt) {
    return ''
  }

  return alt
}
