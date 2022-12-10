import { load as cheerioLoad } from 'cheerio'
import { storeLocally } from '../io/download'
import { storeOgImage, getOgImageAlt } from './meta'
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

const parseLegacyHtml = async ($) => {
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

const getTableOfContents = async ($) => {
  const selector = 'h2, h3, h4'
  const headerElements = $(selector)

  const h = []

  headerElements.each(function () {
    const el = this
    const elName = el.tagName

    const elText = $(el).text().replace(/^(\s)+|(\s)+$/g, '')
    // .replace(/^(\d+\.\s)/g, '') to remove preceeding numbers

    const elId = $(el).attr('id') || ''

    if (elName === 'h2') {
      h.push({ text: elText, id: elId, children: [] })
    }

    if (elName === 'h3') {
      let lastH2Index = h.length - 1

      if (!h[lastH2Index]) h.push({ text: '', children: [] })

      lastH2Index = h.length - 1
      h[lastH2Index].children.push({ text: elText, id: elId, children: [] })
    }
  })

  return h
}

const getMinsToRead = ($) => {
  try {
    const wpm = 225

    const text = $.text()
    const words = text.trim().split(/\s+/).length

    return Math.ceil(words / wpm)
  } catch (error) {

  }

  return 0
}

const parseHtml = async (html) => {
  const $ = cheerioLoad(html, null, false)

  const toc = await getTableOfContents($)
  const updated = await parseLegacyHtml($)
  const minsToRead = getMinsToRead($)

  return { toc, updated, minsToRead }
}

export const helpers = {
  getSlug,
  serialize,
  parseHtml,
  getText,
  getOgImageAlt,
  storeOgImage
}
