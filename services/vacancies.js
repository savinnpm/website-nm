import { request } from './request'
import { mockData } from './_mock_'

let docs = null

const getDocs = async () => {
  if (docs) {
    return docs
  }

  console.log('fetching all vacancies')

  if (process.env.PROD === 'true') {
    const dataStr = await request.get(`${process.env.API_URL_PREFIX}vacancies?limit=1000`)
    const data = JSON.parse(dataStr)
    docs = data.docs
    return docs
  }

  docs = mockData.vacancies.docs
  return docs
}

export const getVacancies = async () => {
  try {
    const docs = await getDocs()

    const result = await Promise.allSettled(docs.map(async (doc) => {
      return {
        id: doc.id,
        title: doc.title,
        slug: doc.id,
        intro: doc.intro,
        type: doc.type,
        badges: JSON.parse(doc.badges || '[]'),
        location: doc.location,
        department: doc.department,
        form: doc.form
      }
    }))

    return result.map(x => x.value)
  } catch (error) {
    console.error(error)
  }

  return []
}

export const getSingleVacancy = async (slug) => {
  try {
    const docs = await getDocs()

    const match = docs.find(doc => doc.id === slug)

    return {
      id: match.id,
      title: match.title,
      slug: match.id,
      intro: match.intro,
      type: match.type,
      badges: JSON.parse(match.badges || '[]'),
      location: match.location,
      department: match.department,
      form: match.form
    }
  } catch (error) {
    console.error(error)
  }

  return []
}

export const getVacancySlugs = async () => {
  try {
    const docs = await getDocs()

    const result = docs.map((doc) => doc.id).filter(x => !!x)

    return result
  } catch (error) {
    console.error(error)
  }

  return []
}
