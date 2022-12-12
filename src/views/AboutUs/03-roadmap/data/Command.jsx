import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../components/Icon'

export const Command = ({ text }) => {
  const [copied, setCopied] = useState(false)

  const copyText = async () => {
    try {
      await navigator?.clipboard?.writeText(text)
      setCopied(true)
    } catch (e) {
      console.log('failed to copy: ', e)
    }
  }

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 1000)
    }
  }, [copied])

  return (
    <CodeContainer>
      {text} <StyledButton onClick={copyText} copied={copied}><Icon variant='copy-01' size={12} /></StyledButton>
    </CodeContainer>
  )
}

const CodeContainer = styled.pre`
  margin-top: 28px;
  font-family: 'Roboto Mono', monospace;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  max-width: 420px;

  border: 1px solid currentColor;
  border-radius: 4px;
  padding: 10px 16px;
`

const StyledButton = styled.button`
  /* Button Reset: Start */
  border: none;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
  @media screen and (-ms-high-contrast: active) {
    border: 2px solid currentColor;
  }
  /* Button Reset: End */

  display: ${props => props.copied ? 'none' : 'inline-flex'};
`
