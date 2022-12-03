import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { Button } from '../../../components/Button'
import { Card } from '../../Home/03-WhatsNew/Card'

export const RelatedPosts = ({ blogPosts }) => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <InnerContainer>
        <TextAndCta>
          <TextContainer>
            <Heading>Related Posts</Heading>
          </TextContainer>

          <Button
            href='/blog'
            as={Link}
            hierarchy='primary'
            size='xl'
          >
            {t('VIEW_ALL')}
          </Button>
        </TextAndCta>

        <BlogsContainer>
          {blogPosts.slice(0, 3).map((post) => (
            <SingleCard key={post.id}>
              <Card post={post} />
            </SingleCard>
          ))}
        </BlogsContainer>

      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 96px;
  padding-bottom: 96px;

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const InnerContainer = styled.div`
  ${utils.fullWidthContainer};
`

const TextAndCta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const TextContainer = styled.div`
  max-width: 768px;
`

const Heading = styled.h2`
  color: ${(props) => props.theme.color};

  ${typography.styles.displayXs};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.displaySm};
    ${typography.weights.semibold};
  }
`

const BlogsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 32px;
`
const SingleCard = styled.div`
  max-width: 384px;
`
