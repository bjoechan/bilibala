import * as React from "react";
import tw from "twin.macro";
import { Link } from "gatsby";
import MenuIcon from "../images/assets/mobile-menu-icon.inline.svg";

const MenuContainer = tw.div`
  flex
  justify-between
  items-center
  p-2
`;

const MenuLink = tw(Link)`
  text-blue-500
  hover:text-blue-800
  mr-4
  last:mr-0
  hidden
  md:(w-20 block)
`;

const HomeLink = () => <MenuLink to="/">Home</MenuLink>;
const AboutMeLink = () => <MenuLink to="/about-me">About Me</MenuLink>;
const ContactLink = () => <MenuLink to="/contact">Contact</MenuLink>;

export const Menu = ({ isMenuOpen, openMobileMenu }) => {
  return (
    <MenuContainer
      css={
        isMenuOpen &&
        tw`flex-col justify-center items-start w-screen h-screen bg-amber-200 absolute top-0 right-0 z-10 opacity-80`
      }
    >
      <MenuIcon tw="w-8 h-8 md:(w-0)" onClick={openMobileMenu} />
      <HomeLink />
      <AboutMeLink />
      <ContactLink />
    </MenuContainer>
  );
};
