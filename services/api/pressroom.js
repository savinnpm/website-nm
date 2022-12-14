import { colors, primaryColorKey } from '../../styles/colors'
import { helpers } from '../helpers'
import { storeLocally } from '../io/download'
import { request } from '../http/request'
import { mockData } from '../_mock_'

let docs = null

export const filters = []

const getDocs = async () => {
  if (docs) {
    return docs
  }

  console.log('fetching all pressroom')

  if (process.env.PROD === 'true') {
    const dataStr = await request.get(`${process.env.API_URL_PREFIX}pressroom?limit=1000`)
    const data = JSON.parse(dataStr)
    docs = data.docs
    return docs
  }

  docs = mockData.pressroom.docs
  return docs
}

const getValidColorKey = (colorKey) => {
  return Object.keys(colors).filter(x => x !== 'white' && x !== 'black').includes(colorKey) ? colorKey : primaryColorKey
}

const getTotalPageCount = (posts, itemPerPage) => {
  const actualDividend = parseInt(posts.length / itemPerPage)
  if (posts.length % itemPerPage === 0) {
    return actualDividend
  }

  return actualDividend + 1
}

export const getPressroomPosts = async () => {
  try {
    const docs = await getDocs()

    const result = await Promise.allSettled(docs.map(async (doc) => {
      return {
        id: doc.id,
        title: doc.title,
        image: await storeLocally(`${process.env.COVER_FILE_URI_PREFIX}${doc.cover.filename}`, 'images'),
        slug: doc.slug,
        intro: doc.intro.replace('&hellip;', ''),
        date: doc.updatedAt || doc.createdAt,
        tags: doc.tags.map((tag) => ({ name: tag.name, color: getValidColorKey(tag.color) }))
      }
    }))

    return result.map(x => x.value).sort((a, b) => {
      return (new Date(a.date) < new Date(b.date) ? 1 : new Date(a.date) > new Date(b.date) ? -1 : 0)
    })
  } catch (error) {
    console.error(error)
  }

  return []
}

export const getFilteredPressroomPosts = async (filter = 'all', page, itemPerPage = 4) => {
  let filteredPosts = []; let totalLength

  try {
    const docs = await getPressroomPosts()
    filteredPosts = docs

    const _filter = filters.find(f => f.value === filter)
    if (filter !== 'all' && _filter) {
      filteredPosts = docs.filter(doc => Boolean(doc.tags?.find(tag => tag.name === _filter.text)))
    }

    totalLength = getTotalPageCount(filteredPosts, itemPerPage)

    if (page >= 0) {
      filteredPosts = filteredPosts.slice(page * itemPerPage, itemPerPage + page * itemPerPage)
    } else {
      filteredPosts = filteredPosts.slice(0, itemPerPage)
    }
  } catch (error) {
    console.error(error)
  }

  return {
    posts: filteredPosts,
    total: totalLength
  }
}

export const getRelatedPressroomPosts = async (slug) => {
  const allPosts = await getPressroomPosts()

  return allPosts.filter(x => x.slug !== slug).slice(0, 3)
}

export const getSinglePressroomPost = async (slug) => {
  try {
    const docs = await getDocs()

    const match = docs.find(doc => doc.slug === slug)

    const htmlContent = match.contentHtml || match.html || ''
    const parsedHtml = await helpers.parseHtml(htmlContent)

    return {
      id: match.id,
      title: match.title,
      image: await storeLocally(`${process.env.COVER_FILE_URI_PREFIX}${match.cover.filename}`, 'images'),
      slug: match.slug,
      intro: match.intro.replace('&hellip;', ''),
      date: match.updatedAt || match.createdAt,
      tags: match.tags.map((tag) => ({ name: tag.name, color: getValidColorKey(tag.color) })),
      meta: {
        title: match?.meta?.title || match.title || '',
        description: match?.meta?.description || match.intro.replace('&hellip;', '') || '',
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

export const getPressroomPostsSlugs = async () => {
  try {
    const docs = await getDocs()

    const result = docs.map((doc) => doc.slug).filter(x => !!x)

    return result
  } catch (error) {
    console.error(error)
  }

  return []
}
