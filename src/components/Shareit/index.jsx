import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import styled from 'styled-components'

import { useRouter } from 'next/router'

import { Icon } from '../Icon'

import { copyToClipBoard } from '../../helpers'

import { colors } from '../../../styles/colors'
import { shadows } from '../../../styles/shadows'

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
    const text = `${window.location.origin}${asPath}`
    copyToClipBoard(text)
    setCopied(true)
  }

  const share = (e) => {
    e.preventDefault()

    const url = new URL(e.target.getAttribute('data-href'))
    url.searchParams.append(e.target.getAttribute('data-url'), `${window.location.origin}${asPath}`)
    const newWindow = window.open(url.href)
    newWindow.opener = null
  }

  return (
    <Share>

      <Btn onClick={copy}>
        <Icon size='18' variant='copy-01' />  <BtnLabel>{copied ? t('COPIED') : t('COPY_LINK')}</BtnLabel>
      </Btn>

      <Btn onClick={share} data-url='url' data-href={`https://twitter.com/intent/tweet?text=${props.intro}`}>
        <Icon size='18' variant='twitter' />
      </Btn>

      <Btn onClick={share} data-url='u' data-href='https://www.facebook.com/sharer/sharer.php'>
        <Icon size='18' variant='facebook' />
      </Btn>

      <Btn onClick={share} data-url='url' data-href={`https://www.linkedin.com/shareArticle?mini=true&title=${props.title}&summary=${props?.intro}&source=Neptune Mutual`}>
        <Icon size='18' variant='linkedin' />
      </Btn>

    </Share>
  )
}

const Share = styled.div`
  text-align: center;
  border-top: 1px solid ${props => props.theme.isLightMode ? colors.gray['200'] : colors.gray['700']};
  padding-top: 24px;
  margin-top: 16px;

  @media (min-width: 770px) {
    text-align: left;
  }
`

const Btn = styled.button`
  cursor: pointer;
  display: inline-flex;
  color: ${props => props.theme.isLightMode ? colors.gray['700'] : colors.white};
  border: 1px solid ${props => props.theme.isLightMode ? colors.gray['300'] : colors.gray['600']};
  border-radius: 8px;
  padding: 10px;
  margin-right: 12px;
  font-size: 14px;
  font-weight: 600;
  
  &:focus {
    outline: none;
    box-shadow: ${shadows.sm}
  }

  svg {
    z-index: -1;
  }
`
const BtnLabel = styled.label`
  margin-left:10px;
  display: none;

  @media (min-width: 770px) {
    display: block;
  }
`

export { Shareit }
