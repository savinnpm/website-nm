import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { typography } from '../../styles/typography'
import { utils } from '../../styles/utils'
import { Button } from './Button'

export const PdfViewer = ({ url }) => {
  return (
    <Container>
      <InnerContainer>
        <StyledPdfEmbed data={`${url}#view=FitH&toolbar=0&toolbar=0&navpanes=0&scrollbar=0`} type='application/pdf' width='100%'>
          <TextContainer>
            <Heading>Note</Heading>
            <SupportingText>Your web browser doesn't have a PDF plugin. Instead you can click below to download the PDF file.</SupportingText>
          </TextContainer>

          <ButtonContainer>
            <Button
              href={url}
              as='a'
              hierarchy='primary'
              size='xl'
              iconLeading
              iconVariant='download-01'
            >
              Download File
            </Button>
          </ButtonContainer>
        </StyledPdfEmbed>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${colors.gray['600']};
  color: ${colors.white};
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

const StyledPdfEmbed = styled.object`
  display: block;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;

  height: 90vh;
  min-height: 600px;
`

const TextContainer = styled.div`
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
`

const Heading = styled.h2`
  ${typography.styles.displayMd};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.displaySm};
    ${typography.weights.semibold};
  }
`

const SupportingText = styled.p`
  margin-top: 20px;

  ${typography.styles.textXl};
  ${typography.weights.regular};

  @media (max-width: 768px) {
    margin-top: 16px;
    ${typography.styles.textLg};
    ${typography.weights.regular};
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`
