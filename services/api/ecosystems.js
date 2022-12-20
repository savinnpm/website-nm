import { env } from '../environment'
import { request } from '../http/request'
import { getApiHeaders } from './config'

let docs = null

const getDocs = async () => {
  if (docs) {
    return docs
  }

  try {
    console.log('fetching all ecosystems')

    const dataStr = await request.get(`${env.websiteApiServer}/api/ecosystems?limit=1000&depth=6`, getApiHeaders())
    const data = JSON.parse(dataStr)
    docs = data.docs
    return docs
  } catch (error) {

  }

  return []
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
