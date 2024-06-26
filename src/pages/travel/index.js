import * as React from "react";
import "twin.macro";
import { Hero } from "../../components/Hero";

import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Layout } from "../../components/Layout";
import { Container } from "../../components/Container";
import { P } from "../../components/Typography";

import { Accordian } from "../../components/Accordian";

export const pageQuery = graphql`
  query {
    heroTravel: file(relativePath: { eq: "hero/hero-travel.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1024
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    amsterdam: file(relativePath: { eq: "travel/amsterdam.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1512
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    banff: file(relativePath: { eq: "travel/banff.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1512
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    kyoto: file(relativePath: { eq: "travel/kyoto.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1512
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    lisbon: file(relativePath: { eq: "travel/lisbon.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1512
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    newyork: file(relativePath: { eq: "travel/newyork.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1512
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    valletta: file(relativePath: { eq: "travel/valletta.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1512
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

const TravelPage = ({ location, data }) => {
  const heroOptions = {
    title: `Travel`,
    description:
      "Traveling – it leaves you speechless, then turns you into a storyteller. - Ibn Battuta",
    bgImage: getImage(data.heroTravel.childImageSharp),
  };

  const accordianObj = {
    id: "accordian",
    openIndex: 0,
    data: [
      {
        lTitle: "2024",
        cTitle: "Lisbon (Portugal)",
        description:
          "Lisbon, Portugal's sun-drenched capital, is a city where history whispers from ancient ramparts and vibrant trams climb steep hills. Cobblestone streets meander through terracotta-roofed houses, each imbued with the stories of explorers and poets. Ascend São Jorge Castle, its ramparts offering panoramic views, or explore the Jerónimos Monastery, a UNESCO marvel whispering of Portugal's golden age of discovery. Wander through Alfama, Lisbon's historic heart, where soulful Fado music spills from hidden restaurants. Lisbon is a city bathed in golden light, where beauty and history intertwine on every winding",
        image: getImage(data.lisbon.childImageSharp),
      },
      {
        lTitle: "2023",
        cTitle: "Kyoto (Japan)",
        description:
          "Kyoto, a city draped in the silk of time, whispers secrets from serene temples and vibrant geisha districts.  Towering vermilion gates, like bursts of flame against the jade green mountains, mark the entrances to ancient shrines.  Wander through bamboo groves, their silent symphony rustling in the breeze, or get lost in the labyrinthine streets of Gion, where the painted faces of geishas hint at a bygone era.  In Kiyomizu-dera temple, witness the city sprawl from a wooden balcony, each tile imbued with the stories of emperors and artisans.  Kyoto is a living tapestry, where ancient beauty and modern spirit intertwine on every moss-covered path, promising a journey through Japan's timeless soul.",
        image: getImage(data.kyoto.childImageSharp),
      },
      {
        lTitle: "2019",
        cTitle: "Banff (Canada)",
        description:
          "Banff, a jewel nestled in the crown of the Canadian Rockies, whispers tales of adventure amidst breathtaking scenery. Towering mountain peaks, their snow-capped summits scraping the sky, cradle the town in a majestic embrace.  Lake Louise, a turquoise gem reflecting the surrounding grandeur, beckons with the promise of serenity.  Wander along Banff Avenue, the main street, where chalet-style buildings adorned with flower boxes brim with stories of explorers and mountaineers.  In Banff Gondola, ascend Sulphur Mountain, and witness the world unfurl beneath you, a breathtaking panorama steeped in natural beauty. Banff is a place where nature reigns supreme, where rugged landscapes and charming hospitality intertwine on every pine-scented path, promising an unforgettable escape.",
        image: getImage(data.banff.childImageSharp),
      },
      {
        lTitle: "2018",
        cTitle: "New York (United States)",
        description:
          "New York City, a whirlwind metropolis where concrete canyons pierce the sky, pulsates with an energy unlike any other.  Soaring skyscrapers of glass and steel cast long shadows over bustling avenues, while iconic yellow cabs weave through a constant stream of humanity.  Dive into the world-class museums like the Met, where treasures from across the globe whisper tales of human achievement.  Catch a Broadway show, where dazzling lights illuminate unforgettable stories.  From the electrifying buzz of Times Square to the serene oasis of Central Park, New York is a city that never sleeps, where ambition and artistry intertwine on every corner, promising an experience that is both exhilarating and unforgettable.",
        image: getImage(data.newyork.childImageSharp),
      },
      {
        lTitle: "2018",
        cTitle: "Amsterdam (Netherlands)",
        description:
          "Amsterdam, a vibrant tapestry woven with history and charm, beckons with its enchanting canals. Gabled houses, their facades a kaleidoscope of colors, line the waterways, whispering tales of a rich mercantile past. Bridges adorned with twinkling lights arch over the water, inviting exploration by bike or canal cruise. Delve into renowned museums like the Rijksmuseum, where Rembrandt's masterpieces come alive. Stroll through vibrant flower markets, their fragrance a symphony for the senses. Amsterdam is a city that pulsates with life, where beauty and history intertwine on every corner, promising an unforgettable adventure.",
        image: getImage(data.amsterdam.childImageSharp),
      },
      {
        lTitle: "2017",
        cTitle: "Valletta (Malta)",
        description:
          "Nestled on a Maltese peninsula, Valletta, a UNESCO World Heritage Site, is a city whispered in golden hues. Founded by the Knights of St. John in the 16th century, its very stones breathe history. Walk along fortified walls, guarding the sapphire Mediterranean. Stroll through narrow streets lined with honey-colored Baroque buildings, each whispering tales of knights and chivalry. Duck into St. John's Co-Cathedral, where Caravaggio's masterpiece, 'The Beheading of Saint John,' ignites your senses with its dramatic light and shadow. Valletta is a living museum, a place where beauty and history intertwine, promising a feast for your eyes and a story at every turn.",
        image: getImage(data.valletta.childImageSharp),
      },
    ],
  };

  return (
    <Layout location={location}>
      <Hero options={heroOptions} />
      <Container>
        <P>
          Traveling is one of my favorite things to do. I love exploring new
          places, meeting new people, and experiencing different cultures. Here
          are some of the places I've visited:
        </P>
        <Accordian accordianObj={accordianObj} />
      </Container>
    </Layout>
  );
};

export default TravelPage;
