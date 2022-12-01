import styled from 'styled-components'
import { colors } from '../../../../../styles/colors'
import { typography } from '../../../../../styles/typography'
import { utils } from '../../../../../styles/utils'
import { Icon } from '../../../../components/Icon'

const dateToShow = (timeStamp) => {
  const created = new Date(timeStamp)
  const monthName = created.toString().split(' ')[1]
  const date = created.getDate()
  const year = created.getFullYear()

  return `${date} ${monthName} ${year}`
}

export const BlogHero = ({ title, createdAt, timeToRead }) => {
  const blogCreated = dateToShow(createdAt)

  return (
    <Container>
      <Header>
        <BlogInfoContainer>
          <BlogInfo>{blogCreated}</BlogInfo>
          <Icon size={8} variant='dot' />
          <BlogInfo>{timeToRead} read</BlogInfo>
        </BlogInfoContainer>
        <Heading>
          {title}
        </Heading>
      </Header>
      <ImageContainer>
        {/* @ToDo: change image according to post */}
        <img src='/assets/images/hero/cover.png' alt='Neptune' />
      </ImageContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  padding-top: 64px;
  padding-bottom: 96px;

  ${utils.fullWidthContainer};

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
    flex-direction: column;
    align-items: stretch;
  }
`

const Header = styled.div`
  flex: 1;
`

const Heading = styled.h1`
  margin-top: 16px;
  ${typography.styles.displayXL};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.displayMd};
    ${typography.weights.semibold};
  }
`

const BlogInfoContainer = styled.div`
  display: flex;
  align-items:center; 
  margin-bottom: 16px;
  gap: 8px; 
`

const BlogInfo = styled.p`
  color: ${(props) => props.theme.secondaryColor};
  ${typography.styles.textMd};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    margin-bottom: 12px;
    ${typography.styles.textMd};
    ${typography.weights.semibold};
  }
`

const ImageContainer = styled.div`
  flex: 1;
  height: 560px;
  max-width: 100%;
  border: 1px solid
    ${(props) => (props.theme.isLightMode ? colors.white : colors.gray['600'])};
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 240px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`
