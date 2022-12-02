import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { BrandCarousel } from './Brand-Carousel'

export const Partners = () => {
  const { t } = useTranslation('home')

  return (
    <Container>
      <InnerContainer>
        <Heading>{t('POWERED_BY_YOU')}</Heading>
        <FeaturedPartners>
          <img src='/assets/images/partners/fenbushi-capital.png' alt='logo of fenbushi capital' />
          <img src='/assets/images/partners/animoca-brands.png' alt='logo of animoca brands' />
        </FeaturedPartners>
        <BrandCarousel />
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 96px;
  padding-bottom: 96px;
  background-color: ${(props) => props.theme.isLightMode ? colors.gray['50'] : colors.gray['700']};

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const InnerContainer = styled.div`
  ${utils.fullWidthContainer};
`

const Heading = styled.h2`
  color: ${(props) => props.theme.color};
  text-align: center;

  ${typography.styles.displayMd};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.displaySm};
    ${typography.weights.semibold};
  }
`

const FeaturedPartners = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:64px;
  margin-top: 64px;
  justify-content: center;
  align-items: center;

  & img:first-child {
    max-width: 402px;
  }

  & img:last-child {
    max-width: 145px;
  }
`
