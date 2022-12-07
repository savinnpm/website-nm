import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { LinkExternal01 } from '../../../components/Icon/variants/General'
import { TeamCarousel } from './TeamCarousel'

export const Team = () => {
  return (
    <Container>
      <ContentContainer>
        <LinkText href='/careers'>
          <span>We’re hiring!</span>
          <LinkExternal01 width='16' height='16' />
        </LinkText>

        <Title>Meet Our Team</Title>

        <SubHeading>
          We are a global and dynamic team with a mission to create a reliable, fast, and effective platform that protects digital assets.
        </SubHeading>
      </ContentContainer>

      <CarouselContainer>
        <TeamCarousel />
      </CarouselContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 96px;
  padding-bottom: 96px;

  ${utils.fullWidthContainer}
  background-color: ${props => props.theme.isLightMode ? colors.white : colors.gray[800]};
`

const ContentContainer = styled.div`
  text-align: center;

  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
`

const LinkText = styled.a`
  margin-left: auto;
  margin-right: auto;
  width: max-content;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  ${typography.styles.textMd}
  ${typography.weights.semibold}

  color: ${colors[primaryColorKey][500]};
`

const Title = styled.p`
  margin-top: 12px;
  ${typography.styles.displayMd}
  ${typography.weights.semibold}
`

const SubHeading = styled.p`
  margin-top: 20px;
  
  ${typography.styles.textXl}
  ${typography.weights.regular}
  color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.gray[25]};
`

const CarouselContainer = styled.div`
  margin-top: 64px;
`
