import * as React from "react";
const SvgFilledLg = (props) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={32} height={32} rx={16} fill="#475467" />
    <path
      d="m10 16 4 4 8-8"
      stroke="#fff"
      strokeWidth={2.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFilledLg;
