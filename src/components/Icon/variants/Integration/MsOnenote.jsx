import * as React from "react";
const SvgMsOnenote = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 23H32V28C32 29.1046 31.1046 30 30 30H10C8.89543 30 8 29.1046 8 28V23Z"
      fill="#5D29A1"
    />
    <rect x={8} y={16} width={24} height={7} fill="#7F32CC" />
    <rect x={8} y={9} width={24} height={7} fill="#9A40D6" />
    <path
      d="M10 2C8.89543 2 8 2.89543 8 4V28C8 29.1046 8.89543 30 10 30H24V9H32V4C32 2.89543 31.1046 2 30 2H10Z"
      fill="url(#paint0_linear_1334_1211)"
    />
    <path
      d="M8 12C8 10.3431 9.34315 9 11 9H17C18.6569 9 20 10.3431 20 12V24C20 25.6569 18.6569 27 17 27H8V12Z"
      fill="black"
      fillOpacity={0.3}
    />
    <rect
      y={7}
      width={18}
      height={18}
      rx={2}
      fill="url(#paint1_linear_1334_1211)"
    />
    <path
      d="M13 21V11H10.8893V16.8286L6.9631 11H5V21H7.08118V14.9571L11.155 21H13Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1334_1211"
        x1={8}
        y1={16}
        x2={24.5}
        y2={16}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8C42AC" />
        <stop offset={1} stopColor="#C36DEF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1334_1211"
        x1={0}
        y1={16}
        x2={19}
        y2={16}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#44176C" />
        <stop offset={1} stopColor="#621F9C" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgMsOnenote;
