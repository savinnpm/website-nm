import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { typography } from '../../../../styles/typography'
import { FeaturedIcon } from '../../../components/FeaturedIcon'
import { features } from './data'

export const Features = () => {
  const { t } = useTranslation('careers')

  return (
    <Container>
      {features.map(feature => {
        return (
          <Feature key={feature.title}>
            <FeaturedIcon variant={feature.icon} size='lg' />
            <Title>{t(feature.title)}</Title>
            <Content>{t(feature.content)}</Content>
          </Feature>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 96px;
  display: flex;
  gap: 32px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 64px;
    gap: 40px;
  }
`

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Title = styled.h3`
  margin-top: 20px;
  color: ${props => props.theme.color};

  ${typography.styles.textXl}
  ${typography.weights.semibold}

  @media (max-width: 768px) {
    margin-top: 16px;
    ${typography.styles.textLg}
    ${typography.weights.semibold}
  }
`

const Content = styled.p`
  margin-top: 8px;
  color: ${props => props.theme.secondaryColor};

  ${typography.styles.textMd}
  ${typography.weights.regular}

  @media (max-width: 768px) {
    margin-top: 4px;
  }
`
