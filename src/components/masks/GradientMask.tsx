import { IconProps } from "../icons/types";

export const GradientMask = ({ className }: IconProps) => (
  <svg
    width="540"
    height="312"
    viewBox="0 0 540 312"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g
      style={{
        mixBlendMode: "soft-light",
      }}
      opacity="0.2"
    >
      <path d="M0 -1H540V315H217.665H0L0 -1Z" fill="url(#paint0_linear_0_89)" />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_0_89"
        x1="270"
        y1="-159"
        x2="-5.49579"
        y2="311.784"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFCC21" />
        <stop offset="1" stopColor="#FF963C" />
      </linearGradient>
    </defs>
  </svg>
);
