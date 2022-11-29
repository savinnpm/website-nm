import * as React from "react";
const SvgLineLg = (props) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#line-lg_svg__a)">
      <path
        d="m10 16 4 4 8-8m7.333 4c0 7.364-5.97 13.333-13.333 13.333-7.364 0-13.333-5.97-13.333-13.333C2.667 8.636 8.637 2.667 16 2.667c7.364 0 13.333 5.97 13.333 13.333Z"
        stroke="#475467"
        strokeWidth={2.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="line-lg_svg__a">
        <rect width={32} height={32} rx={16} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLineLg;
