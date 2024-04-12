import * as React from "react";
import "twin.macro";
import { FullContainer } from "./Container";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

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

  console.log("title:", title);
  console.log("description:", description);

  return (
    <div
      tw="h-96 relative"
      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      // }}
    >
      {/* <Img
        fluid={data.heroSunRise.childImageSharp.fluid}
        alt="Sunrise"
        tw="w-full object-right object-cover h-96"
      /> */}

      <div tw="absolute top-0 left-0 bg-black bg-opacity-20 z-10 h-96 w-full flex items-center">
        <div tw="w-lg mx-auto text-3xl text-white font-bold animate-slideIn">
          {title}
          <br />
          {description}
        </div>
      </div>

      {/* <div tw="relative h-96 w-full text-white bg-black bg-opacity-20">
        {title && description && (
          <div tw="flex flex-col justify-center h-full pl-8 md:(animate-slideIn)">
            <div tw="text-4xl text-left mb-4 md:(text-6xl) font-bold lg:(w-lg mx-auto)">
              <span dangerouslySetInnerHTML={{ __html: title }} />
            </div>
            <div tw="text-xl md:(text-2xl) lg:(w-lg mx-auto)">
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        )}
        {title && !description && (
          <div tw="flex justify-center items-center w-4/5 h-full md:(animate-slideIn)">
            <div tw="text-4xl text-center md:(text-6xl) lg:(text-8xl) font-bold">
              <span dangerouslySetInnerHTML={{ __html: title }} />
            </div>
          </div>
        )}
        {slogan && (
          <div tw="relative w-4/5 top-2/3 pl-[5%] text-xl md:(text-2xl) lg:(pl-0 w-lg m-auto text-4xl) italic font-bold animate-slideIn">
            <span dangerouslySetInnerHTML={{ __html: slogan }} />
          </div>
        )}
      </div> */}
    </div>
  );
};
