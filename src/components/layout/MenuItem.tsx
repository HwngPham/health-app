import React from "react";

export interface MenuItemProps {
  children: React.ReactNode;
  label?: string;
  onClick?: () => void;
}

export const MenuItem = ({ children, label, onClick }: MenuItemProps) => (
  <li
    role="button"
    className="flex text-light font-primary font-light gap-2 cursor-pointer"
    onClick={onClick}
  >
    {children}
    {label && <span className="w-24">{label}</span>}
  </li>
);
