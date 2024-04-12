import * as React from "react";
import "twin.macro";
import { Link } from "gatsby";

import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Container } from "../components/Container";
import { P, H1 } from "../components/Typography";

export const pageQuery = graphql`
  query {
    heroTravel: file(relativePath: { eq: "hero/hero-travel.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1024
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

const NotFoundPage = ({ location, data }) => {
  const heroOptions = {
    title: "404 Page not found",
    description: "We couldn't find the page you are looking for...",
    bgImage: getImage(data.image404.childImageSharp),
  };

  return (
    <Layout location={location}>
      <Hero options={heroOptions} />
      <Container>
        <H1>Page not found</H1>
        <P>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </P>
        <Link to="/" tw="text-green font-bold">
          Go back to the homepage
        </Link>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
