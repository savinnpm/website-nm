import styled from 'styled-components'
import { useRouter } from "next/router";

export const LocaleSelector = () => {
  const router = useRouter()

  return (
    <>
    <span>
      <button onClick={() => router.push(router.pathname, undefined, { locale: 'en' })}>English</button>
    </span>

    <span>
      <button onClick={() => router.push(router.pathname, undefined, { locale: 'de' })}>German</button>
    </span>
    </>
  )
}
