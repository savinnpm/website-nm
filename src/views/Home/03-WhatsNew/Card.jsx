import styled from "styled-components";
import { colors, primaryColorKey } from "../../../../styles/colors";
import { typography } from "../../../../styles/typography";
import { utils } from "../../../../styles/utils";

export const Card = ({ post }) => {
  return (
    <Container href={post.slug} target="_blank" rel="noreferrer">
      <ImageContainer>
        <img src={`/${post.image}`} alt={post.title} />
      </ImageContainer>

      <Time itemprop="published" datetime={post.date}>{new Date(post.date).toDateString()}</Time>

      <Title>{post.title}</Title>

      <Intro>{post.intro}&hellip;</Intro>

      <TagsContainer>
        {post.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
    </Container>
  );
};

const Container = styled.a`
  display: block;
`;

const ImageContainer = styled.div`
  height: 240px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Time = styled.time`
  display: inline-block;
  margin-top: 32px;
  ${typography.styles.textSm};
  ${typography.weights.semibold};
  color: ${props => props.theme.isLightMode ? colors.gray['500'] : colors.gray['200']};
`;

const Title = styled.h3`
  margin-top: 8px;
  color: ${props => props.theme.color};
  ${typography.styles.displayXs};
  ${typography.weights.medium};
  `;

const Intro = styled.p`
  margin-top: 8px;
  color: ${props => props.theme.secondaryColor};
  ${typography.styles.textMd};
  ${typography.weights.regular};
`;

const TagsContainer = styled.div`
  margin-top: 24px;

  display: flex;
`

const Tag = styled.div`
  display: inline-flex;
  padding: 2px 10px;
  border-radius: 9999px;
  background-color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['50'] : colors.gray['700']};
  color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['700'] : colors[primaryColorKey]['400']};

  min-width: 0;

  ${typography.styles.textSm};
  ${typography.weights.medium};
  ${utils.ellipsis};
`
