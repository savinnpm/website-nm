import * as React from "react";
const SvgTeams = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 13.9032C19 13.4044 19.4044 13 19.9032 13H31.0968C31.5956 13 32 13.4044 32 13.9032V20.5C32 24.0899 29.0899 27 25.5 27C21.9101 27 19 24.0899 19 20.5V13.9032Z"
      fill="url(#paint0_linear_1334_1255)"
    />
    <path
      d="M9 12.2258C9 11.5488 9.54881 11 10.2258 11H23.7742C24.4512 11 25 11.5488 25 12.2258V22C25 26.4183 21.4183 30 17 30C12.5817 30 9 26.4183 9 22V12.2258Z"
      fill="url(#paint1_linear_1334_1255)"
    />
    <circle cx={27} cy={8} r={3} fill="#34439E" />
    <circle cx={27} cy={8} r={3} fill="url(#paint2_linear_1334_1255)" />
    <circle cx={18} cy={6} r={4} fill="url(#paint3_linear_1334_1255)" />
    <mask
      id="mask0_1334_1255"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={9}
      y={0}
      width={16}
      height={30}
    >
      <path
        d="M17 10C19.7615 10 22 7.76147 22 5C22 2.23853 19.7615 0 17 0C14.2385 0 12 2.23853 12 5C12 7.76147 14.2385 10 17 10Z"
        fill="url(#paint4_linear_1334_1255)"
      />
      <path
        d="M10.2258 11C9.54883 11 9 11.5488 9 12.2258V22C9 26.4183 12.5817 30 17 30C21.4183 30 25 26.4183 25 22V12.2258C25 11.5488 24.4512 11 23.7742 11H10.2258Z"
        fill="url(#paint5_linear_1334_1255)"
      />
    </mask>
    <g mask="url(#mask0_1334_1255)">
      <path
        d="M7 12C7 10.3431 8.34315 9 10 9H17C18.6569 9 20 10.3431 20 12V24C20 25.6569 18.6569 27 17 27H7V12Z"
        fill="black"
        fillOpacity={0.3}
      />
    </g>
    <rect
      y={7}
      width={18}
      height={18}
      rx={2}
      fill="url(#paint6_linear_1334_1255)"
    />
    <path d="M13 11H5V12.8347H7.99494V21H10.0051V12.8347H13V11Z" fill="white" />
    <defs>
      <linearGradient
        id="paint0_linear_1334_1255"
        x1={19}
        y1={13.7368}
        x2={32.1591}
        y2={22.3355}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#364088" />
        <stop offset={1} stopColor="#6E7EE1" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1334_1255"
        x1={9}
        y1={19.4038}
        x2={25}
        y2={19.4038}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#515FC4" />
        <stop offset={1} stopColor="#7084EA" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1334_1255"
        x1={24}
        y1={5.31579}
        x2={29.7963}
        y2={9.39469}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#364088" />
        <stop offset={1} stopColor="#6E7EE1" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_1334_1255"
        x1={15.1429}
        y1={3.14286}
        x2={20.2857}
        y2={9.14286}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4858AE" />
        <stop offset={1} stopColor="#4E60CE" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_1334_1255"
        x1={13.4286}
        y1={1.42857}
        x2={19.8571}
        y2={8.92857}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4858AE" />
        <stop offset={1} stopColor="#4E60CE" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_1334_1255"
        x1={13.4286}
        y1={1.42857}
        x2={19.8571}
        y2={8.92857}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4858AE" />
        <stop offset={1} stopColor="#4E60CE" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_1334_1255"
        x1={-5.21539e-8}
        y1={16}
        x2={18}
        y2={16}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2A3887" />
        <stop offset={1} stopColor="#4C56B9" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgTeams;
