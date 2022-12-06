import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { Button } from '../../../components/Button'

const Card = (props) => {
  const { t } = useTranslation('security')

  return (
    <Container>
      <IconNTag>
        <IconContainer>
          <Image alt={props.audit.partner.logo.alt} width='48' height='48' src={`${props.audit.partner.logo.image}`} />
        </IconContainer>
        <Tag color={props.audit.badges[0].color}>{props.audit.badges[0].text}</Tag>
      </IconNTag>
      <CardTitle>{props.audit.title}</CardTitle>
      <CardContent>{props.audit.intro}</CardContent>

      <Button
        hierarchy='link-color'
        size='sm'
        iconTrailing
        iconVariant='arrow-right' as={Link} href={`/security/${props.audit.slug}`}
      > {t('SHOW_RESULT')}
      </Button>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: ${props => props.theme.isLightMode ? colors.gray[50] : colors.gray[700]}; 
  max-width: 384px;
  height: 306px;

  a {
    margin-top: 20px;
  }
`
const CardTitle = styled.p`
  color: ${props => props.theme.isLightMode ? colors.gray[900] : colors.white};
  margin-bottom: 8px;
  ${typography.styles.textXl}
  ${typography.weights.semibold}
`
const CardContent = styled.p`
  color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.white};
  padding: 0;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  ${typography.weights.regular}
  ${typography.styles.textMd}
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
  color: ${props => props.theme.isLightMode ? colors[props.color][700] : colors.pink[400]};
  ${typography.weights.medium}
  ${typography.styles.textSm}
`

export { Card }
