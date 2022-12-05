import { Fragment } from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { typography } from '../../../styles/typography'
import { Icon } from '../Icon'

const Breadcrumbs = (props) => {
  return (
    <Trail>
      {props.crumbs.map((link, i) => {
        return (
          <Fragment key={`link-${i}`}>
            <Crumb isLast={props.crumbs.length === i} href={link.link}>{link.name}</Crumb>
            {i < (props.crumbs.length - 1) && <Icon size='15' variant='chevron-right' />}
          </Fragment>
        )
      })}
    </Trail>
  )
}

const Trail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;

  svg {
    color: ${colors.gray[300]};
  }

`
const Crumb = styled.a`
  display: inline-block;
  ${typography.styles.textSm}
  ${typography.weights.medium}
  color: ${props => (props.theme.isLightMode ? colors.gray[600] : colors.gray[300])};
  margin:0 10px;
  padding: 4px 8px;

  &:nth-of-type(1) {
    margin-left:0;
  }

  &:nth-last-of-type(1) {
    margin-right:0;
    background-color: ${props => (props.theme.isLightMode ? colors.gray[200] : colors.gray[600])};
    color: ${props => (props.theme.isLightMode ? colors.gray[700] : colors.gray[25])};
    border-radius: 6px;
    ${typography.weights.semibold}
  }
`

export { Breadcrumbs }
