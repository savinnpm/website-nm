import styled from 'styled-components'
import { Section } from './Section'
import { VideosSection } from './VideosSection'

export const Content = ({ item }) => {
  return (
    <Container>
      {item.children.map((child, idx) => {
        if (child.type === 'section') {
          return <Section key={idx} section={child} />
        }

        return <VideosSection key={idx} section={child} />
      })}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding-top: 16px;
  padding-bottom: 24px;
`
