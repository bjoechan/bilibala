import * as React from "react";
import "twin.macro";
import { MenuBar } from "./MenuBar";
import { Footer } from "./Footer";

import { useState } from "react";

export const Layout = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log("here");
  };

  return (
    <div>
      <MenuBar isMenuOpen={isMenuOpen} openMobileMenu={openMobileMenu} />
      <div tw="bg-white pt-36">
        <div tw="bg-white  w-screen lg:(w-[1024px] mx-auto)">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
