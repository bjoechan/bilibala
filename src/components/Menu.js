import * as React from "react";
import tw, { styled } from "twin.macro";
import { Link } from "gatsby";
import MenuIcon from "../images/assets/mobile-menu-icon.inline.svg";
import CloseMenuIcon from "../images/assets/mobile-menu-close-icon.inline.svg";

const MenuLink = styled(({ isMenuOpen, ...props }) => <Link {...props} />)(
  ({ isMenuOpen }) => [
    tw`
      text-white
      text-3xl
      font-bold
      hover:(underline)
      mr-4
      pl-10
      pb-3
      last:mr-0
      text-center
      md:(w-32 m-0 p-0 text-center text-green text-lg)
      transition-all duration-500
    `,
    isMenuOpen ? tw`block` : tw`hidden md:block`,
  ]
);

export const Menu = ({ isMenuOpen, openMobileMenu }) => {
  return (
    <>
      {!isMenuOpen && (
        <MenuIcon
          tw="fixed top-12 right-8 w-8 h-8 md:(hidden)"
          onClick={openMobileMenu}
        />
      )}
      {isMenuOpen && (
        <CloseMenuIcon
          tw="fixed top-12 right-8  w-12 h-12 text-white z-40"
          onClick={openMobileMenu}
        />
      )}

      <div
        css={[
          tw`transition-all duration-500 ease-in-out absolute inset-0 w-screen h-screen 
            md:(transition-none translate-x-0 relative opacity-80 w-full h-auto flex justify-end items-center)`,
          isMenuOpen
            ? tw`bg-slate opacity-90 translate-x-0 flex flex-col justify-center items-start`
            : tw`-translate-x-full`,
        ]}
      >
        <MenuLink to="/" isMenuOpen={isMenuOpen}>
          Home
        </MenuLink>
        <MenuLink to="/about-me" isMenuOpen={isMenuOpen}>
          About Me
        </MenuLink>
        <MenuLink to="/contact" isMenuOpen={isMenuOpen}>
          Contact
        </MenuLink>
      </div>
    </>
  );
};
