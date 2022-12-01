import { useEffect, useState } from 'react'
import { BlogHero } from './BlogHero'
import { Content } from './Content'

export const BlogPost = (props) => {
  const [timeToRead, setTimeToRead] = useState('0 min')

  useEffect(() => {
    if (process.browser) {
      const wpm = 225
      const text = document.getElementsByClassName('article')[0].innerText

      const words = text.trim().split(/\s+/).length
      const time = Math.ceil(words / wpm)

      setTimeToRead(`${time} min`)
    }
  }, [])

  return (
    <>
      <BlogHero title={props.post.title} createdAt={props.post.date} timeToRead={timeToRead} />
      <Content content={props.post.content.html} />
    </>
  )
}
