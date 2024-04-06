import * as React from "react";
import tw from "twin.macro";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";

import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";

const Paragraph = tw.div`my-4`;

const AboutMePage = () => {
  const data = useStaticQuery(graphql`
    query letsQuery {
      file(relativePath: { eq: "billy-coffee.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Img
        tw="object-cover object-right w-screen h-[32rem] lg:(rounded-xl w-full h-[40rem])"
        fluid={data.file.childImageSharp.fluid}
        alt="Billy Drinking Coffee"
      />
      <div tw="mx-auto p-4 lg:(px-0)">
        <Paragraph>
          Billy Chan, a seasoned Senior Web Developer, brings 20 years of IT
          experience and 15 years of Media & Marketing expertise to the table.
          Fluent in both English and French, Billy’s passion for technology and
          creativity shines through in every project.
        </Paragraph>
        <Paragraph>
          🎵 Music Enthusiast:
          <br />
          Jazz melodies resonate with Billy’s soul. When not coding, you’ll find
          them immersed in the harmonious notes of their favorite tunes. The
          piano, their canvas, becomes a masterpiece as their fingers dance
          across the keys.
        </Paragraph>
        <Paragraph>
          🌎 Globetrotter:
          <br />
          With a wanderlust heart, Billy explores the world, collecting memories
          from every corner. From bustling cities to serene landscapes, each
          destination adds to their rich tapestry of experiences. Whether it’s
          savoring street food in Bangkok or gazing at the Northern Lights in
          Iceland, Billy embraces the beauty of diverse cultures.
        </Paragraph>
        <Paragraph>
          🍽 Culinary Adventurer
          <br />
          Food isn’t just sustenance; it’s an art form. Billy savors flavors,
          appreciates textures, and seeks out hidden gems in local eateries.
          Whether it’s a humble taco truck or a Michelin-starred restaurant,
          they approach each meal as a delightful journey. Food photography?
          Yes, please!
        </Paragraph>
        <Paragraph>
          ♟ Board Game Aficionado
          <br />
          Strategy, camaraderie, and a dash of competition—Billy thrives on
          board games. Settlers of Catan, Ticket to Ride, or a classic game of
          chess—they’re up for it all. The thrill of outwitting opponents and
          the joy of shared laughter make board game nights unforgettable.
        </Paragraph>

        <Paragraph>
          🎙 Former Radio Host
          <br />
          For a decade, Billy’s voice graced the airwaves in Montreal. Their
          charisma and storytelling skills captivated listeners, making each
          show memorable. Whether interviewing artists, discussing current
          events, or spinning tunes, Billy’s radio presence left an indelible
          mark.
        </Paragraph>

        <Paragraph>
          🔍 Problem Solver Extraordinaire
          <br />
          Complex challenges? No problem. Billy’s exceptional problem-solving
          abilities turn obstacles into opportunities. Whether debugging code,
          optimizing performance, or untangling intricate project requirements,
          they thrive under pressure.
        </Paragraph>

        <Paragraph>
          🛠 Tech Stack Maestro
          <br />
          Billy wields an impressive toolkit:
          <br />
          <br />
          PHP, HTML5, CSS3: The backbone of web development.
          <br />
          ReactJS, Gatsby, Tailwind, VueJS, NuxtJS: Crafting dynamic interfaces
          and seamless user experiences.
          <br />
          Playwright: Automating testing with finesse.
          <br />
          WordPress: Navigating CMS platforms effortlessly.
          <br />
          Design Adept: Sketch, Figma, Avocode, Photoshop, Premiere—the Adobe
          Suite is their playground.
        </Paragraph>
        <Paragraph>
          🚀 Leadership and Creativity
          <br />
          With a high Creativity Quotient and well-developed management skills,
          Billy thrives in collaborative environments. Whether leading a team or
          contributing as an individual, they infuse projects with innovation
          and efficiency.
        </Paragraph>

        <Paragraph>
          In summary, Billy Chan is more than a developer; they’re a
          multifaceted artist, an explorer, and a problem-solving maestro.
          🚀🎨🌎
        </Paragraph>
      </div>
    </Layout>
  );
};
export default AboutMePage;
