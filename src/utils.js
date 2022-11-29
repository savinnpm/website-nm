export const getFormattedDate = (x) => {
  // Safari doesn't like dashes
  const normalized = x.replace(/-/g, '/')

  const code = 'en'

  return new Date(normalized).toLocaleDateString(code, {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  })
}
