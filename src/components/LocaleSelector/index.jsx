import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../styles/colors'
import { typography } from '../../../styles/typography'
import { useDebouncedEffect } from '../../hooks/useDebounce'
import { Icon } from '../Icon'
import { InputWithIcon } from '../Input/InputWithIcon'
import { localeNames } from './config'

const options = ['en', 'zh', 'fr', 'de', 'id', 'it', 'ja', 'ko', process.env.NODE_ENV.toLowerCase() === 'development' ? 'test' : undefined].filter(Boolean)

export const LocaleSelector = () => {
  const router = useRouter()
  const [showLanguages, setShowLanguages] = useState(false)
  const [searchChange, setSearchChange] = useState('')
  const [langList, setLangList] = useState([])

  useDebouncedEffect(() => {
    const activeLanguage = options.filter((key) => {
      if (searchChange) {
        return (localeNames[key] || key).toLowerCase().indexOf(searchChange.toLowerCase().trim()) >= 0
      }
      return true
    })
    setLangList(activeLanguage)
  }, 300, [searchChange])

  const optionClickHandle = (e) => {
    router.push(
      { pathname: router.pathname, query: router.query },
      undefined,
      { locale: e.target.getAttribute('data-value') }
    )
    setSearchChange('')
    setShowLanguages(false)
  }

  const show = () => {
    setShowLanguages(!showLanguages)
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
              <InputWithIcon
                placeholder='Seach'
                type='text'
                autoComplete='off'
                onChange={e => { setSearchChange(e.target.value) }}
                containerClassName='input-with-icon-container'
                iconProps={{
                  variant: 'search-md',
                  size: 15
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
      {showLanguages && <CheatBackgroud onClick={show} />}
    </>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

const CheatBackgroud = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 1;
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
  z-index: 2;

  @media (max-width: 768px) {
    position: relative;
  }

`
const Search = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${(props) => props.theme.isLightMode ? colors.gray[200] : colors.gray[700]};

  .input-with-icon-container {
    background-color: ${(props) => props.theme.isLightMode ? colors.white : colors.gray[700]};
    color: ${(props) => props.theme.isLightMode ? colors.gray[500] : colors.gray[300]};
  }
`

const Options = styled.ul`
  list-style-type: none;
  max-height: 310px;
  overflow: hidden;
  overflow-y: auto;
  padding: 10px;

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

`
