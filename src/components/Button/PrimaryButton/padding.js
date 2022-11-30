import { css } from 'styled-components'

const getPaddingLg = (size) => {
  if (size === '2xl') {
    return '16px 28px'
  }

  if (size === 'xl') {
    return '12px 20px'
  }

  if (size === 'lg') {
    return '10px 18px'
  }

  if (size === 'md') {
    return '10px 16px'
  }

  if (size === 'sm') {
    return '8px 14px'
  }

  return '8px 14px'
}

const getPaddingMd = (size) => {
  if (size === '2xl' || size === 'xl') {
    return '12px 20px'
  }

  if (size === 'lg') {
    return '10px 18px'
  }

  if (size === 'md') {
    return '10px 16px'
  }

  if (size === 'sm') {
    return '8px 14px'
  }

  return '8px 14px'
}

export const padding = css`
  padding: ${props => getPaddingLg(props.size)};
  
  @media (max-width: 768px) {
    padding: ${props => getPaddingMd(props.size)}; 
  }
`
