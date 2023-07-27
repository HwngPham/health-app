import React from "react";

export interface FooterItemProps {
  children: React.ReactNode;
}

export const FooterItem = ({ children }: FooterItemProps) => (
  <li className="font-primary text-white cursor-pointer font-light">
    {children}
  </li>
);
