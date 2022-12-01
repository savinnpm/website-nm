import { storeLocally } from './io/download'
import { serialize } from './serialize'
import { mockData } from './_mock_'

let docs = null

const getDocs = async () => {
  if (docs) {
    return docs
  }

  // const dataStr = await request.get(`${process.env.API_URL_PREFIX}articles?limit=10`)
  // const data = JSON.parse(dataStr)
  // docs = data.docs

  console.log('fetching all blog articles')
  docs = mockData.articleList.docs
  return docs
}

export const getLatestBlogPosts = async () => {
  try {
    const docs = await getDocs()

    const result = await Promise.allSettled(docs.slice(0, 10).map(async (doc) => {
      return {
        id: doc.id,
        title: doc.title,
        image: await storeLocally(`${process.env.FILE_URL_PREFIX}${doc.cover.filename}`, 'blog-images'),
        slug: doc.slug,
        intro: doc.intro.replace('&hellip;', ''),
        date: doc.updatedAt || doc.createdAt,
        tags: doc.tags.map((tag) => tag.name).slice(0, 1)
      }
    }))

    return result.map(x => x.value)
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
        image: await storeLocally(`${process.env.FILE_URL_PREFIX}${doc.cover.filename}`, 'blog-images'),
        slug: doc.slug,
        intro: doc.intro.replace('&hellip;', ''),
        date: doc.updatedAt || doc.createdAt,
        tags: doc.tags.map((tag) => tag.name).slice(0, 1)
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
      image: await storeLocally(`${process.env.FILE_URL_PREFIX}${match.cover.filename}`, 'blog-images'),
      slug: match.slug,
      intro: match.intro.replace('&hellip;', ''),
      date: match.updatedAt || match.createdAt,
      tags: match.tags.map((tag) => tag.name).slice(0, 1),
      content: {
        // raw: serialize(match.content),
        html: serialize(match.content)
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
