import * as React from "react";
import "twin.macro";
import { Hero } from "../../components/Hero";
import { useStaticQuery, graphql } from "gatsby";
import { Layout } from "../../components/Layout";
import { Container } from "../../components/Container";
import { P } from "../../components/Typography";

const MusicPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroTravel: file(relativePath: { eq: "hero/hero-travel.png" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const heroOptions = {
    title: `<span>Travel</span>`,
    description:
      "Traveling – it leaves you speechless, then turns you into a storyteller. - Ibn Battuta",
    bgImage: data.heroTravel.childImageSharp.fluid.src,
  };

  return (
    <Layout>
      <Hero options={heroOptions} />
      <Container>
        <P>Content is coming soon</P>
      </Container>
    </Layout>
  );
};

export default MusicPage;
