import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { FeaturedPostCard } from './FeaturedPostCard'

export const FeaturedPosts = ({ posts }) => {
  const { t } = useTranslation('blog')

  return (
    <Container>
      <Heading>{t('Featured Posts')}</Heading>

      <GridContainer>
        {posts.map((post, i) => <FeaturedPostCard key={i} post={post} />)}
      </GridContainer>
    </Container>
  )
}

const Container = styled.div`
  ${utils.fullWidthContainer};
  margin: 56px auto 96px;
  @media screen and (max-width: 1023px) {
    margin-bottom: 34px;
  }
`

const Heading = styled.h2`
  color: ${props => props.theme.color};
  ${typography.styles.displayXs};
  ${typography.weights.semibold};

`

const GridContainer = styled.div`
  display: grid;
  margin-top: 32px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
  
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`
