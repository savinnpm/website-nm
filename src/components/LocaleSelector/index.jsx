import { useRouter } from 'next/router'
import styled from 'styled-components'
import { typography } from '../../../styles/typography'
import { Icon } from '../Icon'
import { localeNames } from './config'

const options = ['en', 'de', process.env.NODE_ENV.toLowerCase() === 'development' ? 'test' : undefined].filter(Boolean)

export const LocaleSelector = () => {
  const router = useRouter()

  const handleChange = (e) => {
    router.push(router.pathname, undefined, { locale: e.target.value })
  }

  return (
    <Container>
      <Icon size={20} variant='globe-01' />
      <select name='locale' id='locale' onChange={e => handleChange(e)} value={router.locale}>
        {options.map(locale => {
          return <option key={locale} value={locale}>{localeNames[locale] || locale}</option>
        })}
      </select>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: ${props => props.theme.secondaryColor};
  
  ${typography.styles.textMd};
  ${typography.weights.semibold};
`
