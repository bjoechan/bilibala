import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "twin.macro";

export const LogoImg = () => {
  const data = useStaticQuery(
    graphql`
      query {
        transparentLogoImg: file(
          relativePath: { eq: "BC-logo-transparent.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 512
              placeholder: BLURRED
              formats: [AUTO, JPG, AVIF]
            )
          }
        }
      }
    `
  );

  const image = getImage(data.transparentLogoImg.childImageSharp);

  return (
    <div tw="flex justify-center">
      <GatsbyImage image={image} alt="LOGO" tw="w-20" loading="eager" />
    </div>
  );
};
