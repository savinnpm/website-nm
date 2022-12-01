import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { typography } from '../../../styles/typography'

export const TableOfContents = ({ wrapperClass, title }) => {
  const [headers, setHeaders] = useState([])

  useEffect(() => {
    if (!wrapperClass) return

    const selector = `.${wrapperClass} > h2, .${wrapperClass} > h3, .${wrapperClass} > h4`
    const headerElements = document.querySelectorAll(selector)

    const h = []
    let lastH2Index = 0; let lastH3Index = -1
    headerElements.forEach((el, i) => {
      const elName = el.tagName
      const elText = el.textContent.replace(/^(\s)+|(\s)+$/g, '')
      // .replace(/^(\d+\.\s)/g, '') to remove preceeding numbers

      if (elName === 'H2') {
        h.push({ text: elText, children: [] })
        lastH2Index = i
        lastH3Index = -1
      }

      if (elName === 'H3') {
        h[lastH2Index].children.push({ text: elText, children: [] })
        lastH3Index += 1
      }

      if (elName === 'H4') {
        h[lastH2Index].children[lastH3Index].children.push({ text: elText })
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
                    <H2>{e.text}</H2>
                    {
                    e?.children?.length
                      ? e.children.map((e2, i2) => (
                        <React.Fragment key={i2}>
                          <H3>{e2.text}</H3>
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

const Container = styled.p`
  max-width: 284px;

  @media (max-width: 1024px) {
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
  color: ${props => props.theme.isLightMode ? colors.primary[700] : colors.gray[25]};
  background-color: ${props => props.theme.isLightMode ? colors.indigo[100] : colors.gray[600]};
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
