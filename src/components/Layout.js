import * as React from "react";
import "twin.macro";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div tw="bg-white">
      <div tw="bg-white  w-screen lg:(w-[1024px] mx-auto)">{children}</div>

      <Footer />
    </div>
  );
};
