import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { colors } from '../../../../styles/colors'
import { shadows } from '../../../../styles/shadows'
import { typography } from '../../../../styles/typography'
import { Badge } from '../../../components/Badge'
import { data } from './data'

export const Card = ({ ecosystem }) => {
  const { t } = useTranslation('ecosystem')
  return (
    <Container>
      <Badge icon={data.icons[ecosystem.type]} color={data.colors[ecosystem.type]}>{t(`${data.labels[ecosystem.type]}`)}</Badge>
      <Content>{t(`${ecosystem.content}`)}</Content>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
  border-radius: 8px;
  background: ${props => props.theme.isLightMode ? colors.white : colors.gray['700']};
  border: 1px solid ${props => props.theme.isLightMode ? colors.gray['200'] : colors.gray['700']};
  box-shadow: ${shadows.xl};

  @media (min-width: 376px) {
    min-height: 192px;
  }

  transition: all 100ms ease-in;

  :hover {
    transform: scale(1.025);
  }
`

const Content = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.secondaryColor};
  ${typography.styles.textMd};
  ${typography.weights.regular};
`
