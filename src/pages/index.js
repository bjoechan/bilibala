import * as React from "react";
import "twin.macro";

import { CallToAction } from "../components/CallToAction";

import { Container } from "../components/Container";

import { Layout } from "../components/Layout";

import { useStaticQuery, graphql } from "gatsby";

const { Hero } = require("../components/Hero");

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
      link: "/boardgames",
    },
    {
      title: "Music",
      description: "This is the description of the Call to Action.",
      buttonText: "Let's feel",
      imageSrc: data.music.childImageSharp.fluid,
      link: "/music",
    },
    {
      title: "Travel",
      description: "This is the description of the Call to Action.",
      buttonText: "Let's Go",
      imageSrc: data.travel.childImageSharp.fluid,
      link: "/travel",
    },
  ];
  return (
    <Layout>
      <Hero />

      <Container>
        <h1 tw="text-2xl font-bold mt-4">
          Hello, I am <span tw="text-green">Billy Chan</span>
        </h1>

        <p tw="text-lg mt-4">
          In a world where silence often reigns supreme among developers, I
          embrace communication. I believe that great software emerges from
          collaboration, curiosity, and shared ideas. So, let’s chat about your
          project over a cup of virtual coffee.
        </p>

        <p tw="text-lg mt-4">
          When I’m not debugging, you’ll find me rolling dice, strategizing in
          board games, and exploring alternate realities. Whether it’s a game
          board or a responsive website, I love crafting seamless experiences.
        </p>

        <p tw="text-lg mt-4">
          And yes, I’m not just a code whisperer—I’m also a radio host. Tune in
          to my show where I discuss tech trends, share development tips, and
          occasionally slip in a board game recommendation.
        </p>

        <h1 tw="text-2xl font-bold mt-4">Let’s Connect!</h1>

        <p tw="text-lg mt-4">
          Whether you’re a fellow developer, a board game enthusiast, or just
          curious, drop me a line. Let’s build something amazing together!
        </p>
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
