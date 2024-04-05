import * as React from "react";
import "twin.macro";

import { Menu } from "../components/Menu";
import { LogoImg } from "../components/Images";

export const MenuBar = () => {
  return (
    <div tw="w-full flex justify-between p-3">
      <LogoImg />
      <Menu />
    </div>
  );
};
