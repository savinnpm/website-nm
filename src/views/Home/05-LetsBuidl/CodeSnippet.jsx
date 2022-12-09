import '@fontsource/roboto-mono/latin.css'
import styled from 'styled-components'

import { colors, primaryColorKey } from '../../../../styles/colors'

export const CodeSnippet = ({ html }) => {
  return (
    <Container>
      <Pre>
        <Code dangerouslySetInnerHTML={{ __html: html }} />
      </Pre>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 12px;
  background: ${(props) => (props.theme.isLightMode ? colors[primaryColorKey]['50'] : colors.gray['900'])};
  overflow: hidden;
  
  @media (max-width: 768px) {
    border-radius: 0px;
    max-width: none;
    margin-left: -16px;
    margin-right: -16px;
  }

`

const Pre = styled.pre`
  overflow: auto;
`

const Code = styled.code`
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;

  .line{
    position: relative;
    
    &::before {
      content: attr(data-line);
      padding-left: 1rem;
      padding-right: 1rem;
      margin-right: 1rem;
      box-sizing: content-box;
      display: inline-block;
      width: 2rem;
      background-color: ${props => (props.theme.isLightMode ? colors[primaryColorKey]['100'] : colors.gray['700'])};
      color: ${props => (props.theme.isLightMode ? colors[primaryColorKey]['500'] : colors.gray['300'])};
      position: sticky;
      left: 0px;
      top: 0;
    }
  }

  color: ${props => (props.theme.isLightMode ? colors.gray['700'] : colors.gray['50'])};
  
  .token{
    &.function{
      color: ${props => (props.theme.isLightMode ? colors.blue['700'] : colors.blue['300'])};
    }
    
    &.keyword{
      color: ${props => (props.theme.isLightMode ? colors.pink['700'] : colors.pink['500'])};
    }

    &.comment{
      color: ${props => (props.theme.isLightMode ? colors.success['700'] : colors.success['500'])};
    }
  }
`
