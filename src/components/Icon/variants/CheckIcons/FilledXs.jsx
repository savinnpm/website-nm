import * as React from "react";
const SvgFilledXs = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={20} height={20} rx={10} fill="#475467" />
    <path
      d="m6.25 10 2.5 2.5 5-5"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFilledXs;
