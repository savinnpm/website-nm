import * as React from "react";
const SvgFilledXl = (props) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={36} height={36} rx={18} fill="#475467" />
    <path
      d="m11.25 18 4.5 4.5 9-9"
      stroke="#fff"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFilledXl;
