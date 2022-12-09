import Image from 'next/image'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'

const Card = (props) => {
  return (
    <Container>
      <Image
        alt=''
        width={592}
        height={333}
        sizes='(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 420px'
        src='/assets/images/hero/reduce-exposure.webp'
      />
      <Date>24 Nov 2022</Date>
      <CardTitle>Taking a Closer Look at the Numbers Protocol Hack</CardTitle>
      <CardText>On November 23, 2022, the Numbers Protocol ($NUM token) on the Ethereum chain was...</CardText>
      <CardTag>Exploit Analysis</CardTag>
    </Container>
  )
}

const Container = styled.div`
  width: 592px;
`

const Date = styled.span`
  display: block;
  margin-top: 32px;
  color: ${colors.gray[500]};
  ${typography.weights.semibold}
  ${typography.styles.textSm}
`

const CardTitle = styled.label`
  margin-top: 8px;
  color: ${colors.gray[900]};
  ${typography.weights.semibold}
  ${typography.styles.displayXs}
`

const CardText = styled.p`
  color: ${colors.gray[600]};
  margin-top: 8px;
  ${typography.styles.textMd}
  ${typography.weights.regular}
`

const CardTag = styled.span`
  display: block;
  margin-top: 26px;
  background-color: ${colors[primaryColorKey][50]};
  color: ${colors[primaryColorKey][700]};
  padding: 2px 10px;
  ${typography.weights.medium}
  width: fit-content;
  border-radius: 16px;
`

export { Card }
