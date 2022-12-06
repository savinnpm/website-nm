import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { Icon } from '../../../components/Icon'

const About = (props) => {
  return (
    <Container>
      <AboutIconContainer>
        <Icon size={24} variant='shield-tick' />
      </AboutIconContainer>

      <AboutTitle>Security Reviews</AboutTitle>
      <AboutContent>Our decentralized insurance marketplace has been subjected to a number of smart contract audits, as well as a code review and penetration testing</AboutContent>
    </Container>
  )
}

const Container = styled.div`
  margin-right: 64px;
  width: 384px;
`

const AboutTitle = styled.h2`
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
  
`

const AboutContent = styled.p`
  color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.white};
  width: 352px;
`

export { About }
