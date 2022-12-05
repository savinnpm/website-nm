import { helpers } from './helpers'
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

const transformDoc = async (doc) => {
  return {
    id: doc.id,
    title: doc.title,
    report: await storeLocally(`${process.env.FILE_URL_PREFIX}${doc.report.filename}`, 'audits'),
    slug: doc.slug,
    intro: doc.intro,
    description: {
      text: helpers.getText(doc.description),
      html: helpers.serialize(doc.description)
    },
    startDate: doc.startDate,
    endDate: doc.endDate,
    partner: {
      name: doc.partner.name,
      slug: doc.partner.slug,
      logo: {
        alt: doc.partner.logo.alt,
        description: doc.partner.logo.description,
        identifier: doc.partner.logo.identifier,
        image: await storeLocally(`${process.env.FILE_URL_PREFIX}${doc.partner.logo.filename}`, 'security-partners')
      }
    }
  }
}

export const getAudits = async () => {
  try {
    const docs = await getDocs()

    const result = await Promise.allSettled(docs.map(async (doc) => await transformDoc(doc)))

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

    return transformDoc(match)
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
