import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { Icon } from '../../../components/Icon'

const About = () => {
  const { t } = useTranslation('security-reviews')

  return (
    <Container>
      <AboutIconContainer>
        <Icon size={24} variant='shield-tick' />
      </AboutIconContainer>

      <AboutTitle>{t('SECURITY_REVIEW')}</AboutTitle>
      <AboutContent>{t('SECURITY_REVIEW_TEXT')}</AboutContent>
    </Container>
  )
}

const Container = styled.div`
  margin-right: 64px;
  width: 384px;
`

const AboutTitle = styled.p`
  ${typography.styles.displayMd}
  ${typography.weights.semibold}
  color: ${props => props.theme.isLightMode ? colors.gray[900] : colors.white};
  margin-bottom: 20px;
`

const AboutIconContainer = styled.span`
  background-color: ${props => props.theme.isLightMode ? colors.indigo[100] : colors.gray[600]};
  border: 10px solid ${props => props.theme.isLightMode ? colors.indigo[50] : colors.gray[700]};
  border-radius: 28px;
  display: flex;
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.isLightMode ? colors.indigo[600] : colors.white};;
  margin-bottom: 24px;
`

const AboutContent = styled.p`
  color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.white};
  width: 352px;
`

export { About }
