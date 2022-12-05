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
        <AboutTitle>Security Reviews</AboutTitle>
        <AboutContent>Our decentralized insurance marketplace has been subjected to a number of smart contract audits, as well as a code review and penetration testing</AboutContent>
      </About>
      <Slider>
        <Grid>
          {props.audits.map(audit => {
            console.log(audit)
            return (
              <Card key={audit.id}>

                <Icon variant='Security Reviews-Logos' />
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
  color: ${props => props.theme.isLightMode ? colors.gray[900] : colors.gray[900]};
  margin-bottom: 20px;
`

const AboutContent = styled.p`
  color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.gray[900]};
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
  color: ${props => props.theme.isLightMode ? colors.gray[900] : colors.gray[900]};

`

const CardContent = styled.p`
  color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.gray[900]};
  padding: 8px 0 20px 0;
`

const Grid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`
