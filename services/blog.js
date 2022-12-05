import { colors, primaryColorKey } from '../styles/colors'
import { helpers } from './helpers'
import { storeLocally } from './io/download'
import { request } from './request'
import { mockData } from './_mock_'

let docs = null

const getDocs = async () => {
  if (docs) {
    return docs
  }

  console.log('fetching all articles')

  if (process.env.PROD === 'true') {
    const dataStr = await request.get(`${process.env.API_URL_PREFIX}articles?limit=1000`)
    const data = JSON.parse(dataStr)
    docs = data.docs
    return docs
  }

  docs = mockData.articleList.docs
  return docs
}

const getValidColorKey = (colorKey) => {
  return Object.keys(colors).filter(x => x !== 'white' && x !== 'black').includes(colorKey) ? colorKey : primaryColorKey
}

export const getLatestBlogPosts = async () => {
  try {
    const docs = await getDocs()

    const result = await Promise.allSettled(docs.map(async (doc) => {
      return {
        id: doc.id,
        title: doc.title,
        featured: doc.featured,
        image: await storeLocally(`${process.env.FILE_URL_PREFIX}${doc.cover.filename}`, 'blog-images'),
        slug: doc.slug,
        intro: doc.intro.replace('&hellip;', ''),
        date: doc.updatedAt || doc.createdAt,
        tags: doc.tags.map((tag) => ({ name: tag.name, color: getValidColorKey(tag.color) }))
      }
    }))

    const allPosts = result.map(x => x.value)
    const latestPosts = allPosts.sort((a, b) => {
      return (new Date(a.date) > new Date(b.date) ? 1 : new Date(a.date) < new Date(b.date) ? -1 : 0)
    }).slice(0, 10)

    return latestPosts
  } catch (error) {
    console.error(error)
  }

  return []
}

export const getBlogPosts = async () => {
  try {
    const docs = await getDocs()

    const result = await Promise.allSettled(docs.map(async (doc) => {
      return {
        id: doc.id,
        title: doc.title,
        featured: doc.featured,
        image: await storeLocally(`${process.env.FILE_URL_PREFIX}${doc.cover.filename}`, 'blog-images'),
        slug: doc.slug,
        intro: doc.intro.replace('&hellip;', ''),
        date: doc.updatedAt || doc.createdAt,
        tags: doc.tags.map((tag) => ({ name: tag.name, color: getValidColorKey(tag.color) }))
      }
    }))

    return result.map(x => x.value)
  } catch (error) {
    console.error(error)
  }

  return []
}

export const getSinglePost = async (slug) => {
  try {
    const docs = await getDocs()

    const match = docs.find(doc => doc.slug === slug)

    return {
      id: match.id,
      title: match.title,
      featured: match.featured,
      image: await storeLocally(`${process.env.FILE_URL_PREFIX}${match.cover.filename}`, 'blog-images'),
      slug: match.slug,
      intro: match.intro.replace('&hellip;', ''),
      date: match.updatedAt || match.createdAt,
      tags: match.tags.map((tag) => ({ name: tag.name, color: getValidColorKey(tag.color) })),
      meta: {
        title: match.meta.title,
        description: match.meta.description
      },
      content: {
        html: helpers.serialize(match.content) || match.html || ''
      }
    }
  } catch (error) {
    console.error(error)
  }

  return []
}

export const getPostsSlugs = async () => {
  try {
    const docs = await getDocs()

    const result = docs.map((doc) => doc.slug).filter(x => !!x)

    return result
  } catch (error) {
    console.error(error)
  }

  return []
}
