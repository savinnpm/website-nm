import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { Features } from './Features'

export const Benefits = () => {
  const { t } = useTranslation('careers')

  return (
    <Container>
      <InnerContainer>
        <TextContainer>
          <Subheading>{t('BENEFITS_SUBHEADING')}</Subheading>
          <Heading>{t('BENEFITS_HEADING')}</Heading>
          <SupportingText>{t('BENEFITS_SUPPORTING_TEXT')}</SupportingText>
        </TextContainer>

        <Features />

      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 120px;
  padding-bottom: 144px;

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const InnerContainer = styled.div`
  ${utils.fullWidthContainer};
`

const TextContainer = styled.div`
  max-width: 768px;
`

const Subheading = styled.p`
  color: ${(props) => props.theme.isLightMode ? colors[primaryColorKey]['700'] : colors[primaryColorKey]['500']};

  ${typography.styles.textMd};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.textSm};
  }
`

const Heading = styled.h2`
  margin-top: 12px;
  color: ${(props) => props.theme.color};

  ${typography.styles.displayMd};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.displaySm};
    ${typography.weights.semibold};
  }
`

const SupportingText = styled.p`
  margin-top: 20px;
  color: ${(props) => props.theme.secondaryColor};

  ${typography.styles.textXl};
  ${typography.weights.regular};

  @media (max-width: 768px) {
    margin-top: 16px;
    ${typography.styles.textLg};
    ${typography.weights.regular};
  }
`
