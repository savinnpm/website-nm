import styled from 'styled-components'

import {
  Prism as SyntaxHighlighter,
  createElement
} from 'react-syntax-highlighter'
import {
  dracula as atomDark,
  coldarkCold
} from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { colors } from '../../../../styles/colors'

import '@fontsource/roboto-mono/latin.css'

export const CodeSnippet = ({ text, theme }) => {
  return (
    <Container>
      <SyntaxHighlighter
        style={theme === 'light' ? coldarkCold : atomDark}
        language='javascript'
        showLineNumbers
        customStyle={{
          background: 'transparent',
          padding: '0px',
          paddingRight: 24,
          margin: 0
        }}
        lineNumberStyle={{
          padding: 0,
          textAlign: 'center'
        }}
        renderer={({ rows, stylesheet, useInlineStyles }) => {
          return rows.map((node, i) => (
            <div className='code-line' key={i}>
              {createElement({
                node,
                stylesheet,
                useInlineStyles,
                key: `code-segement${i}`
              })}
            </div>
          ))
        }}
      >
        {text}
      </SyntaxHighlighter>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 12px;
  background: ${(props) => (props.theme.isLightMode ? colors.indigo['50'] : colors.gray['900'])};
  overflow: hidden;

  height: min-content;
  min-width: 0;

  & code {
    font-family: 'Roboto Mono', monospace !important;
    font-weight: 500 !important;

    .token {
      background-color: transparent !important;
    }
  }

  & code > .code-line .linenumber + span {
    padding-left: 24px;
  }

  & code > .code-line .linenumber {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
    width: 4rem;
    background-color: ${(props) => props.theme.isLightMode ? colors.indigo['100'] : colors.gray['700']};
    color: ${(props) => props.theme.isLightMode ? colors.indigo['500'] : colors.gray['300']} !important;
  }

  & code > .code-line:first-child .linenumber {
    padding-top: 24px !important;
  }

  & code > .code-line:last-child .linenumber {
    padding-bottom: 24px !important;
  }

  & code {
    font-family: 'Roboto Mono', monospace !important;
    font-weight: 500 !important;
  }
`
