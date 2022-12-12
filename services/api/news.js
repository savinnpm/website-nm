import { request } from '../http/request'
import { mockData } from '../_mock_'

let docs = null

const getDocs = async () => {
  if (docs) {
    return docs
  }

  console.log('fetching all news')

  if (process.env.PROD === 'true') {
    const dataStr = await request.get(`${process.env.API_URL_PREFIX}news?limit=1000`)
    const data = JSON.parse(dataStr)
    docs = data.docs
    return docs
  }

  docs = mockData.news.docs
  return docs
}

const transformDoc = async (doc) => {
  return {
    id: doc.id,
    title: doc.title,
    link: doc.link,
    press: {
      name: doc.press.name,
      badge: doc.press.badge
    },
    date: doc.publishedAt || doc.updatedAt || doc.createdAt
  }
}

export const getVideos = async () => {
  try {
    const docs = await getDocs()

    const result = await Promise.allSettled(docs.map(async (doc) => transformDoc(doc)))

    const allVideos = result.map(x => x.value)
    const latestVideos = allVideos.sort((a, b) => {
      return (new Date(a.date) < new Date(b.date) ? 1 : new Date(a.date) > new Date(b.date) ? -1 : 0)
    }).slice(0, 3)

    return latestVideos
  } catch (error) {
    console.error(error)
  }

  return []
}
