import * as React from "react";
const SvgLineMd = (props) => (
  <svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#line-md_svg__a)">
      <path
        d="m8.75 14 3.5 3.5 7-7m6.417 3.5c0 6.443-5.224 11.667-11.667 11.667S2.333 20.443 2.333 14 7.557 2.333 14 2.333 25.667 7.557 25.667 14Z"
        stroke="#475467"
        strokeWidth={2.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="line-md_svg__a">
        <rect width={28} height={28} rx={14} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLineMd;
