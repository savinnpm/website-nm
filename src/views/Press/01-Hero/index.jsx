import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { Button } from '../../../components/Button'

export const Hero = () => {
  return (
    <Container>
      <InnerContainer>
        <Text>
          <Heading>Neptune Mutual Press Room</Heading>
          <Subtitle>Together, let&apos;s build a safer Ethereum DeFi ecosystem for everyone by decentralizing and democratizing crypto-native insurance.</Subtitle>
        </Text>

        <FormContainer>

          <Button
            hierarchy='secondary'
            size='xl'
          >
            <a target='_blank' href='/local-files/audits/001-blocksec.pdf'>Download Press Kit</a>
          </Button>
          <Button
            hierarchy='primary'
            size='xl'
          >
            Media Inquiries
          </Button>
        </FormContainer>

      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 96px;
  padding-bottom: 96px;
  background-color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['25'] : colors.gray['900']};

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
    gap: 32px;
  }
`

const InnerContainer = styled.div`
  ${utils.fullWidthContainer};
`

const Text = styled.div`
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
  }
`

const Heading = styled.h1`
  margin-top: 12px;
  ${typography.styles.displayLg};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.displayMd};
    ${typography.weights.semibold};
  }
`

const Subtitle = styled.p`
  margin-top: 24px;
  color: ${(props) => props.theme.secondaryColor};
  ${typography.styles.textXl};
  ${typography.weights.regular};

  @media (max-width: 768px) {
    margin-top: 16px;
    ${typography.styles.textLg};
    ${typography.weights.regular};
  }
`

const FormContainer = styled.div`
  margin-top: 48px;
  display:flex;
  justify-content:center;
  gap:12px;
`
