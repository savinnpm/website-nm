import * as React from "react";
const SvgXsAlertCircle = (props) => (
  <svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#xs-alert-circle_svg__a)">
      <path
        d="M6 4v2m0 2h.005M11 6A5 5 0 1 1 1 6a5 5 0 0 1 10 0Z"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="xs-alert-circle_svg__a">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgXsAlertCircle;
