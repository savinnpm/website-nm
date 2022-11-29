import * as React from "react";
const SvgDefaultXs = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={20} height={20} rx={10} fill="#F2F4F7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.247 6.158 8.28 11.917l-1.583-1.692c-.292-.275-.75-.292-1.083-.058a.764.764 0 0 0-.217 1.008l1.875 3.05c.183.283.5.458.858.458.342 0 .667-.175.85-.458.3-.392 6.025-7.217 6.025-7.217.75-.766-.158-1.441-.758-.858v.008Z"
      fill="#667085"
    />
  </svg>
);
export default SvgDefaultXs;
