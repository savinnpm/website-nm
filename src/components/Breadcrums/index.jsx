import { Fragment } from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { typography } from '../../../styles/typography'
import { Icon } from '../Icon'

function Breadcrumbs (props) {
  return (
    <Trail>
      {props.crumbs.map((link, i) =>
        <Fragment key={`link-${i}`}>
          <Crumb isLast={props.crumbs.length === i} href={link.link}>{link.name}</Crumb>
          {i < (props.crumbs.length - 1) && <Icon size='15' variant='chevron-right' />}
        </Fragment>
      )}
    </Trail>
  )
}

const Trail = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: ${colors.gray[300]};
  }

`
const Crumb = styled.a`
  display: inline-block;
  ${typography.styles.textSm}
  ${typography.weights.medium}
  color: ${colors.gray[600]};
  margin:0 22px;
  padding: 4px 8px;

  &:nth-of-type(1) {
    margin-left:0;
  }

  &:nth-last-of-type(1) {
    margin-right:0;
    background-color: ${colors.gray[200]};
    color: ${colors.gray[700]};
    border-radius: 6px;
    ${typography.weights.semibold}
  }
`

export { Breadcrumbs }
