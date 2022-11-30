import { useTranslation } from 'react-i18next'
import styled, { useTheme } from 'styled-components'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { Button } from '../../../components/Button'
import { CodeSnippet } from './CodeSnippet'
import { codeSnippet } from './data'
import { Features } from './Features'

export const LetsBuidl = () => {
  const theme = useTheme()
  const { t } = useTranslation('home')

  return (
    <Container>
      <InnerContainer>
        <TextContainer>
          <Heading>{t('LETS_BUIDL')}</Heading>
          <SupportingText>{t('LETS_BUIDL_DESC')}</SupportingText>
        </TextContainer>

        <CodeSnippetContainer>
          <CodeSnippet text={codeSnippet} theme={theme.name} />
        </CodeSnippetContainer>

        <FeaturesAndCta>
          <Features />
          <ButtonContainer>
            <Button
              href='#'
              link
              hierarchy='primary'
              size='2xl'
              iconTrailing
              iconVariant='link-external-01'
            >
              {t('GET_SDK')}
            </Button>
          </ButtonContainer>
        </FeaturesAndCta>
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

const TextContainer = styled.div`
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const Heading = styled.h2`
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

const CodeSnippetContainer = styled.div`
  margin-top: 64px;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
`

const FeaturesAndCta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonContainer = styled.div`
  margin-top: 56px;
  display: inline-flex;
`
