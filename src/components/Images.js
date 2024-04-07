import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "twin.macro";

export const LogoImg = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImg: file(relativePath: { eq: "BC-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      transparentLogoImg: file(
        relativePath: { eq: "BC-logo-transparent.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div tw="flex justify-center">
      <Img fluid={data.transparentLogoImg.childImageSharp.fluid} tw="w-20" />
    </div>
  );
};
