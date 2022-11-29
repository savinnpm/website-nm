import * as React from "react";
const SvgFramer = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 15.5v7l-7-7m0 0v-7h7m-7 7h14l-7-7m0 0h7v-7H5l7 7Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFramer;
