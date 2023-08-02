import React from "react";

export interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const DropdownItem = ({ children, onClick }: DropdownItemProps) => (
  <li
    role="button"
    className="bg-dark-500 w-full h-[72px] font-primary font-light text-light text-lg px-6 pl-8 border border-black border-opacity-10 flex items-center cursor-pointer"
    onClick={onClick}
  >
    {children}
  </li>
);
