import { css } from 'styled-components'

const getSizeLg = (size) => {
  if (size === 'xl') {
    return 56
  }

  if (size === 'lg') {
    return 48
  }

  if (size === 'md') {
    return 40
  }

  if (size === 'sm') {
    return 32
  }

  return 24
}

const getSizeMd = (size) => {
  if (size === 'xl') {
    return 48
  }

  if (size === 'lg') {
    return 40
  }

  if (size === 'md') {
    return 32
  }

  return 24
}

export const size = css`
  --size: ${props => getSizeLg(props.size)}px;
  width: var(--size);
  height: var(--size);

  @media (max-width: 768px) {
    --size: ${props => getSizeMd(props.size)}px;
  }

  svg {
    width: calc(var(--size) / 2);
    height: calc(var(--size) / 2);
  }
`
