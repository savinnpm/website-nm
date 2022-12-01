import { css } from 'styled-components'

const srOnly = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`

const fullWidthContainer = css`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;

  @media (max-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`

const ellipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const utils = {
  srOnly,
  ellipsis,
  fullWidthContainer
}
