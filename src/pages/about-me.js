import * as React from "react";
import tw from "twin.macro";
import { Layout } from "../components/Layout";

import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container } from "../components/Container";

import { P, H1Green, H2, Space } from "../components/Typography";

const Box = tw.div`p-3 border-2 border-dotted border-green text-center mr-2 mb-2 last:(mr-0) hover:(bg-amber-200)`;

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "billy-coffee.webp" }) {
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

const AboutMePage = ({ location, data }) => {
  const image = getImage(data.file.childImageSharp);

  const myFavorite = [
    "GATSBY",
    "HTML",
    "JAVA",
    "JAVASCRIPT",
    "JQUERY",
    "NODEJS",
    "NUXT",
    "PHP",
    "PLAYWRIGHT",
    "REACT",
    "SASS",
    "TAILWIND",
    "TYPESCRIPT",
    "VUE",
  ];
  return (
    <Layout location={location}>
      <GatsbyImage
        image={image}
        alt="Billy and Coffee"
        tw="w-screen h-96 md:h-[46rem]"
        objectPosition="100% 50%"
      />

      <Container>
        <div tw="flex flex-col-reverse md:(flex-row)">
          <div tw="w-full md:w-3/4 pr-6">
            <P>
              They say the best programmers are those who never stop playing. In
              my case, that translates to a love for strategic board games like
              Settlers of Catan, where cunning plans and a dash of friendly
              competition keep the mind sharp. But when I'm not building empires
              on a tabletop, I'm building something real: lines of code that
              come to life as functional, user-friendly applications.
            </P>

            <P>
              With over 15 years of experience under my belt, I've honed my
              skills in web development, process automation, and even dabbled in
              the fascinating world of AI. The thrill of problem-solving and the
              immense satisfaction of crafting something truly unique from
              scratch keeps me constantly engaged. It's like a symphony for the
              brain, where logic and creativity intertwine to create something
              beautiful and functional.
            </P>

            <P>
              That same love of exploration extends beyond the digital realm.
              Travel, for me, is like an open book filled with vibrant stories
              waiting to be discovered. Immersing myself in diverse cultures,
              from bustling cityscapes to serene countrysides, broadens my
              perspective and fosters a deep sense of respect for the world's
              rich tapestry. (Plus, being a Montreal native means I can navigate
              those international adventures with a touch of French flair!)
            </P>

            <P>
              So, whether I'm conquering virtual challenges or exploring
              real-world wonders, I'm always on the lookout for new experiences
              and ways to push my boundaries. Feel free to stick around and
              explore this website – it's my own little corner of the digital
              world, where I share my passions and, hopefully, spark some
              curiosity of your own.
            </P>

            <Space />
            <H1Green>MY ONGOING PROJECTS:</H1Green>
            <P>
              <i>...Coming soon</i>
            </P>
          </div>
          <div tw="w-full md:w-1/4">
            <H2 tw="mb-0 text-center text-green">- MY FAVORITE -</H2>
            <div tw="flex flex-row flex-wrap items-center justify-center py-2">
              {myFavorite.map((item, index) => (
                <Box key={index}>{item}</Box>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default AboutMePage;
