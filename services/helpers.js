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

export const helpers = {
  getSlug,
  serialize,
  getText
}
