// https://payloadcms.com/docs/fields/rich-text#generating-html
import { load as cheerioLoad } from 'cheerio'
import escapeHTML from 'escape-html'
import { Text } from 'slate'

import { helpers } from './'

const relationshipLinkPrefixes = {
  articles: '/blog/',
  pages: '/policies/',
  audits: '/security/',
  vacancies: '/careers/',
  pressroom: '/pressroom/',
  programs: '/grants-and-bounties/'
}

const parseRelation = (node) => {
  if (node.relationTo === 'news') {
    return `<a href="${node.value.link}" rel="nofollow noopener noreferrer">${node.value.title}</a>`
  }

  const prefix = relationshipLinkPrefixes[node.relationTo]

  if (!prefix) {
    return ''
  }

  return `<a href="${prefix}${node.value.slug}">${node.value.title}</a>`
}

const serializeSlateJs = (children) => children.map((node, _i) => {
  if (!node) {
    return ''
  }

  if (Text.isText(node)) {
    if (!escapeHTML(node.text).trim()) {
      return ''
    }

    let text = `${escapeHTML(node.text)}`

    if (node.bold) {
      text = (
        `<strong>${text}</strong>`
      )
    }

    if (node.code) {
      text = (
        `<code>${text}</code>`
      )
    }

    if (node.italic) {
      text = (
        `<em>${text}</em>`
      )
    }

    if (node.underline) {
      text = (
        `<span class="underline">${text}</span>`
      )
    }

    if (node.blockquote) {
      text = (
        `<blockquote>${text}</blockquote>`
      )
    }

    // Handle other leaf types here...

    return (
      `${text}`
    )
  }

  const serializedChildren = serializeSlateJs(node.children)

  switch (node.type) {
    case 'h1':
      return (
        `<h1 id="${helpers.getSlug(serializedChildren)}">${serializedChildren}</h1>`
      )

    case 'h2':
      return (
        `<h2 id="${helpers.getSlug(serializedChildren)}">${serializedChildren}</h2>`
      )

    case 'h3':
      return (
        `<h3 id="${helpers.getSlug(serializedChildren)}">${serializedChildren}</h3>`
      )

    case 'h4':
      return (
        `<h4>${serializedChildren}</h4>`
      )

    case 'h5':
      return (
        `<h5>${serializedChildren}</h5>`
      )

    case 'h6':
      return (
        `<h6>${serializedChildren}</h6>`
      )
    case 'quote':
      return (
        `<blockquote>${serializedChildren}</blockquote>`
      )
    case 'ul':
      return (
        `<ul>${serializedChildren}</ul>`
      )
    case 'ol':
      return (
        `<ol>${serializedChildren}</ol>`
      )
    case 'li':
      return (
        `<li>${serializedChildren}</li>`
      )
    case 'link':
      if (!serializedChildren) {
        // Skip links with no text
        return ''
      }
      return (
        `<a href="${escapeHTML(node.url)}">${serializedChildren}</a>`
      )

    case 'upload':
      return (
        `<img src="${node.value.url}" alt="${node.value.alt}">${serializedChildren}</a>`
      )

    case 'relationship':
      return (
        parseRelation(node)
      )

    default:
      return (
        `<p>${serializedChildren}</p>`
      )
  }
}).join('')

export const serialize = (slateJsArr) => {
  const html = serializeSlateJs(slateJsArr)

  const $ = cheerioLoad(html, null, false)
  if ($.text().trim()) {
    return html
  }

  return ''
}
