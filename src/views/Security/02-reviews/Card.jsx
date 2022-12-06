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
          <Image alt={props.audit.partner.logo.alt} width='48' height='48' src={`/${props.audit.partner.logo.image}`} />
        </IconContainer>
        <Tag>Smart Contract</Tag>
      </IconNTag>
      <CardTitle>{props.audit.title}</CardTitle>
      <CardContent>{props.audit.intro}</CardContent>

      <Button
        hierarchy='link-color'
        size='sm'
        iconTrailing
        iconVariant='arrow-right' as={Link} href={`/security/${props.audit.slug}`}
      > {t`SHOW_RESULT`}
      </Button>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: ${props => props.theme.isLightMode ? colors.gray[50] : colors.gray[900]}; 
  max-width: 384px;
  max-height: 306px;
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

export { Card }
