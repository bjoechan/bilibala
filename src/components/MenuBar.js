import * as React from "react";
import "twin.macro";

import { Menu } from "../components/Menu";
import { LogoImg } from "../components/Images";

export const MenuBar = () => {
  return (
    <div tw="w-full flex justify-between px-4 py-8">
      <LogoImg />
      <Menu />
    </div>
  );
};
