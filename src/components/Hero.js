import * as React from "react";
import "twin.macro";
import { FullContainer } from "./Container";
import { useStaticQuery, graphql } from "gatsby";

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroSunRise: file(relativePath: { eq: "hero/hero-sunrise.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <FullContainer>
      <div
        tw="h-96 bg-cover bg-right"
        style={{
          backgroundImage: `url(${data.heroSunRise.childImageSharp.fluid.src})`,
        }}
      >
        <div tw="relative z-10 h-96 w-full text-white">
          <div tw="relative top-2/3 pl-[10%] text-lg md:(text-2xl) lg:(pl-[18%]) italic font-bold">
            Learn Forever, Play Hard, <br tw="md:hidden" />
            Work Harder!
          </div>
        </div>
      </div>
    </FullContainer>
  );
};
