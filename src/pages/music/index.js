import * as React from "react";
import "twin.macro";
import { Hero } from "../../components/Hero";
import { graphql } from "gatsby";
import { Layout } from "../../components/Layout";
import { Container } from "../../components/Container";
import { H1, P, Author } from "../../components/Typography";
import { getImage } from "gatsby-plugin-image";

export const pageQuery = graphql`
  query {
    heroMusic: file(relativePath: { eq: "hero/hero-music.png" }) {
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

const MusicPage = ({ location, data }) => {
  const heroOptions = {
    title: `MUSIC`,
    description:
      "Music is the universal language of mankind. - Henry Wadsworth Longfellow",
    bgImage: getImage(data.heroMusic.childImageSharp),
  };

  return (
    <Layout location={location}>
      <Hero options={heroOptions} />
      <Container>
        <H1>Jazz: Improvisation, Irregularity, and the Harmony of Surprise</H1>

        <iframe
          title="Spotify Playlist"
          tw="rounded-lg shadow-lg my-4"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DWTsUzn4pp2rW?utm_source=generator"
          width="100%"
          height="80"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        <P>
          For computer scientists, the world is built on logic, algorithms, and
          the predictable flow of code. Yet, there exists an art form that
          thrives on the opposite: Jazz music. Jazz, with its improvisational
          nature and fondness for irregular chords, might seem like the
          antithesis of order. But delve deeper, and you'll discover a
          fascinating world where dissonance becomes harmony, and surprise
          becomes the key to artistic expression.
        </P>

        <P>
          One of the defining features of jazz is improvisation. Unlike
          classical music, where the notes are meticulously written on a page,
          jazz musicians take a melody as a starting point and then weave their
          own variations, creating a unique sonic tapestry in real-time. This
          improvisation is akin to a programmer debugging code. They encounter
          an error (musical dissonance), analyze it (play with the notes), and
          then apply creative solutions (improvisational riffs) to reach a
          resolution (a state of harmonic consonance). Both require a deep
          understanding of the underlying structure (music theory or programming
          language) and the ability to think on their feet to achieve the
          desired outcome (a beautiful melody or a bug-free program).
        </P>

        <P>
          Another hallmark of jazz is its use of irregular chords – chords that
          deviate from the standard major and minor scales. These chords, often
          with extended ninths, elevenths, and thirteenths, can sound dissonant
          at first. However, in the hands of a skilled musician, these "wrong"
          notes become the right notes, adding depth, complexity, and a sense of
          delightful surprise to the music. This parallels the world of computer
          science, where seemingly nonsensical code snippets, like bitwise
          operations or obscure library functions, can be elegantly woven
          together to achieve a highly optimized and efficient program. The key
          lies in understanding the underlying logic and using it creatively to
          solve problems in unconventional ways.
        </P>

        <P>
          The abstract nature of jazz further strengthens the connection to
          computer science. Jazz isn't always about melody or rhythm; it's about
          evoking emotions and creating a mood. A skilled jazz musician can
          paint a sonic picture using improvisation, dissonance, and rhythm,
          leaving the interpretation entirely up to the listener. Similarly,
          computer science isn't just about writing code; it's about creating
          systems that can solve complex problems, manage vast amounts of data,
          and even generate creative content. Both disciplines require a deep
          understanding of fundamental principles but also the ability to think
          outside the box and use those principles to achieve abstract goals.
        </P>

        <P>
          Finally, jazz, like computer science, is constantly evolving. New
          techniques, like modal improvisation or polyrhythms, emerge, pushing
          the boundaries of the art form. Programmers too are constantly
          innovating, developing new algorithms, programming languages, and
          paradigms. Both fields are testaments to human ingenuity, a constant
          interplay between established structures and the relentless pursuit of
          creative expression.
        </P>

        <P>
          In conclusion, jazz music, with its embrace of improvisation,
          irregular chords, and abstraction, offers a surprising yet profound
          parallel to the world of computer science. Both disciplines thrive on
          a foundation of logic and structure, but it's the ability to think
          creatively, solve problems unconventionally, and use surprise to
          achieve beauty and functionality that elevates them to true art forms.
          So, the next time you listen to a jazz solo that seems to defy all
          musical conventions, remember the programmer wrestling with a complex
          algorithm. In that beautiful dissonance, you might just hear the
          harmonious hum of innovation.
        </P>
        <Author>by Billy Chan</Author>
      </Container>
    </Layout>
  );
};

export default MusicPage;
