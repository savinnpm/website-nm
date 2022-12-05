import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { Icon } from '../../../components/Icon'
import { Button } from '../../../components/Button'

export const Reviews = (props) => {
  const { t } = useTranslation('security')

  return (
    <Review>
      <About>
        <AboutIconContainer>
          <Icon size={24} variant='shield-tick' />
        </AboutIconContainer>

        <AboutTitle>Security Reviews</AboutTitle>
        <AboutContent>Our decentralized insurance marketplace has been subjected to a number of smart contract audits, as well as a code review and penetration testing</AboutContent>
      </About>

      <Slider>
        <Grid>
          {props.audits.map(audit => {
            console.log(audit)
            return (
              <Card key={audit.id}>
                <IconNTag>
                  <IconContainer>
                    <Icon size={24} variant='open-zeppelin' />
                  </IconContainer>
                  <Tag>Smart Contract</Tag>
                </IconNTag>
                <CardTitle>{audit.title}</CardTitle>
                <CardContent>{audit.intro}</CardContent>

                <Button
                  hierarchy='link-color'
                  size='sm'
                  iconTrailing
                  iconVariant='arrow-right' as={Link} href={`/security/${audit.slug}`}
                > {t`SHOW_RESULT`}
                </Button>
              </Card>
            )
          })}
        </Grid>
      </Slider>
    </Review>
  )
}

const Review = styled.div`
  display: flex;
  ${utils.fullWidthContainer};
`

const About = styled.div`
  margin-right: 64px;
`

const AboutTitle = styled.h2`
  ${typography.styles.displayMd}
  ${typography.weights.semibold}
  color: ${props => props.theme.isLightMode ? colors.gray[900] : colors.white};
  margin-bottom: 20px;
`

const AboutIconContainer = styled.span`
  background-color: ${props => props.theme.isLightMode ? colors.indigo[100] : colors.gray[600]};
  border: 10px solid ${props => props.theme.isLightMode ? colors.indigo[50] : colors.gray[700]};
  border-radius: 28px;
  display: flex;
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.isLightMode ? colors.indigo[600] : colors.white};;
  
`

const AboutContent = styled.p`
  color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.white};
  width: 352px;
`

const Slider = styled.div`
`

const Card = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: ${props => props.theme.isLightMode ? colors.gray[50] : colors.gray[900]};;
  
`

const CardTitle = styled.h3`
  color: ${props => props.theme.isLightMode ? colors.gray[900] : colors.white};
  ${typography.styles.textXl}
  ${typography.weights.semibold}
`
const CardContent = styled.p`
  color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.white};
  padding: 8px 0 20px 0;
  ${typography.weights.regular}
`

const IconNTag = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 56px;
`

const IconContainer = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 12px;
  background-color: ${props => props.theme.isLightMode ? colors.indigo[600] : colors.gray[600]}
`

const Tag = styled.span`
  background-color: ${props => props.theme.isLightMode ? colors.pink[50] : colors.gray[600]};
  height: fit-content;
  padding: 2px 10px;
  border-radius: 16px;
  color: ${props => props.theme.isLightMode ? colors.pink[700] : colors.pink[400]};
  ${typography.weights.medium}
  ${typography.styles.textSm}
`

const Grid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`
