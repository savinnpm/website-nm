import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../styles/colors'
import { typography } from '../../../styles/typography'

export const InputHint = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.p`
  margin-top: 6px;
  color: ${props => props.theme.isLightMode ? colors.gray['400'] : colors.gray['50']};
  ${typography.styles.textSm};
  ${typography.weights.regular};

  a {
    text-decoration: underline;
    color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['600'] : colors.gray['50']};

    :hover, :active{
      color: ${colors.rose[600]};
    }
  }
`
