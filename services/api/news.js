import { env } from '../environment'
import { request } from '../http/request'
import { storeLocally } from '../io/download'
import { getApiHeaders } from './config'

let docs = null

const getDocs = async () => {
  if (docs) {
    return docs
  }

  try {
    console.log('fetching all news')

    const dataStr = await request.get(`${env.websiteApiServer}/api/news?limit=1000`, getApiHeaders())
    const data = JSON.parse(dataStr)
    docs = data.docs
    return docs
  } catch (error) {

  }

  return []
}

const transformDoc = async (doc) => {
  return {
    id: doc.id,
    title: doc.title,
    link: doc.link,
    image: await storeLocally(`${env.coverFileUrlPrefix}${doc.cover.filename}`, 'images'),
    alt: doc.cover.alt || '',
    press: {
      name: doc.press.name,
      badge: doc.press.badge
    },
    date: doc.publishedAt || doc.updatedAt || doc.createdAt
  }
}

export const getNews = async () => {
  try {
    const docs = await getDocs()

    const result = await Promise.allSettled(docs.map(async (doc) => transformDoc(doc)))

    const allVideos = result.map(x => x.value)
    const latestVideos = allVideos.sort((a, b) => {
      return (new Date(a.date) < new Date(b.date) ? 1 : new Date(a.date) > new Date(b.date) ? -1 : 0)
    })

    return latestVideos
  } catch (error) {
    console.error(error)
  }

  return []
}
