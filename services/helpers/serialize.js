// https://payloadcms.com/docs/fields/rich-text#generating-html
import escapeHTML from 'escape-html'
import { Text } from 'slate'
import { helpers } from '.'

export const serialize = (children) => children.map((node, _i) => {
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

    // Handle other leaf types here...

    return (
      `${text}`
    )
  }

  const serializedChildren = serialize(node.children)

  if (!serializedChildren.trim()) {
    return ''
  }

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
      return (
        `<a href="${escapeHTML(node.url)}">${serializedChildren}</a>`
      )

    default:
      return (
        `<p>${serializedChildren}</p>`
      )
  }
}).join('')
