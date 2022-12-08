import styled from 'styled-components'
import { colors, primaryColorKey } from '../../styles/colors'
import { typography } from '../../styles/typography'
import { utils } from '../../styles/utils'
import { Icon } from './Icon'

export const Badge = ({ icon, color, children }) => {
  return (
    <Container color={color}>
      <Icon variant={icon} size={16} />
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px 4px 10px;
  gap: 6px;
  border-radius: 9999px;
  background-color: ${props => props.theme.isLightMode ? colors[props.color || primaryColorKey]['50'] : colors.gray['600']};
  color: ${props => props.theme.isLightMode ? colors[props.color || primaryColorKey]['700'] : colors[props.color || primaryColorKey]['400']};

  min-width: 0;

  ${typography.styles.textMd};
  ${typography.weights.semibold};
  ${utils.ellipsis};
`
