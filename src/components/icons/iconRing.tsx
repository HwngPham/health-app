import { IconProps } from "./types";

export const IconRing = ({ className }: IconProps) => (
  <svg
    width="181"
    height="181"
    viewBox="0 0 181 181"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g
      id="&#227;&#131;&#145;&#227;&#130;&#185; 50"
      filter="url(#filter0_d_0_94)"
    >
      <path
        d="M90.5 181C40.598 181 0 140.402 0 90.5H3C3 138.748 42.252 178 90.5 178C138.748 178 178 138.748 178 90.5C178 42.252 138.748 3 90.5 3V0C140.402 0 181 40.598 181 90.5C181 140.402 140.402 181 90.5 181Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_0_94"
        x="-3"
        y="-3"
        width="193"
        height="193"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="3" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.988235 0 0 0 0 0.454902 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_0_94"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_0_94"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);