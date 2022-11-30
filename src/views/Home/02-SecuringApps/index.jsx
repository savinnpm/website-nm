import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { data } from './data'

export const SecuringApps = () => {
  const { t } = useTranslation('home')

  return (
    <Container>
      <InnerContainer>
        <ContentContainer>
          <Heading>{t('SECURING_APPS_TITLE')}</Heading>
          <CoversContainer>
            {data.map((app) => {
              return (
                <AppContainer key={app.name}>
                  <AppImg src={app.src} alt={app.name} />
                  <AppName>{app.name}</AppName>
                </AppContainer>
              )
            })}
          </CoversContainer>
        </ContentContainer>
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

  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`

const ContentContainer = styled.div`
  background-color: ${(props) => props.theme.isLightMode ? colors.gray['50'] : colors.gray['700']};
  padding: 64px;
  border-radius: 16px;

  @media (max-width: 768px) {
    padding: 48px 24px;
    border-radius: 0;
  }
`

const Heading = styled.p`
  color: ${(props) => props.theme.secondaryColor};
  text-align: center;

  ${typography.styles.textXl};
  ${typography.weights.regular};

  @media (max-width: 768px) {
    ${typography.styles.textMd};
    ${typography.weights.medium};
  }
`

const CoversContainer = styled.div`
  margin-top: 32px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
`

const AppImg = styled.img`
  height: 32px;
`

const AppName = styled.p`
  color: ${(props) => props.theme.color};

  ${typography.styles.textXl};
  ${typography.weights.bold};
`
