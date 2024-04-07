import * as React from "react";
import "twin.macro";

import { Container, FullContainer, Section } from "../components/Container";

import { Layout } from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <h1 tw="text-2xl font-bold">Home Page</h1>
        <p tw="text-lg mt-4">Welcome to the Home Page.</p>
      </Container>
      <FullContainer>
        <Section>
          <h2 tw="text-xl font-bold">About</h2>
          <p tw="text-lg mt-4">This is the about section.</p>
        </Section>
      </FullContainer>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
