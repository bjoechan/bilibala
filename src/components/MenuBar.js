import * as React from "react";
import tw from "twin.macro";

import { Menu } from "../components/Menu";
import { LogoImg } from "../components/Images";

export const MenuBar = ({ isMenuOpen, openMobileMenu }) => {
  return (
    <div
      tw="fixed top-0 left-0 z-10 w-screen bg-white flex justify-center"
      css={isMenuOpen ? tw`opacity-90` : tw`opacity-80`}
    >
      <div tw="px-4 py-4 lg:(px-0 w-lg flex justify-between)">
        <LogoImg />
        <Menu isMenuOpen={isMenuOpen} openMobileMenu={openMobileMenu} />
      </div>
    </div>
  );
};
