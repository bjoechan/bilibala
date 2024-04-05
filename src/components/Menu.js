import * as React from "react";
import tw from "twin.macro";
import { Link } from "gatsby";
// import MenuMobileBtnImg from '../images/assets/mobile-menu-icon.svg';

const MenuContainer = tw.div`
  flex
  justify-between
  items-center
  p-4
`;

const MenuLink = tw(Link)`
  text-blue-500
  hover:text-blue-800
  mr-4
  last:mr-0
`;

const HomeLink = () => <MenuLink to="/">Home</MenuLink>;
const AboutMeLink = () => <MenuLink to="/about-me">About Me</MenuLink>;
const ContactLink = () => <MenuLink to="/contact">Contact</MenuLink>;

export const Menu = () => (
    <MenuContainer>
      {/* <img src={MenuMobileBtnImg} /> */}
        <HomeLink />
        <AboutMeLink />
        <ContactLink />
    </MenuContainer>
);