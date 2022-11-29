import styled from "styled-components"
import { colors } from "../../../styles/colors"
import { Icon } from "../Icon"
import { social } from "./data"

export const SocialLinks = () => {
  return (
    <Container>
      {social.map(link => {
        return (
          <ExternalLink key={link.href} href={link.href} target='_blank' rel="nofollow noopener noreferrer">
            <Icon size="24" variant={link.icon}/>
          </ExternalLink>
        )
      })}
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  gap: 24px;
`

const ExternalLink = styled.a`
  display: inline-flex;
  color: ${props => props.theme.isLightMode ? colors.gray["800"]: colors.white};
`