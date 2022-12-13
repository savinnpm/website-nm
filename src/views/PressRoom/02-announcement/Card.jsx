import Image from 'next/image'
import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { getFormattedDate } from '../../../helpers'

const Card = (props) => {
  return (
    <Container href={`pressroom/${props.post.slug}`}>
      <Image
        alt={props.post.title}
        width={592}
        height={333}
        sizes='(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 420px'
        src={props.post.image}
      />

      <Time>{getFormattedDate(new Date(props.post.date).toString())}</Time>

      <CardTitle>{props.post.title}</CardTitle>

      <CardText>{props.post.intro}</CardText>

      <CardTags>
        <Tag color={props.post.tags[0].color}>{props.post.tags[0].name}</Tag>
      </CardTags>

    </Container>
  )
}

const Container = styled.a`
  disply: block;
  width: 592px;
  cursor: pointer;

  @media (max-width: 1280px) {
    width: auto;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`

const Time = styled.span`
  display: block;
  margin-top: 32px;
  color: ${props => props.theme.isLightMode ? colors.gray[500] : colors.gray[400]};
  ${typography.weights.semibold}
  ${typography.styles.textSm}
`

const CardTitle = styled.label`
  margin-top: 8px;
  display: block;
  color: color: ${props => props.theme.isLightMode ? colors.gray[900] : colors.white};
  ${typography.weights.semibold}
  ${typography.styles.displayXs}
  cursor: pointer;
  

  @media (max-width: 768px) {
    ${typography.styles.textXl}
  }
`

const CardText = styled.p`
  color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.gray[25]};
  margin-top: 8px;
  ${typography.styles.textMd}
  ${typography.weights.regular}
`

const CardTags = styled.div``

const Tag = styled.span`
  display: block;
  margin-top: 26px;
  background-color: ${props => props.theme.isLightMode ? colors[props.color][50] : colors.gray[700]};
  color: ${props => props.theme.isLightMode ? colors[props.color][700] : colors[props.color][400]};
  padding: 2px 10px;
  ${typography.weights.medium}
  width: fit-content;
  border-radius: 16px;
`

export { Card }
