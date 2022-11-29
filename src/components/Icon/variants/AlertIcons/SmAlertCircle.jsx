import * as React from "react";
const SvgSmAlertCircle = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#sm-alert-circle_svg__a)">
      <path
        d="M8 5.333V8m0 2.667h.007M14.667 8A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.334 0Z"
        stroke="currentcolor"
        strokeWidth={1.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="sm-alert-circle_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSmAlertCircle;
