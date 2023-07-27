import React from "react";
import { Footer } from "./Footer";
import { Navigator } from "./Navigator";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigator />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
};
