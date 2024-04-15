import * as React from "react";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { Form } from "../components/Form";
import { Hero } from "../components/Hero";
import { H1Green } from "../components/Typography";

import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "bridge.webp" }) {
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

const ContactPage = ({ location, data }) => {
  const heroOptions = {
    title: "Connect Me",
    description:
      "We are all connected; to each other, biologically. To the Earth, chemically. To the rest of the universe, atomically.” – Neil deGrasse Tyson",
    bgImage: getImage(data.heroImage.childImageSharp),
  };

  return (
    <Layout location={location}>
      <Hero options={heroOptions} />
      <Container>
        <H1Green>Drop me a line!</H1Green>
        Whether you have questions, feedback, or just want to say hello, I’d
        love to hear from you. When you reach out, you’re not just sending a
        message into the digital void; you’re connecting with a real person who
        values your thoughts and inquiries. Your words matter, and I promise to
        respond promptly. Let’s chat and explore the possibilities together!
        Whether it’s a project, an idea, or simply a friendly conversation, I’m
        here and eager to connect. So go ahead, hit that “Contact” button, and
        let’s make some magic happen!
      </Container>
      <Container>
        <Form />
      </Container>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact Billy Now</title>;
