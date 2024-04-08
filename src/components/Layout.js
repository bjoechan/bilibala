import * as React from "react";
import tw from "twin.macro";
import { MenuBar } from "./MenuBar";
import { Footer } from "./Footer";

import { useState, useEffect } from "react";

export const Layout = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const openMobileMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <MenuBar isMenuOpen={isMenuOpen} openMobileMenu={openMobileMenu} />
      <div css={tw`bg-white pt-28 md:(pt-40) lg:(pt-28)`}>
        <div tw="bg-white">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
