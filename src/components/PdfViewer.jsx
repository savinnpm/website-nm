import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const PdfViewer = ({ url }) => {
  return (
    <Container>
      <StyledPdfEmbed data={`${url}#view=FitH&toolbar=0&toolbar=0&navpanes=0&scrollbar=0`} type='application/pdf' width='100%'>
        <p>Your web browser doesn't have a PDF plugin. Instead you can <a href={url}>click here to download the PDF file.</a></p>
      </StyledPdfEmbed>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${colors.gray['600']};
  padding-top: 96px;
  padding-bottom: 96px;

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const StyledPdfEmbed = styled.object`
  display: block;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;

  height: 90vh;
  min-height: 600px
`
