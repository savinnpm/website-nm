import * as React from "react";
const SvgFramer = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 20.3334H16V27L9 20.3334Z"
      fill="#0055FF"
    />
    <path d="M16 13.6666H9V20.3333H23L16 13.6666Z" fill="#00AAFF" />
    <path d="M9 7L16 13.6667H23V7H9Z" fill="#88DDFF" />
  </svg>
);
export default SvgFramer;
