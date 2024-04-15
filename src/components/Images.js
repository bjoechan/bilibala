import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "twin.macro";

export const LogoImg = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "BC-logo-transparent.webp" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const image = getImage(data.logo.childImageSharp);

  return (
    <div tw="flex justify-center">
      <GatsbyImage image={image} alt="logo" tw="w-20 h-20" loading="eager" />
    </div>
  );
};
