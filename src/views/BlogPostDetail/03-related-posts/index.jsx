import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { Button } from '../../../components/Button'
import { ArticleCard } from '../../../components/ArticleCard'

export const RelatedPosts = ({ blogPosts }) => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <InnerContainer>
        <TextAndCta>
          <TextContainer>
            <Heading>Related Posts</Heading>
          </TextContainer>

          <ButtonContainer>
            <Button
              href='/blog'
              as={Link}
              hierarchy='primary'
              size='xl'
            >
              {t('VIEW_ALL')}
            </Button>
          </ButtonContainer>

          <BlogsContainer>
            {blogPosts.slice(0, 3).map((post) => (
              <SingleCard key={post.id}>
                <ArticleCard post={post} />
              </SingleCard>
            ))}
          </BlogsContainer>
        </TextAndCta>

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
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    gap: 48px;
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
  gap: 32px;
  width: 100%;
  
  @media (max-width: 768px) {
    gap: 48px;
    flex-direction: column;
    order: 1;
  }
`

const SingleCard = styled.div``

const ButtonContainer = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`
