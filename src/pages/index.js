import * as React from "react";
import "twin.macro";

import { CallToAction } from "../components/CallToAction";

import { Container } from "../components/Container";

import { Layout } from "../components/Layout";

import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      boardgame: file(relativePath: { eq: "boardgame.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      music: file(relativePath: { eq: "music.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      travel: file(relativePath: { eq: "travel.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const callToActionOptions = [
    {
      title: "Board Games",
      description: "This is the description of the Call to Action.",
      buttonText: "Let's play",
      imageSrc: data.boardgame.childImageSharp.fluid,
    },
    {
      title: "Music",
      description: "This is the description of the Call to Action.",
      buttonText: "Let's feel",
      imageSrc: data.music.childImageSharp.fluid,
    },
    {
      title: "Travel",
      description: "This is the description of the Call to Action.",
      buttonText: "Let's Go",
      imageSrc: data.travel.childImageSharp.fluid,
    },
  ];
  return (
    <Layout>
      <Container>
        <h1 tw="text-2xl font-bold">Home Page</h1>
        <p tw="text-lg mt-4">Welcome to the Home Page.</p>
      </Container>
      <Container>
        <h2 tw="text-xl font-bold">About</h2>
        <p tw="text-lg mt-4">This is the about section.</p>
      </Container>
      <Container>
        <div tw="grid grid-cols-1 w-full md:(grid-cols-3 gap-4 p-0)">
          {callToActionOptions.map((options, index) => (
            <CallToAction key={index} options={options} />
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
