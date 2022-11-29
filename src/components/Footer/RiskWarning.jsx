import styled from "styled-components"
import { colors } from "../../../styles/colors"
import { typography } from "../../../styles/typography"
import { utils } from "../../../styles/utils"

export const RiskWarning = () => {
  return (
    <Container>

    <InnerContainer>
      <Heading>Risk Warning</Heading>
      <Content>Trading crypto assets involves significant risk and can result in the loss of your capital. You should not invest more than you can afford to lose and you should ensure that you fully understand the risks involved. Before trading, please take into consideration your level of experience, investment objectives, and seek independent financial advice if necessary. It is your responsibility to ascertain whether you are permitted to use the services of Neptune Mutual based on the legal requirements in your country of residence.</Content>
    </InnerContainer>

    </Container>
  )
}

const Container = styled.div`
  margin-top: 48px;
`

const InnerContainer = styled.div`
  padding: 32px 0;
  border-width: 1px 0px;
  border-style: solid;
  border-color: ${props => props.theme.isLightMode ? colors.gray['200'] : colors.gray['600']};
`

const Heading = styled.p`
  color: ${props => props.theme.color};
  ${typography.styles.textXl}
  ${typography.weights.semibold}
`

const Content = styled.p`
  margin-top: 8px;
  color: ${props => props.theme.isLightMode ? colors.gray['600'] : colors.gray['300']};

  ${typography.styles.textMd}
  ${typography.weights.regular}
`
