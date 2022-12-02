import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../styles/colors'
import { typography } from '../../../styles/typography'

export const TableOfContents = ({ wrapperClass, title }) => {
  const [headers, setHeaders] = useState([])

  useEffect(() => {
    if (!wrapperClass) return

    const selector = `.${wrapperClass} > h2, .${wrapperClass} > h3, .${wrapperClass} > h4`
    const headerElements = document.querySelectorAll(selector)

    const h = []
    headerElements.forEach((el) => {
      const elName = el.tagName
      const elText = el.textContent.replace(/^(\s)+|(\s)+$/g, '')
      // .replace(/^(\d+\.\s)/g, '') to remove preceeding numbers
      const elId = el.getAttribute('id')

      if (elName === 'H2') {
        h.push({ text: elText, id: elId, children: [] })
      }

      if (elName === 'H3') {
        let lastH2Index = h.length - 1

        if (!h[lastH2Index]) h.push({ text: '', children: [] })

        lastH2Index = h.length - 1
        h[lastH2Index].children.push({ text: elText, id: elId, children: [] })
      }
    })

    setHeaders(h)
  }, [wrapperClass])

  return (
    <Container>
      <Label>Table of Contents</Label>

      <Title>{title}</Title>

      {
        headers?.length
          ? (
            <Content>
              {
                headers.map((e, i) => (
                  <React.Fragment key={i}>
                    {
                      e.text ? <a href={`#${e.id || ''}`}><H2>{e.text}</H2></a> : <></>
                    }
                    {
                    e?.children?.length
                      ? e.children.map((e2, i2) => (
                        <React.Fragment key={i2}>
                          <a href={`#${e2.id || ''}`}><H3>{e2.text}</H3></a>
                        </React.Fragment>
                      ))
                      : <></>
                  }
                  </React.Fragment>
                ))
            }
            </Content>
            )
          : <></>
      }

    </Container>
  )
}

const Container = styled.div`
  max-width: 284px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    position: sticky;
    top: 100px;

    max-height: calc(100vh - 100px);
    overflow-y: auto
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Label = styled.p`
  ${typography.styles.textMd};
  ${typography.weights.semibold};
  color: ${colors.gray[400]};
  padding-left: 8px;
`

const Title = styled.h1`
  ${typography.styles.textMd};
  ${typography.weights.semibold};
  color: ${props => props.theme.isLightMode ? colors[primaryColorKey][700] : colors['gray-blue'][25]};
  background-color: ${props => props.theme.isLightMode ? colors[primaryColorKey][100] : colors.gray[600]};
  padding: 4px 8px;
  border-radius: 4px;
  margin-top: 20px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 8px;

  ${typography.styles.textMd};
  ${typography.weights.semibold};

  color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.gray[25]};
`

const H2 = styled.h2`
  padding-left: 16px;
`

const H3 = styled.h3`
  padding-left: 24px;
`
