import { css } from 'styled-components'

const getIconSizeLg = (icon, size) => {
  if (icon === 'default') {
    if (size === '2xl') {
      return 24
    }

    return 20
  }

  return 10
}

const getIconSizeMd = (icon, size) => {
  if (icon === 'default') {
    if (size === 'md') {
      return 20
    }

    return 20
  }

  return 10
}

export const iconSize = css`
  svg {
    width: ${props => getIconSizeLg(props.icon, props.size)}px;
    height: ${props => getIconSizeLg(props.icon, props.size)}px;
  }

  @media (max-width: 768px) {
    svg {
      width: ${props => getIconSizeMd(props.icon, props.size)}px;
      height: ${props => getIconSizeMd(props.icon, props.size)}px;
    }
  }
`
