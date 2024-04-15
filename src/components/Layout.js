import * as React from "react";
import tw from "twin.macro";
import { MenuBar } from "./MenuBar";
import { Footer } from "./Footer";

import { useState, useEffect } from "react";
import Seo from "./SEO";

export const Layout = ({ children, location }) => {
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
    <>
      <Seo
        title="Billy Chan | Web Developer, Radio Host, Board Game Enthusiast"
        description="Welcome to our website! We offer a wide range of web development services, including process automation, AI solutions, and more. Explore our site to learn more about our services and expertise."
        keywords="Web Developer, Radio Host, Board Game Enthusiast"
        location={location}
      />

      <div>
        <MenuBar isMenuOpen={isMenuOpen} openMobileMenu={openMobileMenu} />
        <div css={tw`bg-white pt-28 md:(pt-40) lg:(pt-28)`}>
          <div tw="bg-white">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};
