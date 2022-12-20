import { env } from '../environment'

export const getApiHeaders = () => {
  return { Authorization: `Bearer ${env.websiteApiAuthToken}` }
}
