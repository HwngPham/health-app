import React from "react";

export interface MenuItemProps {
  children: React.ReactNode;
  label?: string;
}

export const MenuItem = ({ children, label }: MenuItemProps) => (
  <li className="flex text-light font-primary font-light gap-2 cursor-pointer">
    {children}
    {label && <span className="w-24">{label}</span>}
  </li>
);
