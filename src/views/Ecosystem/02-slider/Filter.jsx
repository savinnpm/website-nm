import styled from 'styled-components'
import { utils } from '../../../../styles/utils'

export const Filter = ({ ecosystems }) => {
  return (
    <Container>
      Filter ({ecosystems.length})
    </Container>
  )
}

const Container = styled.div`
  ${utils.fullWidthContainer};
  text-align: center;
`
