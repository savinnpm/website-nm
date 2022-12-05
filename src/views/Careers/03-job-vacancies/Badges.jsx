import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'

export const Badges = ({ badges }) => {
  return (
    <>
      {badges.map((b, idx) => <Badge key={idx} badge={b}>{b.text}</Badge>)}
    </>
  )
}

const Badge = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 2px 10px 2px 8px;
  gap: 6px;
  border-radius: 9999px;
  background-color: ${props => props.theme.isLightMode ? colors[props.badge.color || primaryColorKey]['50'] : colors.gray['600']};
  color: ${props => props.theme.isLightMode ? colors[props.badge.color || primaryColorKey]['700'] : colors[props.badge.color || primaryColorKey]['400']};

  min-width: 0;

  ${typography.styles.textSm};
  ${typography.weights.medium};
  ${utils.ellipsis};

  ::before {
    display: inline-flex;
    content: '';
    border-radius: 9999px;
    width: 8px;
    height: 8px;
    background-color: currentColor;
  }
`
