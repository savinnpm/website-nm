import * as React from "react";
const SvgLineXs = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#line-xs_svg__a)">
      <g clipPath="url(#line-xs_svg__b)">
        <path
          d="m6.25 10 2.5 2.5 5-5m4.583 2.5a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0Z"
          stroke="#475467"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="line-xs_svg__a">
        <rect width={20} height={20} rx={10} fill="#fff" />
      </clipPath>
      <clipPath id="line-xs_svg__b">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLineXs;
