import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { utils } from '../../../../styles/utils'

export const Hero = () => {
  return (
    <Container>
      <InnerContainer>
        <h1>Interested in Pursuing a Career with Neptune Mutual?</h1>

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
