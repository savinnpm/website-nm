import * as React from "react";
const SvgFilledMd = (props) => (
  <svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={28} height={28} rx={14} fill="#475467" />
    <path
      d="m8.75 14 3.5 3.5 7-7"
      stroke="#fff"
      strokeWidth={2.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFilledMd;
