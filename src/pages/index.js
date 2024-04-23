import * as React from "react";
import tw from "twin.macro";
import { CallToAction } from "../components/CallToAction";
import { Container, FullContainer } from "../components/Container";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Hero } from "../components/Hero";
import { H1, H2, P, ALink } from "../components/Typography";

export const pageQuery = graphql`
  query {
    heroSunRise: file(relativePath: { eq: "hero/hero-sunrise.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1024
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    boardgame: file(relativePath: { eq: "boardgame.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    music: file(relativePath: { eq: "music.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    travel: file(relativePath: { eq: "travel.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

const IndexPage = ({ location, data }) => {
  const callToActionOptions = [
    {
      title: "Board Games",
      description:
        "like Settlers of Catan, invite players to think outside the box, strategize, and build bonds through shared challenges.",

      imageSrc: getImage(data.boardgame.childImageSharp),
      link: "/boardgames",
    },
    {
      title: "Music",
      description:
        "like a multifaceted elixir, weaves threads of calmness, invigoration, and creative sparks.",

      imageSrc: getImage(data.music.childImageSharp),
      link: "/music",
    },
    {
      title: "Travel",
      description:
        "like an open book, invites you to explore distant lands, immerse yourself in diverse cultures, and learn the universal language of respect.",

      imageSrc: getImage(data.travel.childImageSharp),
      link: "/travel",
    },
  ];

  const heroOptions = {
    title: `Billy Chan`,
    description: "Web Developer, Traveller, Board Game Enthusiast & Radio Host",
    bgImage: getImage(data.heroSunRise.childImageSharp),
  };

  return (
    <>
      <Layout location={location}>
        <Hero options={heroOptions} />

        <Container tw="pt-12">
          <H1>
            Hello, I am <span tw="text-green">Billy Chan</span>
          </H1>

          <P>
            In a world where silence often reigns supreme among developers, I
            embrace communication. I believe that great software emerges from
            collaboration, curiosity, and shared ideas. So, let’s chat about
            your project over a cup of virtual coffee.
          </P>

          <P>
            When I’m not debugging, you’ll find me rolling dice, strategizing in
            board games, and exploring alternate realities. Whether it’s a game
            board or a responsive website, I love crafting seamless experiences.
          </P>

          <P>
            And yes, I’m not just a code whisperer—I’m also a radio host. I am
            currently a guest host in a radio show called{" "}
            <ALink
              href="https://slmedia.org/podcast/slhour"
              target="_blank"
              rel="noreferrer"
            >
              "SLHour" on Salt + Light Media
            </ALink>
            . The segment is called "Church for Dummies" where we try to explain
            the basics of the faith in a fun and engaging way.
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

        <FullContainer atw={[tw`bg-green mt-12 py-10`]}>
          <Container tw="flex justify-center items-center py-20">
            <div tw="text-white text-center">
              <div tw="font-serif italic text-xl md:text-2xl">
                “The only way to do great work is to love what you do.”
              </div>
              <div tw="font-sans pt-3 font-bold text-base md:text-xl">
                Steve Jobs
              </div>
            </div>
          </Container>
        </FullContainer>
      </Layout>
    </>
  );
};

export default IndexPage;
