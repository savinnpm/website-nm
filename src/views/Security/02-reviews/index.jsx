
import styled from 'styled-components'

import { utils } from '../../../../styles/utils'

import { About } from './About'
import { Carousel } from './Carousel'

export const Reviews = (props) => {
  return (
    <Review>
      <About />
      <Carousel audits={props.audits} />
    </Review>
  )
}

const Review = styled.div`
  display: flex;
  ${utils.fullWidthContainer}
  margin-bottom: 96px;
  margin-top: 64px;
`
