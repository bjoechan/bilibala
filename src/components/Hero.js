import * as React from "react";
import "twin.macro";
import { FullContainer } from "./Container";
import { useStaticQuery, graphql } from "gatsby";

export const Hero = ({ options = {} }) => {
  let { title = "", description = "", slogan = "", bgImage } = options;

  const data = useStaticQuery(graphql`
    query {
      heroSunRise: file(relativePath: { eq: "hero/hero-sunrise.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const backgroundImage = bgImage || data.heroSunRise.childImageSharp.fluid.src;

  if (title !== "" && slogan !== "") {
    slogan = "";
  }

  return (
    <FullContainer>
      <div
        tw="h-96 bg-cover bg-right"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div tw="relative h-96 w-full text-white bg-black bg-opacity-20">
          {title && description && (
            <div tw="flex flex-col justify-center w-4/5 h-full pl-8 lg:(pl-0 w-lg m-auto)">
              <div tw="text-4xl text-left mb-4 md:(text-6xl) font-bold animate-slideIn transition-all ease-in">
                <span dangerouslySetInnerHTML={{ __html: title }} />
              </div>
              <div tw="text-xl md:(text-2xl) animate-slideIn transition-all ease-in">
                <span dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
          )}
          {title && !description && (
            <div tw="flex justify-center items-center w-4/5 h-full">
              <div tw="text-4xl text-center md:(text-6xl) lg:(text-8xl) font-bold animate-slideIn transition-all ease-in">
                <span dangerouslySetInnerHTML={{ __html: title }} />
              </div>
            </div>
          )}
          {slogan && (
            <div tw="relative w-4/5 top-2/3 pl-[5%] text-xl md:(text-2xl) lg:(pl-0 w-lg m-auto text-4xl) italic font-bold animate-slideIn transition-all ease-in">
              <span dangerouslySetInnerHTML={{ __html: slogan }} />
            </div>
          )}
        </div>
      </div>
    </FullContainer>
  );
};
