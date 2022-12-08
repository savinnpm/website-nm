import Link from 'next/link'
import styled from 'styled-components'

import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'

const Hero = ({ slugs, activeSlug }) => {
  return (
    <Container>
      <InnerContainer>
        <h1>
          <Title>Policy</Title>
          <SubHeading>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius dictum volutpat. Ut augue mi, pharetra eget hendrerit id, venenatis a dolor. Nullam luctus massa eget arcu scelerisque sagittis.
          </SubHeading>
        </h1>

        <HorizontalTabs>
          {
            slugs.map(({ slug, title }, i) => (
              <Tab
                key={i} href={`/policy/${slug}`}
                isactive={(activeSlug === slug) ? 'true' : 'false'}
              >
                {title}
              </Tab>
            ))
          }
        </HorizontalTabs>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['25'] : colors.gray['900']};
`

const InnerContainer = styled.div`
  ${utils.fullWidthContainer}
  padding-top: 96px;
`

const Title = styled.p`
  ${typography.styles.displayLg}
  ${typography.weights.semibold}
`

const SubHeading = styled.p`
  margin-top: 24px;
  ${typography.styles.textXl}
  ${typography.weights.regular}

  color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.gray[25]};
`

const HorizontalTabs = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 56px;
  padding-bottom: 16px;

  overflow-x: auto;
`

const Tab = styled(Link)`
  padding: 8px 12px;
  ${typography.styles.textSm}
  ${typography.weights.semibold}
  border-radius: 6px;
  color: ${colors.gray[500]};
  white-space: nowrap;

  &[isactive="true"] {
    background-color: ${props => props.theme.isLightMode ? colors[primaryColorKey][100] : colors.gray[600]};
    color: ${props => props.theme.isLightMode ? colors[primaryColorKey][700] : colors.white};
  }
`

export { Hero }
