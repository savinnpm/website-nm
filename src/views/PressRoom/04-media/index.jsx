import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'

const Media = () => {
  return (
    <Container>
      <HeaderText>
        Neptune Mutual in the Media
      </HeaderText>
    </Container>
  )
}

const Container = styled.div`
  ${utils.fullWidthContainer}
  padding-top: 32px;
`

const HeaderText = styled.h2`
  ${typography.weights.semibold}
  ${typography.styles.displayXs}
  color: ${colors.gray[900]};
`

export { Media }
