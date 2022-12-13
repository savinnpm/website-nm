export const getApiHeaders = () => {
  return { Authorization: `Bearer ${process.env.API_AUTH_TOKEN}` }
}
