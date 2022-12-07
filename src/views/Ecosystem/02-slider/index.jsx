import styled from 'styled-components'
import { utils } from '../../../../styles/utils'
import { Carousel } from './Carousel'
import { Filter } from './Filter'

export const EcosystemSlider = ({ ecosystems }) => {
  return (
    <Container>
      <Filter ecosystems={ecosystems} />
      <Carousel ecosystems={ecosystems} />
    </Container>
  )
}

const Container = styled.div`
  ${utils.fullWidthContainer};
  overflow: hidden;
`
