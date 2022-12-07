import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { Medium, YouTube, Github, Reddit, Twitter, Discord, Telegram, Linkedin } from '../../../components/Icon/variants/Socials/Default'

const links = [
  {
    name: 'Twitter',
    href: '#',
    Icon: Twitter
  },
  {
    name: 'Reddit',
    href: '#',
    Icon: Reddit
  },
  {
    name: 'Telegram',
    href: '#',
    Icon: Telegram
  },
  {
    name: 'Github',
    href: '#',
    Icon: Github
  },
  {
    name: 'LinkedIn',
    href: '#',
    Icon: Linkedin
  },
  {
    name: 'Medium',
    href: '#',
    Icon: Medium
  },
  {
    name: 'Youtube',
    href: '#',
    Icon: YouTube
  },
  {
    name: 'Discord',
    href: '#',
    Icon: Discord
  }
]

export const CommunityChannels = () => {
  return (
    <Container>
      <IntroContainer>
        <Title>Community Channels</Title>
        <SubHeading>
          Don't be a stranger! Join and interact with us and our growing social media communities. Stay up to date on our latest developments and progress.
        </SubHeading>
      </IntroContainer>

      <LinksContainer>
        {
          links.map(({ name, Icon, href }, i) => (
            <LinkWrapper key={i}>
              <SocialLink href={href} target='_blank' rel='noreferrer nofollow'>
                <Icon />
                <p>{name}</p>
              </SocialLink>
            </LinkWrapper>
          ))
        }
      </LinksContainer>
    </Container>
  )
}

const Container = styled.div`
  ${utils.fullWidthContainer};
  margin-bottom: 96px;

  padding-top: 64px;
  padding-bottom: 64px;
  border-radius: 16px;
  background-color: ${colors.gray[50]};
`

const IntroContainer = styled.div`
  max-width: 807px;
  margin: auto;

  text-align: center;
`

const Title = styled.div`
  ${typography.styles.displayMd}
  ${typography.weights.semibold}
`

const SubHeading = styled.div`
  margin-top: 24px;
  ${typography.styles.textXl}
  ${typography.weights.regular}
  color: ${colors.gray[600]};
`

const LinksContainer = styled.div`
  margin: auto;
  margin-top: 40px;
  display: grid;
  width: max-content;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 24px;
  column-gap: 4px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 16px;
  }
  `

const LinkWrapper = styled.div`
  padding: 8px 26px;
  width: max-content;

  ${typography.styles.textXl}
  ${typography.weights.bold}
  
  svg {
    width: 32px;
    height: 32px;
  }
  
  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    ${typography.styles.textLg}
  
    svg {
      width: 24px;
      height: 24px;
    }
  }
`

const SocialLink = styled.a`
  display: flex;
  gap: 12px;
  align-items: center;
`
