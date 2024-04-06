import * as React from "react";
import "twin.macro";

import { Menu } from "../components/Menu";
import { LogoImg } from "../components/Images";

export const MenuBar = ({ isMenuOpen, openMobileMenu }) => {
  return (
    <div tw="fixed top-0 left-0 z-10 w-full bg-white opacity-80">
      <div tw="flex justify-between px-4 py-8">
        <LogoImg />
        <Menu isMenuOpen={isMenuOpen} openMobileMenu={openMobileMenu} />
      </div>
    </div>
  );
};
