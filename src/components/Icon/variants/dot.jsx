import * as React from "react"

const SvgDot = (props) => (
  <svg
  viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={5} cy={5} r={4} fill="currentColor" />
  </svg>
)

export default SvgDot
