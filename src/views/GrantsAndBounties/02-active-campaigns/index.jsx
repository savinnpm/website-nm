import styled, { useTheme } from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'

import { Tag03 } from '../../../components/Icon/variants/FinanceAndEcommerce'
import { Share07 } from '../../../components/Icon/variants/General'
import { MessageChatCircle } from '../../../components/Icon/variants/Communication'
import { CodeCircle03 } from '../../../components/Icon/variants/Development'
import SvgDot from '../../../components/Icon/variants/dot'
import { utils } from '../../../../styles/utils'

const getIcon = (program) => {
  let Icon

  switch (program.category) {
    case 'Partnerships and Business Development':
      Icon = Share07
      break

    case 'Sales and Promotion':
      Icon = Tag03
      break

    case 'Marketing and Growth':
      Icon = MessageChatCircle
      break

    case 'Technology and Cybersecurity':
      Icon = CodeCircle03
      break

    default:
      break
  }

  return Icon
}

const getBadgeIcon = (badge) => {
  let Icon

  switch (badge.icon) {
    case 'Dot':
      Icon = SvgDot
      break

    default:
      break
  }

  return Icon
}

export const ActiveCampaigns = ({ programs }) => {
  const { isLightMode } = useTheme()

  if (!programs?.length) return <></>

  return (
    <Container>
      <HeaderContainer>
        <Heading>Active Campaigns and Promotions</Heading>
        <SubHeading>
          Partners that provide value and increase adoption and usage of Neptune Mutual will be handsomely compensated for their efforts.
        </SubHeading>
      </HeaderContainer>

      <ProgramContainer>
        {
          programs.map((p, i) => {
            const CategoryIcon = getIcon(p)
            const badge = p.badges[0]
            const BadgeIcon = getBadgeIcon(badge)

            return (
              <Program key={i}>
                <FlexContainer>
                  <ProgramTitle>{p.title}</ProgramTitle>
                  <BadgeContainer data-color={badge.color} data-islightmode={isLightMode}>
                    {BadgeIcon && <BadgeIcon width={8} height={8} />}
                    <span>{badge.text}</span>
                  </BadgeContainer>
                </FlexContainer>

                <ProgramIntro>{p.intro}</ProgramIntro>

                <FlexContainer data-topoffset='true'>
                  {CategoryIcon && <CategoryIcon width='20' height='20' />}
                  <ProgramCategory>{p.category}</ProgramCategory>
                </FlexContainer>
              </Program>
            )
          }
          )
        }
      </ProgramContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 96px;
  padding-bottom: 96px;
  ${utils.fullWidthContainer}
`

const HeaderContainer = styled.div`
  width: 768px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

const Heading = styled.p`
  ${typography.styles.displayMd}
  ${typography.weights.semibold}
`

const SubHeading = styled.p`
  margin-top: 20px;

  ${typography.styles.textXl}
  ${typography.weights.regular}

  color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.gray[25]};
`

const ProgramContainer = styled.div`
  margin-top: 64px;
  width: 768px;
  margin-left: auto;
  margin-right: auto;

  & > *:not(:first-child) {
    margin-top: 32px;
  }
`

const Program = styled.div`
  padding-top: 24px;
  
  &:not(:first-of-type) {
    border-top: 1px solid ${props => props.theme.isLightMode ? colors.gray[200] : colors.gray[700]};
  }
`

const FlexContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  
  &[data-topoffset='true'] {
    margin-top: 24px;
  }

  & svg {
    color: ${props => props.theme.isLightMode ? colors.gray[400] : colors.gray[500]}
  }

`

const ProgramTitle = styled.div`
  ${typography.styles.textLg}
  ${typography.weights.medium}

  color: ${props => props.theme.isLightMode ? colors.gray[900] : colors.white};
`

const ProgramIntro = styled.div`
  ${typography.styles.textMd}
  ${typography.weights.regular}
  
  margin-top: 8px;
  color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.gray[25]};
`

const ProgramCategory = styled.div`
  ${typography.styles.textMd}
  ${typography.weights.medium}
  
  color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.gray[25]};
`

const BadgeContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 2px 10px 2px 8px;
  border-radius: 16px;
  ${typography.styles.textSm}
  ${typography.weights.medium}
  background-color: ${colors.gray[600]};

  &[data-color="success"] {
    &[data-islightmode="true"] {
      background-color: ${colors.pink[50]};
    }

    & svg {
      color: ${colors.pink[500]};
    }
    
    & span {
      color: ${props => props.theme.isLightMode ? colors.pink[700] : colors.pink[400]};
    }
  }
  
  &[data-color="blue"] {
    &[data-islightmode="true"] {
      background-color: ${colors.blue[50]};
    }

    & svg {
      color: ${colors.blue[500]};
    }

    & span {
      color: ${props => props.theme.isLightMode ? colors.blue[700] : colors.blue[400]};
    }
  }
`
