import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { Button } from '../../../components/Button'
import { CodeSnippet } from './CodeSnippet'
import { codeSnippetHtml } from './data'
import { Features } from './Features'

export const LetsBuidl = () => {
  const { t } = useTranslation('home')

  return (
    <Container>
      <InnerContainer>
        <TextContainer>
          <Heading>{t('Let’s #buidl')}</Heading>
          <SupportingText>{t('Don’t let your users ever leave your DeFi app. With a few lines of code, enable your users to access all cover features. Supply liquidity, purchase covers, and interact with your decentralized insurance pool directly within your own DeFi app, frontend, or backend.')}</SupportingText>
        </TextContainer>

        <CodeSnippetContainer>
          <CodeSnippet html={codeSnippetHtml} />
        </CodeSnippetContainer>

        <FeaturesAndCta>
          <Features />
          <ButtonContainer>
            <Button
              href='https://www.npmjs.com/package/@neptunemutual/sdk'
              target='_blank'
              as='a'
              hierarchy='primary'
              size='2xl'
              iconTrailing
              iconVariant='link-external-01'
            >
              {t('Get the Neptune Mutual SDK')}
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
