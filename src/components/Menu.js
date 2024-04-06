import * as React from "react";
import tw, { styled } from "twin.macro";
import { Link } from "gatsby";
import MenuIcon from "../images/assets/mobile-menu-icon.inline.svg";
import CloseMenuIcon from "../images/assets/mobile-menu-close-icon.inline.svg";

const MenuContainer = styled.div(({ isMenuOpen }) => [
  tw`flex bg-white items-center  md:(justify-between p-2) transition-transform duration-500 ease-in-out`,
  isMenuOpen
    ? tw`flex-col justify-center items-start w-screen h-screen bg-amber-200 absolute top-0 right-0 z-10 opacity-80 transform translate-x-0 md:(transform translate-x-full)`
    : tw`transform -translate-x-full md:(transform translate-x-0)`,
]);

const MenuLink = tw(Link)`
  text-blue-900
  hover:font-bold
  mr-4
  pl-10
  last:mr-0
  text-center
  md:(w-32 text-blue-500 m-0 p-0 text-left
    hover:text-blue-800)
`;
// CMenulink is a styled component that takes a prop called isMenuOpen. If isMenuOpen is true, it will display the link, otherwise it will hide it. This is useful for the mobile menu.
const CMenuLink = styled(MenuLink)(({ isMenuOpen }) => [
  tw`transition-all duration-500`,
  isMenuOpen ? tw`block` : tw`hidden md:block`,
]);

export const Menu = ({ isMenuOpen, openMobileMenu }) => {
  return (
    <MenuContainer isMenuOpen={isMenuOpen}>
      {!isMenuOpen && (
        <MenuIcon
          tw="fixed right-6 w-8 h-8 md:(hidden)"
          onClick={openMobileMenu}
        />
      )}
      {isMenuOpen && (
        <CloseMenuIcon
          tw="relative left-8 -top-8 w-8 h-8"
          onClick={openMobileMenu}
        />
      )}
      <CMenuLink to="/" isMenuOpen={isMenuOpen}>
        Home
      </CMenuLink>
      <CMenuLink to="/about-me" isMenuOpen={isMenuOpen}>
        About Me
      </CMenuLink>
      <CMenuLink to="/contact" isMenuOpen={isMenuOpen}>
        Contact
      </CMenuLink>
    </MenuContainer>
  );
};
