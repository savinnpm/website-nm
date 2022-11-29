import * as React from "react";
const SvgLineSm = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#line-sm_svg__a)">
      <path
        d="m7.5 12 3 3 6-6m5.5 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        stroke="#475467"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="line-sm_svg__a">
        <rect width={24} height={24} rx={12} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLineSm;
