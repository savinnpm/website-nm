import * as React from "react";
const SvgLineXl = (props) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#line-xl_svg__a)">
      <path
        d="m11.25 18 4.5 4.5 9-9M33 18c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C3 9.716 9.716 3 18 3c8.284 0 15 6.716 15 15Z"
        stroke="#475467"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="line-xl_svg__a">
        <rect width={36} height={36} rx={18} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLineXl;
