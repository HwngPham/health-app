import { clsx } from "clsx";
import React from "react";

export interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const DropdownItem = ({ children, onClick }: DropdownItemProps) => (
  <li
    role="button"
    className={clsx(
      "flex items-center",
      "w-full h-[72px] px-6 pl-8",
      "bg-dark-500 cursor-pointer",
      "font-primary font-light",
      "text-light text-lg",
      "border border-black border-opacity-10",
    )}
    onClick={onClick}
  >
    {children}
  </li>
);
