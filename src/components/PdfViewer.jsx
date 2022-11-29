import styled from "styled-components"
import { colors } from "../../styles/colors"

export const PdfViewer = ({url}) => {
  return (
    <Container>
      <StyledPdfEmbed src={`${url}#view=FitH&toolbar=0&toolbar=0&navpanes=0&scrollbar=0`} width="100%"/>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${props => colors.gray['600']};
  padding-top: 96px;
  padding-bottom: 96px;

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const StyledPdfEmbed = styled.embed`
  display: block;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;

  height: 90vh;
  min-height: 600px
`