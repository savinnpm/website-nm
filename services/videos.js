import { storeLocally } from './io/download'
import { mockData } from './_mock_'

const getVideoDescHTML = (_desc) => {
  // const html = []

  // desc.children.forEach((el) => {
  //   el
  // });
  return ''
}

const getText = (arr) => {
  const texts = []

  arr.forEach(el => {
    if (el.text) {
      texts.push(el.text)
      return
    }

    return texts.push(getText(el.children))
  })

  return texts.join('')
}

export const getVideos = async () => {
  try {
    //   const dataStr = await request.get(`${API_URL_PREFIX}videos?limit=3`)
    //   const data = JSON.parse(dataStr)
    const data = mockData.videoList

    const result = await Promise.allSettled(data.docs.map(async (doc) => {
      return {
        id: doc.id,
        title: doc.title,
        image: await storeLocally(`${process.env.FILE_URL_PREFIX}${doc.thumbnail.filename}`, 'video-thumbnails'),
        videoId: doc.videoId,
        description: {
          html: getVideoDescHTML(doc.description),
          text: getText(doc.description)
        },
        date: doc.updatedAt || doc.createdAt
      }
    }))

    return result.map(x => x.value)
  } catch (error) {
    console.error(error)
  }

  return []
}
