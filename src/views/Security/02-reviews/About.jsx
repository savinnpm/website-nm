import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import { colors } from '../../../../styles/colors'
import { FeaturedIcon } from '../../../components/FeaturedIcon'
import { typography } from '../../../../styles/typography'

const About = () => {
  const { t } = useTranslation('security')

  return (
    <Container>
      <FeaturedIcon size='xl' variant='shield-tick' />

      <AboutTitle>{t('SECURITY_REVIEW')}</AboutTitle>
      <AboutContent>{t('SECURITY_REVIEW_TEXT')}</AboutContent>
    </Container>
  )
}

const Container = styled.div``

const AboutTitle = styled.p`
  margin-top: 24px;
  ${typography.styles.displayMd}
  ${typography.weights.semibold}
  color: ${props => props.theme.isLightMode ? colors.gray[900] : colors.white};

  @media (max-width: 768px) {
    margin-top: 12px;
  }
`

const AboutContent = styled.p`
  margin-top: 20px;
  color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.white};
  ${typography.styles.textLg}
  ${typography.weights.regular}

@media (max-width: 768px) {
    margin-top: 16px;
  }
`

export { About }
