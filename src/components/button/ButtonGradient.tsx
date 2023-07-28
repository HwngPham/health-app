import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export interface ButtonGradientProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonGradient = ({
  children,
  className,
}: ButtonGradientProps) => (
  <button
    className={clsx(
      className,
      "flex justify-center items-center",
      "pt-[14px] pb-4 gradient-primary h-14 rounded",
      "font-primary font-light text-white text-lg",
    )}
  >
    {children}
  </button>
);
