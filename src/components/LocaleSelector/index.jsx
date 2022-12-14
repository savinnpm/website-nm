import { useState } from 'react'

import { useRouter } from 'next/router'
import styled from 'styled-components'

import {
  colors,
  primaryColorKey
} from '../../../styles/colors'
import { typography } from '../../../styles/typography'
import { Icon } from '../Icon'
import { InputWithIcon } from '../Input/InputWithIcon'
import {
  availableLocales,
  localeNames
} from './config'

const options = availableLocales

export const LocaleSelector = (props) => {
  const router = useRouter()
  const [showLanguages, setShowLanguages] = useState(false)
  const [langList, setLangList] = useState(options)

  const filter = (e) => {
    const activeLanguage = options.filter((key) => {
      if (e.target.value) {
        return (localeNames[key] || key).toLowerCase().indexOf(e.target.value.toLowerCase().trim()) >= 0
      }
      return true
    })
    setLangList(activeLanguage)
  }

  const optionClickHandle = (e) => {
    router.push(
      { pathname: router.pathname, query: router.query },
      undefined,
      { locale: e.target.getAttribute('data-value') }
    )
    setLangList(options)
    setShowLanguages(false)
  }

  const show = () => {
    setShowLanguages(!showLanguages)
    if (props.setIsLocaleSelectorOpen && typeof props.setIsLocaleSelectorOpen === 'function') {
      props.setIsLocaleSelectorOpen(!showLanguages)
    }
  }

  return (
    <>
      <Container>
        <InnerContainer onClick={show}>
          <Icon size={20} variant='globe-01' />
          <SelectedLanguage>{localeNames[router.locale] || router.locale}</SelectedLanguage>
        </InnerContainer>
        {showLanguages && (
          <LanguageContainer>
            <Search>
              <BackBtn onClick={show}><Icon variant='arrow-left' size={16} /> Back</BackBtn>
              <InputWithIcon
                placeholder='Search Language'
                type='text'
                autoComplete='off'
                onChange={filter}
                containerClassName='input-with-icon-container'
                iconProps={{
                  variant: 'search-md',
                  size: 16
                }}
              />
            </Search>
            <Options onClick={optionClickHandle}>
              {langList.map(locale => {
                if (locale === router.locale) {
                  return true
                }
                return <li key={locale} data-value={locale}>{localeNames[locale] || locale}</li>
              })}
            </Options>
            <Selected>{localeNames[router.locale]} <Icon variant='check-circle' size='18' />
            </Selected>
          </LanguageContainer>
        )}
      </Container>
      {showLanguages && <PlaceholderBackground onClick={show} />}
    </>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) { 
    position: unset;
  }
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  color: ${props => props.theme.secondaryColor};

  ${typography.styles.textMd};
  ${typography.weights.semibold};
`

const PlaceholderBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 2;
`

const SelectedLanguage = styled.button`
  cursor: pointer;
`

const LanguageContainer = styled.div`
  position: absolute;
  width: 260px;
  top: 35px;
  right: 0;
  border: 1px solid ${(props) => props.theme.isLightMode ? colors.gray[200] : colors.gray[700]};
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 8px;
  background-color: ${(props) => props.theme.isLightMode ? colors.white : colors.gray[800]};
  z-index: 10;

  @media (max-width: 768px) {
    top: -74px;
    left: 0;
    width: 100%;
    border-radius: 0;
    border: none;
  }

`
const Search = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${(props) => props.theme.isLightMode ? colors.gray[200] : colors.gray[700]};

  @media (max-width: 768px) {
    padding-top: 15px;
    padding-bottom: 21px;
  }

  .input-with-icon-container {
    background-color: ${(props) => props.theme.isLightMode ? colors.white : colors.gray[700]};
    color: ${(props) => props.theme.isLightMode ? colors.gray[500] : colors.gray[300]};

    @media (max-width: 768px) {
      ${typography.styles.textSm}
    }
  }
`

const BackBtn = styled.button`
  display: none;
  align-items: center;
  color: ${(props) => props.theme.isLightMode ? colors.gray[600] : colors.gray[25]};
  background-color: ${(props) => props.theme.isLightMode ? colors.gray[100] : colors.gray[700]};
  border-radius: 6px;
  margin-bottom: 18px;
  ${typography.weights.semibold};
  cursor: pointer;
  padding: 4px 8px;

  svg {
    margin-right: 12px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

const Options = styled.ul`
  list-style-type: none;
  max-height: 310px;
  overflow: hidden;
  overflow-y: auto;
  padding: 10px;
  margin-top: 0;

  li {
    ${typography.weights.medium}
    ${typography.styles.textSm}
    color: ${(props) => props.theme.isLightMode ? colors.gray[700] : colors.gray[400]};
    padding: 9px 10px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.isLightMode ? colors.gray[50] : colors.gray[700]};
      color: ${(props) => props.theme.isLightMode ? colors.gray[700] : colors.gray[200]};
      border-radius: 6px;
    }

    @media (max-width: 768px) {
      color: ${(props) => props.theme.isLightMode ? colors.gray[700] : colors.gray[25]};
      padding-top: 16px;
      ${typography.weights.semibold}
      ${typography.styles.textMd}
    }
    
  }

  @media (max-width: 768px) {
    max-height: 100vh;
    height: calc(100vh - (125px + 73px));
  }
`
const Selected = styled.div`
  border-top: 1px solid ${(props) => props.theme.isLightMode ? colors.gray[200] : colors.gray[700]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${typography.weights.medium}
  ${typography.styles.textSm}
  color: ${(props) => props.theme.isLightMode ? colors[primaryColorKey][700] : colors[primaryColorKey][500]};
  padding: 15px 16px;

  @media (max-width: 768px) {
    ${typography.styles.textMd}
    padding-top: 20px;
    padding-bottom: 28px;
  }
`
