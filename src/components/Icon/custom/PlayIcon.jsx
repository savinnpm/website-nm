import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24Zm-3.75-15.197 13.5-7.545c1-.56 1-1.957 0-2.516l-13.5-7.545c-1-.56-2.25.14-2.25 1.257v15.092c0 1.117 1.25 1.816 2.25 1.257Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={-16}
        y={-16}
        width={80}
        height={80}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={8} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1398_368453"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1398_368453"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default SvgComponent
