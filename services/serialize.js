// https://payloadcms.com/docs/fields/rich-text#generating-html
import escapeHTML from 'escape-html'
import { Text } from 'slate'

export const serialize = (children) => children.map((node, _i) => {
  if (Text.isText(node)) {
    let text = `<span>${escapeHTML(node.text)}</span>`

    if (node.bold) {
      text = (
        `<strong>
          ${text}
        </strong>`
      )
    }

    if (node.code) {
      text = (
        `<code>
          ${text}
        </code>`
      )
    }

    if (node.italic) {
      text = (
        `<em>
          ${text}
        </em>`
      )
    }

    // Handle other leaf types here...

    return (
      `${text}`
    )
  }

  if (!node) {
    return ''
  }

  switch (node.type) {
    case 'h1':
      return (
        `<h1>
          ${serialize(node.children)}
        </h1>`
      )
    case 'h2':
      return (
        `<h2>
          ${serialize(node.children)}
        </h2>`
      )
    case 'h3':
      return (
        `<h3>
          ${serialize(node.children)}
        </h3>`
      )
    case 'h4':
      return (
        `<h4>
          ${serialize(node.children)}
        </h4>`
      )
    case 'h5':
      return (
        `<h5>
          ${serialize(node.children)}
        </h5>`
      )
    // Iterate through all headings here...
    case 'h6':
      return (
        `<h6>
          ${serialize(node.children)}
        </h6>`
      )
    case 'quote':
      return (
        `<blockquote>
          ${serialize(node.children)}
        </blockquote>`
      )
    case 'ul':
      return (
        `<ul>
          ${serialize(node.children)}
        </ul>`
      )
    case 'ol':
      return (
        `<ol>
          ${serialize(node.children)}
        </ol>`
      )
    case 'li':
      return (
        `<li>
          ${serialize(node.children)}
        </li>`
      )
    case 'link':
      return (
        `<a href={escapeHTML(node.url)}>
          ${serialize(node.children)}
        </a>`
      )

    default:
      return (
        `<p>
          ${serialize(node.children)}
        </p>`
      )
  }
}).join('')
