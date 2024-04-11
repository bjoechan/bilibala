import * as React from "react";
import tw, { styled } from "twin.macro";
import { Link } from "gatsby";
import MenuIcon from "../images/assets/mobile-menu-icon.inline.svg";
import CloseMenuIcon from "../images/assets/mobile-menu-close-icon.inline.svg";
import { LogoImg } from "../components/Images";

const MenuLink = styled(({ isMenuOpen, ...props }) => <Link {...props} />)(
  ({ isMenuOpen }) => [
    tw`
      w-full
      text-white
      text-3xl
      text-left
      font-bold
      mr-4
      pl-10
      pb-3
      
      last:mr-0
      md:(w-32 m-0 p-2 text-center text-green text-lg border-transparent border-b-2 hover:(border-green border-b-2))
    `,
    isMenuOpen ? tw`block` : tw`hidden md:block`,
  ]
);

const menuItems = [
  { path: "/", label: "Home" },
  {
    path: "/about-me",
    label: "About Me",
    subItems: [
      { path: "/boardgames", label: "Boardgames" },
      { path: "/travel", label: "Travel" },
      { path: "/music", label: "Music" },
    ],
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

export const Menu = ({ isMenuOpen, openMobileMenu }) => {
  const [showSubBlock, setShowSubBlock] = React.useState(false);

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
            md:(transition-none translate-x-0 relative opacity-90 w-full h-auto flex justify-end items-center)`,
          isMenuOpen
            ? tw`bg-slate translate-x-0 flex flex-col justify-center items-start`
            : tw`-translate-x-full`,
        ]}
      >
        {isMenuOpen && (
          <div tw="pl-9 pb-4">
            <Link to="/">
              <LogoImg />
            </Link>
          </div>
        )}
        {menuItems.map((item, index) => (
          <div tw="relative">
            <MenuLink
              role="button" // Add a role attribute
              tabIndex="0" // Make the div focusable
              onKeyDown={(event) => {
                // Add a keydown event handler
                if (event.key === "Enter" || event.key === " ") {
                  setShowSubBlock(index);
                }
              }}
              to={item.path}
              key={index}
              isMenuOpen={isMenuOpen}
              onMouseEnter={() => setShowSubBlock(index)}
            >
              {item.label}
            </MenuLink>
            {item.subItems && (
              <div
                role="menu" // Add a role attribute
                tabIndex="0" // Make the div focusable
                onKeyDown={(event) => {
                  // Add a keydown event handler
                  if (event.key === "Enter" || event.key === " ") {
                    setShowSubBlock(null);
                  }
                }}
                css={[
                  tw`flex flex-row pl-16 py-4 w-full md:(p-4 absolute z-10 bg-amber-100 )`,
                  showSubBlock === index ? tw`block` : tw`block md:hidden`,
                ]}
                onMouseLeave={() => setShowSubBlock(null)}
              >
                {item.subItems.map((subItem, subIndex) => (
                  <Link
                    to={subItem.path}
                    key={subIndex}
                    tw="text-white text-lg block md:(text-gray-600 hover:underline)"
                    css={[isMenuOpen ? tw`block` : tw`hidden md:block`]}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
