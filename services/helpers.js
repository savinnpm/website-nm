import { load as cheerioLoad } from 'cheerio'
import { storeLocally } from './io/download'
import { serialize } from './serialize'

const getSlug = (title) => {
  return title.toLowerCase().replace(/ /g, '-').replace(/[-]+/g, '-').replace(/[^\w-]+/g, '')
}

const getText = (arr) => {
  if (!arr) {
    return ''
  }

  const texts = []

  arr.forEach(el => {
    if (el.text) {
      texts.push(el.text)
      return
    }

    return texts.push(getText(el.children))
  })

  return texts.join(' ')
}

const parseLegacyHtml = async (html) => {
  const $ = cheerioLoad(html, null, false)

  const promises = []
  $('img').each(function () {
    const oldSrc = $(this).attr('src')

    if (oldSrc.indexOf('blog.neptunemutual.com') === -1) {
      console.log('Skipped: ' + oldSrc)
      return
    }

    const filename = (new URL(oldSrc)).pathname.split('/').pop()

    // Guessing filepath in advance
    const storedAt = `/local-files/blog-post-images/${filename}`

    const newSrc = storedAt
    $(this).attr('src', newSrc)
    $(this).removeAttr('srcset')
    $(this).removeAttr('width')
    $(this).removeAttr('height')

    promises.push(storeLocally(`${process.env.FILE_URL_PREFIX}${filename}`, 'blog-post-images'))
  })

  await Promise.allSettled(promises)

  return $.html()
}

export const helpers = {
  getSlug,
  serialize,
  parseLegacyHtml,
  getText
}
