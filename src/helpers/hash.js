const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const scrollToHash = async () => {
  await delay(500)

  if (!window.location.hash) return

  const hash = window.location.hash.split('#').map(x => x.trim()).filter(Boolean).shift()

  if (!hash) return

  const el = document.querySelector(`#${hash}`)

  if (!el) return

  el.scrollIntoView()
}
