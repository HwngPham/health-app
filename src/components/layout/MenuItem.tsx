import React from "react";

export interface MenuItemProps {
  children: React.ReactNode;
  label?: string;
}

export const MenuItem = ({ children, label }: MenuItemProps) => (
  <li className="flex text-light font-primary gap-2 cursor-pointer">
    {children}
    <span className="w-24">{label}</span>
  </li>
);
