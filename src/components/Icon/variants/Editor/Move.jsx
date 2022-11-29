import * as React from "react";
const SvgMove = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m5 9-3 3m0 0 3 3m-3-3h20M9 5l3-3m0 0 3 3m-3-3v20m3-3-3 3m0 0-3-3M19 9l3 3m0 0-3 3"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMove;
