import * as React from "react";
import tw, { styled } from "twin.macro";
import { Link } from "gatsby";
import MenuIcon from "../images/assets/mobile-menu-icon.inline.svg";
import CloseMenuIcon from "../images/assets/mobile-menu-close-icon.inline.svg";

const MenuContainer = styled.div(({ isMenuOpen }) => [
  tw`flex bg-white items-center transition-all duration-500 ease-in-out md:(justify-between p-2 transition-all duration-100 ease-in-out)`,
  isMenuOpen
    ? tw`absolute top-0 left-0 z-10 flex-col justify-center items-start w-full h-screen bg-slate transition-all duration-500 ease-in-out transform translate-x-0 md:(transform translate-x-full)`
    : tw`transition-all duration-500 ease-in-out transform -translate-x-full md:(transform translate-x-0)`,
]);

const MenuLink = tw(Link)`
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
`;
// CMenulink is a styled component that takes a prop called isMenuOpen. If isMenuOpen is true, it will display the link, otherwise it will hide it. This is useful for the mobile menu.
const CMenuLink = styled(({ isMenuOpen, ...props }) => <MenuLink {...props} />)(
  ({ isMenuOpen }) => [
    tw`transition-all duration-500`,
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
          tw="fixed top-12 right-8  w-12 h-12 text-white z-20"
          onClick={openMobileMenu}
        />
      )}
      <MenuContainer isMenuOpen={isMenuOpen}>
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
    </>
  );
};
