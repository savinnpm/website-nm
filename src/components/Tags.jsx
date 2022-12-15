import styled from 'styled-components'
import { typography } from '../../styles/typography'
import { Tag } from './Tag'

export const Tags = ({ tags, type = 'blog' }) => {
  if (!tags?.length) {
    return null
  }

  return (
    <Container>
      <p>Tags</p>

      <TagsContainer>
        {
          tags.map((tag, i) => (
            <Tag key={i} color={tag.color} href={`/${type}/tag/${tag.slug}`}>{tag.name}</Tag>
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
