import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import 'twin.macro';

export const LogoImg = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImg: file(relativePath: { eq: "bilibala-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
  <div tw="flex justify-center"><Img fluid={data.logoImg.childImageSharp.fluid} tw="w-20"/></div>)
}
