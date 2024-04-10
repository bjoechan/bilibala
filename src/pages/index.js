import * as React from "react";
import "twin.macro";

import { CallToAction } from "../components/CallToAction";
import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
import { Hero } from "../components/Hero";
import { H1, H2, P } from "../components/typography";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      boardgame: file(relativePath: { eq: "boardgame.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
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
      heroSunRise: file(relativePath: { eq: "hero/hero-sunrise.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const callToActionOptions = [
    {
      title: "Board Games",
      description:
        "like Settlers of Catan, invite players to think outside the box, strategize, and build bonds through shared challenges.",
      buttonText: "Let's play",
      imageSrc: data.boardgame.childImageSharp.fluid,
      link: "/boardgames",
    },
    {
      title: "Music",
      description:
        "like a multifaceted elixir, weaves threads of calmness, invigoration, and creative sparks.",
      buttonText: "Let's feel",
      imageSrc: data.music.childImageSharp.fluid,
      link: "/music",
    },
    {
      title: "Travel",
      description:
        "like an open book, invites you to explore distant lands, immerse yourself in diverse cultures, and learn the universal language of respect.",
      buttonText: "Let's Go",
      imageSrc: data.travel.childImageSharp.fluid,
      link: "/travel",
    },
  ];

  const heroOptions = {
    title: `<span tw="text-green">Billy Chan</span>`,
    description: "Web Developer, Radio Host, Board Game Enthusiast",
    bgImage: data.heroSunRise.childImageSharp.fluid.src,
  };

  return (
    <Layout>
      <Hero options={heroOptions} />

      <Container>
        <H1>
          Hello, I am <span tw="text-green">Billy Chan</span>
        </H1>

        <P>
          In a world where silence often reigns supreme among developers, I
          embrace communication. I believe that great software emerges from
          collaboration, curiosity, and shared ideas. So, let’s chat about your
          project over a cup of virtual coffee.
        </P>

        <P>
          When I’m not debugging, you’ll find me rolling dice, strategizing in
          board games, and exploring alternate realities. Whether it’s a game
          board or a responsive website, I love crafting seamless experiences.
        </P>

        <P>
          And yes, I’m not just a code whisperer—I’m also a radio host. Tune in
          to my show where I discuss tech trends, share development tips, and
          occasionally slip in a board game recommendation.
        </P>

        <H2>Let’s Connect!</H2>

        <P>
          Whether you’re a fellow developer, a board game enthusiast, or just
          curious, drop me a line. Let’s build something amazing together!
        </P>
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
