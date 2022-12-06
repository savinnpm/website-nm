import styled from 'styled-components'
import { DownloadIcon } from './DownloadIcon'

export const DownloadButton = ({ text, link }) => {
  return (
    <Container href={link}>
      <DownloadIcon /> {text}
    </Container>
  )
}

const Container = styled.a`
  margin-top: 24px;
  padding: 12px 16px;
  border: 1.5px solid #FFFFFF;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  svg {
    margin-right: 12px;
  }
`
