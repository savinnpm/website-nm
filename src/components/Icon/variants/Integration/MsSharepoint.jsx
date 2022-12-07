import * as React from "react";
const SvgMsSharepoint = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={15.5} cy={11.5} r={9.5} fill="url(#paint0_linear_1334_1245)" />
    <circle cx={24} cy={17} r={8} fill="url(#paint1_linear_1334_1245)" />
    <mask
      id="mask0_1334_1245"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={10}
      y={6}
      width={13}
      height={24}
    >
      <path
        d="M23 23.5C23 27.0899 20.0899 30 16.5 30C12.9101 30 10 27.0899 10 23.5C10 19.9102 10 6 10 6H23C23 6 23 21.1988 23 23.5Z"
        fill="#C4C4C4"
      />
    </mask>
    <g mask="url(#mask0_1334_1245)">
      <circle
        cx={16.5}
        cy={23.5}
        r={6.5}
        fill="url(#paint2_linear_1334_1245)"
      />
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
      fill="url(#paint3_linear_1334_1245)"
    />
    <path
      d="M13 18.1229C13 16.5726 11.9602 15.8883 9.79665 15.0922C8.10273 14.4637 7.70021 14.2821 7.70021 13.6816C7.70021 13.1648 8.20335 12.8156 9.0587 12.8156C9.93082 12.8156 10.7526 13.1089 11.6751 13.6117L12.6143 11.9497C11.6247 11.3352 10.4507 11 9.02516 11C6.84486 11 5.28512 12.1173 5.28512 13.8212C5.28512 15.567 6.52621 16.1257 8.60587 16.8659C10.2662 17.4525 10.5849 17.7458 10.5849 18.2626C10.5849 18.8771 9.9979 19.1844 9.07547 19.1844C7.98532 19.1844 7.02935 18.8073 6.07338 18.1927L5 19.7849C6.174 20.595 7.63312 21 9.12579 21C11.3732 21 13 19.9385 13 18.1229Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1334_1245"
        x1={6}
        y1={11.5}
        x2={26.5833}
        y2={11.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#103A3B" />
        <stop offset={1} stopColor="#116B6E" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1334_1245"
        x1={18}
        y1={13}
        x2={32}
        y2={21}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D9097" />
        <stop offset={1} stopColor="#29BBC2" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1334_1245"
        x1={12}
        y1={21.5}
        x2={23}
        y2={26.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#28A6B5" />
        <stop offset={1} stopColor="#31D6EC" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_1334_1245"
        x1={0}
        y1={16}
        x2={19.5}
        y2={16}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#105557" />
        <stop offset={1} stopColor="#116B6E" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgMsSharepoint;
