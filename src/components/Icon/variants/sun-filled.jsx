import * as React from "react"

const SvgComponent = (props) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M6 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="currentColor" />
      <path
        d="M6 1v1m0 8v1M2 6H1m2.157-2.843L2.45 2.45m6.393.707.707-.707M3.157 8.845l-.707.707m6.393-.707.707.707M11 6h-1M8.5 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
