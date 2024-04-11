import * as React from "react";
import "twin.macro";
import { Link } from "gatsby";

import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "../components/Container";
import { P, H1 } from "../components/Typography";

const NotFoundPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      image404: file(relativePath: { eq: "404.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const heroOptions = {
    slogan: "404 Page not found",
    bgImage: data.image404.childImageSharp.fluid.src,
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
