import { colors, primaryColorKey } from '../../styles/colors'
import { helpers } from '../helpers'
import { storeLocally } from '../io/download'
import { request } from '../http/request'
import { mockData } from '../_mock_'

export const BLOGS_PER_PAGE = 12
export const filters = [
  {
    text: 'All',
    value: 'all'
  },
  {
    text: 'Exploit Analysis',
    value: 'exploit-analysis'
  },
  {
    text: 'Weekly Report',
    value: 'weekly-report'
  },
  {
    text: 'Monthly Review',
    value: 'monthly-review'
  },
  {
    text: 'Press Room',
    value: 'press-room'
  }
]

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

  docs = mockData.articles.docs
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
        image: await storeLocally(`${process.env.COVER_FILE_URI_PREFIX}${doc.cover.filename}`, 'images'),
        slug: doc.slug,
        intro: doc.intro.replace('&hellip;', ''),
        date: doc.updatedAt || doc.createdAt,
        tags: doc.tags.map((tag) => ({ name: tag.name, color: getValidColorKey(tag.color) }))
      }
    }))

    const allPosts = result.map(x => x.value)
    const latestPosts = allPosts.sort((a, b) => {
      return (new Date(a.date) < new Date(b.date) ? 1 : new Date(a.date) > new Date(b.date) ? -1 : 0)
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
        image: await storeLocally(`${process.env.COVER_FILE_URI_PREFIX}${doc.cover.filename}`, 'images'),
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

    const htmlContent = match.content || ''
    const parsedHtml = await helpers.parseHtml(htmlContent)

    return {
      id: match.id,
      title: match.title,
      featured: match.featured,
      image: await storeLocally(`${process.env.COVER_FILE_URI_PREFIX}${match.cover.filename}`, 'images'),
      slug: match.slug,
      intro: match.intro.replace('&hellip;', ''),
      date: match.updatedAt || match.createdAt,
      tags: match.tags.map((tag) => ({ name: tag.name, color: getValidColorKey(tag.color) })),
      meta: {
        title: match.meta.title,
        description: match.meta.description,
        image: {
          src: await helpers.storeOgImage(match?.meta?.image?.filename || match.cover.filename),
          alt: helpers.getOgImageAlt(match?.meta?.image?.alt)
        }
      },
      content: {
        html: parsedHtml.updated,
        toc: parsedHtml.toc,
        minsToRead: parsedHtml.minsToRead
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

export const getPostTabs = async () => {
  return filters
}

const getPageNumbers = (posts) => {
  const actualDividend = parseInt(posts.length / BLOGS_PER_PAGE)
  if (posts.length % BLOGS_PER_PAGE === 0) {
    return actualDividend
  }

  return actualDividend + 1
}

export const getFilteredPosts = async (filter = 'all', page = 0) => {
  let filteredPosts = []; let totalLength

  try {
    const docs = await getBlogPosts()
    filteredPosts = docs

    const _filter = filters.find(f => f.value === filter)
    if (filter !== 'all' && _filter) {
      filteredPosts = docs.filter(doc => Boolean(doc.tags?.find(tag => tag.name === _filter.text)))
    }

    totalLength = getPageNumbers(filteredPosts)

    if (page >= 0) {
      filteredPosts = filteredPosts.slice(page * BLOGS_PER_PAGE, BLOGS_PER_PAGE + page * BLOGS_PER_PAGE)
    } else {
      filteredPosts = filteredPosts.slice(0, BLOGS_PER_PAGE)
    }
  } catch (error) {
    console.error(error)
  }

  return {
    posts: filteredPosts,
    total: totalLength
  }
}

export const getFilteredPostPages = async (filter = 'all') => {
  let pages = []

  try {
    const docs = await getBlogPosts()
    let filteredPosts = docs

    const _filter = filters.find(f => f.value === filter)
    if (filter !== 'all' && _filter) {
      filteredPosts = docs.filter(doc => Boolean(doc.tags?.find(tag => tag.name === _filter.text)))
    }

    const totalLength = getPageNumbers(filteredPosts)
    pages = new Array(totalLength).fill().map((_, i) => i.toString())
  } catch (error) {
    console.error(error)
  }

  return pages
}
