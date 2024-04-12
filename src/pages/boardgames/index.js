import * as React from "react";
import "twin.macro";
import { Layout } from "../../components/Layout";
import { P } from "../../components/Typography";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Hero } from "../../components/Hero";

import BoardgameItem from "../../components/BoardgameItem";

export const pageQuery = graphql`
  query {
    heroBoardgame: file(relativePath: { eq: "hero/hero-boardgame.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1024
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    bgMagicMaze1: file(relativePath: { eq: "boardgames/magicmaze-1.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    bgMagicMaze2: file(relativePath: { eq: "boardgames/magicmaze-2.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    bgClank1: file(relativePath: { eq: "boardgames/clank1.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    bgClank2: file(relativePath: { eq: "boardgames/clank2.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

const BoardGamesPage = ({ location, data }) => {
  const boardGamesData = [
    {
      title: "Magic Maze",
      descriptions: () => (
        <>
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
        </>
      ),
      images: [
        getImage(data.bgMagicMaze1.childImageSharp),
        getImage(data.bgMagicMaze2.childImageSharp),
      ],
      videoId: "N7tRhIJCzoQ",
      imagePosition: "right",
    },
    {
      title: "Clank!",
      descriptions: () => (
        <>
          <P>
            <strong>Clank!</strong> is a deck-building game. Each player has
            their own deck, and building yours up is part of playing the game.
            You start each of your turns with five cards in your hand, and
            you'll play them all in any order you choose. Most cards will
            generate resources, of which there are three different kinds:
          </P>
          <ul tw="list-disc list-outside pl-5 pb-4">
            <li>
              <strong>Skill</strong>, which is used to acquire new cards for
              your deck.
            </li>
            <li>
              <strong>Swords</strong>, which are used to fight the monsters that
              infest the dungeon.
            </li>
            <li>
              <strong>Boots</strong>, which are used to move around the board.
            </li>
          </ul>

          <P>
            Every time you acquire a new card, you put it face up in your
            discard pile. Whenever you need to draw a card and find your deck
            empty, you shuffle your discard pile and turn it face down to form a
            new deck. With each shuffle, your newest cards become part of a
            bigger and better deck! Each player starts with the same cards in
            their deck, but they’ll acquire different cards during their turns.
            Because cards can do many different things, each player’s deck (and
            strategy) will become more and more different as the game unfolds.
          </P>
          <P>During the game, you have two goals:</P>
          <ul tw="list-disc list-outside pl-5 pb-4">
            <li>
              Retrieve an Artifact token and escape the dragon by returning to
              the place you started, outside of the dungeon.
            </li>
            <li>
              Accumulate enough points with your Artifact and other loot to beat
              out your opponents and earn the title of Greatest Thief in the
              Realm!
            </li>
          </ul>
        </>
      ),
      images: [
        getImage(data.bgClank1.childImageSharp),
        getImage(data.bgClank2.childImageSharp),
      ],
      videoId: "EZQyr5JkbBY",
    },
  ];

  const heroOptions = {
    title: `Boardgames`,
    description: "Here is a list of board games that I enjoy playing.",
    bgImage: getImage(data.heroBoardgame.childImageSharp),
  };

  return (
    <Layout location={location}>
      <Hero options={heroOptions} />

      {boardGamesData.map((packages, index) => (
        <BoardgameItem key={index} packages={packages} />
      ))}
    </Layout>
  );
};

export default BoardGamesPage;
