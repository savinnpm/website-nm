import styled from 'styled-components'
import { typography } from '../../../styles/typography'
import { Tag } from '../../components/ArticleCard'

export const Tags = ({ tags }) => {
  if (!tags?.length) return <></>

  return (
    <Container>
      <p>Tags</p>

      <TagsContainer>
        {
          tags.map((tag, i) => (
            <Tag key={i} tag={tag}>{tag.name}</Tag>
          ))
        }
      </TagsContainer>
    </Container>
  )
}

const Container = styled.div`
  margin: 50px auto 32px;

  ${typography.styles.textMd};
  ${typography.weights.semibold};

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const TagsContainer = styled.div`
  margin-top: 16px;

  display: flex;
  gap: 8px;
  flex-wrap: wrap;

`
