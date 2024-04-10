import * as React from "react";
import "twin.macro";
import { Layout } from "../../components/Layout";
import { Container } from "../../components/Container";
import { H1, H2, P } from "../../components/typography";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import PlayIcon from "../../images/assets/play-icon.inline.svg";

import VideoContext from "../../context/VideoContext";

const BoardGamesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      bgMagicMaze1: file(relativePath: { eq: "boardgames/magicmaze-1.webp" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bgMagicMaze2: file(relativePath: { eq: "boardgames/magicmaze-2.webp" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Container>
        <H1>Board Games:</H1>
      </Container>
      <Container tw="flex border-b-2 border-green">
        <div tw="w-2/5">
          <Img
            fluid={data.bgMagicMaze1.childImageSharp.fluid}
            tw="object-cover w-full"
          />

          <Img
            fluid={data.bgMagicMaze2.childImageSharp.fluid}
            tw="object-cover w-full"
          />
        </div>
        <div tw="w-3/5 p-8">
          <H2>MAGIC MAZE</H2>
          <P>
            Magic Maze is a real-time, cooperative game. Each player can control
            any hero in order to make that hero perform a very specific action,
            to which the other players do not have access: Move north, explore a
            new area, ride an escalator… All this requires rigorous cooperation
            between the players in order to succeed at moving the heroes
            prudently. However, you are allowed to communicate only for short
            periods during the game; the rest of the time, you must play without
            giving any visual or audio cues to each other. If all of the heroes
            succeed in leaving the shopping mall in the limited time allotted
            for the game, each having stolen a very specific item, then everyone
            wins together.
          </P>
          <P>
            At the start of the game, you have only three minutes in which to
            take actions. Hourglass spaces you encounter along the way give you
            more time. If the sand timer ever completely runs out, all players
            lose the game: Your loitering has aroused suspicion, and the mall
            security guards nab you!
          </P>
          <P>
            <VideoContext.Consumer>
              {(videoState) => (
                <button
                  tw="flex items-center"
                  onClick={() => videoState.togglePlay("N7tRhIJCzoQ")}
                >
                  <PlayIcon tw="w-4 h-4 mr-2" />{" "}
                  <div>Learn how to play Magic Maze</div>
                </button>
              )}
            </VideoContext.Consumer>
          </P>
        </div>
      </Container>
      <Container tw="h-24"></Container>
    </Layout>
  );
};

export default BoardGamesPage;
