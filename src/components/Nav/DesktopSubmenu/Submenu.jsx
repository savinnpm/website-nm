import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { shadows } from '../../../../styles/shadows'
import { Section as DesktopSection } from './Section'

export const Submenu = ({ item }) => {
  return (
    <Container>
      <LeftSpace />
      <Content>
        {item.children.map((child, idx) => {
          return (
            <Section key={idx} type={child.type}>
              <DesktopSection section={child} />
            </Section>
          )
        })}
      </Content>
      <RightSpace />
    </Container>
  )
}

const Container = styled.div`
  --left-bg: ${props => props.theme.primaryBackgroundColor};
  --right-bg: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.gray['900']};
  position: fixed;
  top: var(--header-height);
  left: 0px;
  max-height: 80vh;
  z-index: 2;
  width: 100%;
  overflow-x: hidden;
  background-color: ${props => props.theme.primaryBackgroundColor};
  display: flex;
  border-top: 1px solid ${(props) => props.theme.isLightMode ? colors.gray['100'] : colors.gray['700']};
  box-shadow: ${props => props.theme.isLightMode ? shadows.lg : shadows['2xl']};
`

const Content = styled.div`
  flex: 1 1 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
`

const LeftSpace = styled.div`
  flex: 1;
  background-color: var(--left-bg);
`

const RightSpace = styled.div`
  flex: 1;
  background-color: var(--right-bg);
`

const Section = styled.div`
  padding: 32px;
  padding-left: ${props => props.type === 'section' ? undefined : '20px'};

  flex: 1;
  flex-basis: ${props => props.type === 'section' ? undefined : '560px'};
  background-color: ${props => props.type === 'section' ? undefined : 'var(--right-bg)'};
`
