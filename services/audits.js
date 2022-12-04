import { storeLocally } from './io/download'
import { request } from './request'
import { mockData } from './_mock_'

let docs = null

const getDocs = async () => {
  if (docs) {
    return docs
  }

  console.log('fetching all audits')

  if (process.env.PROD === 'true') {
    const dataStr = await request.get(`${process.env.API_URL_PREFIX}audits?limit=1000`)
    const data = JSON.parse(dataStr)
    docs = data.docs
    return docs
  }

  docs = mockData.auditList.docs
  return docs
}

export const getAudits = async () => {
  try {
    const docs = await getDocs()

    const result = await Promise.allSettled(docs.map(async (doc) => {
      return {
        id: doc.id,
        title: doc.title,
        report: await storeLocally(`${process.env.FILE_URL_PREFIX}${doc.report.filename}`, 'audits'),
        slug: doc.slug,
        intro: doc.intro,
        startDate: doc.startDate,
        endDate: doc.endDate
      }
    }))

    return result.map(x => x.value)
  } catch (error) {
    console.error(error)
  }

  return []
}

export const getSingleAudit = async (slug) => {
  try {
    const docs = await getDocs()

    const match = docs.find(doc => doc.slug === slug)

    return {
      id: match.id,
      title: match.title,
      report: await storeLocally(`${process.env.FILE_URL_PREFIX}${match.report.filename}`, 'audits'),
      slug: match.slug,
      intro: match.intro,
      startDate: match.startDate,
      endDate: match.endDate
    }
  } catch (error) {
    console.error(error)
  }

  return []
}

export const getAuditSlugs = async () => {
  try {
    const docs = await getDocs()

    const result = docs.map((doc) => doc.slug).filter(x => !!x)

    return result
  } catch (error) {
    console.error(error)
  }

  return []
}
