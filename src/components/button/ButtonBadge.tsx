import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

export interface ButtonBadgeProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export const ButtonBadge = ({
  isActive,
  className = "",
  ...rest
}: ButtonBadgeProps) => (
  <button
    {...rest}
    className={clsx(
      "rounded-[11px] w-14 h-6 pb-[2px]",
      "font-primary font-light",
      "leading-[22px] tracking-[0.075px]",
      "text-center text-[15px]",
      isActive ? "bg-primary-300 text-white" : "bg-white text-primary-300",
      className,
    )}
  />
);
