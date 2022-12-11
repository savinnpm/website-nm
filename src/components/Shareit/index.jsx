import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import styled from 'styled-components'

import { useRouter } from 'next/router'

import { copyToClipBoard, getDns } from '../../helpers'

import { colors } from '../../../styles/colors'
import { Button } from '../Button'

const Shareit = (props) => {
  const { asPath } = useRouter()

  const { t } = useTranslation('common')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 1500)
    }
  }, [copied])

  const copy = (e) => {
    e.preventDefault()

    const origin = typeof window === 'undefined' ? getDns() : window.location.origin
    const text = `${origin}${asPath}`
    copyToClipBoard(text)
    setCopied(true)
  }

  const getUrl = (param, base) => {
    const origin = typeof window === 'undefined' ? getDns() : window.location.origin
    const url = new URL(base)
    url.searchParams.append(param, `${origin}${asPath}`)
    return url.href
  }

  return (
    <Container>

      <Button hierarchy='secondary' size='md' iconLeading iconVariant='copy-01' onClick={copy} iconOnlyMobile>
        {copied ? t('COPIED') : t('COPY_LINK')}
      </Button>

      <Button
        as='a'
        target='_blank'
        hierarchy='secondary'
        size='md'
        iconLeading
        iconVariant='twitter'
        icon='only'
        href={getUrl('url', `https://twitter.com/intent/tweet?text=${props.intro}`)}
      >
        Share on twitter
      </Button>

      <Button
        as='a'
        target='_blank'
        hierarchy='secondary'
        size='md'
        iconLeading
        iconVariant='facebook'
        icon='only'
        href={getUrl('u', 'https://www.facebook.com/sharer/sharer.php')}
      >
        Share on facebook
      </Button>

      <Button
        as='a'
        target='_blank'
        hierarchy='secondary'
        size='md'
        iconLeading
        iconVariant='linkedin'
        icon='only'
        href={getUrl('url', `https://www.linkedin.com/shareArticle?mini=true&title=${props.title}&summary=${props?.intro}&source=Neptune Mutual`)}
      >
        Share on linkedin
      </Button>

    </Container>
  )
}

const Container = styled.div`
  margin-top: 16px;
  padding-top: 24px;
  border-top: 1px solid ${props => props.theme.isLightMode ? colors.gray['200'] : colors.gray['700']};
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
    border-top: none;
  }
`

export { Shareit }
