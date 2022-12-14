import { request } from '../http/request'
import { mockData } from '../_mock_'
import { getApiHeaders } from './config'

let docs = null

const getDocs = async () => {
  if (docs) {
    return docs
  }

  console.log('fetching all ecosystems')

  if (process.env.PROD === 'true') {
    const dataStr = await request.get(`${process.env.API_URL_PREFIX}ecosystems?limit=1000&depth=6`, getApiHeaders())
    const data = JSON.parse(dataStr)
    docs = data.docs
    return docs
  }

  docs = mockData.ecosystems.docs
  return docs
}

const transformDoc = (doc) => {
  return {
    id: doc.id,
    type: doc.type,
    content: doc.content
  }
}

export const getEcosystems = async () => {
  try {
    const docs = await getDocs()

    const result = await docs.map((doc) => transformDoc(doc))

    return result
  } catch (error) {
    console.error(error)
  }

  return []
}
