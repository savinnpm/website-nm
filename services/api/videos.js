import { helpers } from '../helpers'
import { storeLocally } from '../io/download'
import { request } from '../http/request'
import { mockData } from '../_mock_'

const getVideoDurationText = (timestamp) => {
  // 2
  const hours = Math.floor(timestamp / 60 / 60)

  // 37
  const minutes = Math.floor(timestamp / 60) - (hours * 60)

  // 42
  const seconds = timestamp % 60

  const formatted = [hours > 0 && hours, minutes, seconds].filter(x => x !== false).map(x => x.toString().padStart(2, '0')).join(':')

  return {
    formatted,
    text: (hours > 0 ? hours.toString() + ' hours, ' : '') + minutes.toString() + ' minutes, ' + seconds.toString() + ' seconds'
  }
}

let docs = null

const getDocs = async () => {
  if (docs) {
    return docs
  }

  console.log('fetching all videos')

  if (process.env.PROD === 'true') {
    const dataStr = await request.get(`${process.env.API_URL_PREFIX}videos?limit=1000`)
    const data = JSON.parse(dataStr)
    docs = data.docs
    return docs
  }

  docs = mockData.videos.docs
  return docs
}

const transformDoc = async (doc) => {
  return {
    id: doc.id,
    title: doc.title,
    image: await storeLocally(`${process.env.FILE_URL_PREFIX}${doc.thumbnail.filename}`, 'images'),
    videoId: doc.videoId,
    description: {
      // html: helpers.serialize(doc.description),
      text: helpers.getText(doc.description).substring(0, 56)
    },
    length: doc.length,
    duration: getVideoDurationText(doc.length),
    date: doc.updatedAt || doc.createdAt
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
