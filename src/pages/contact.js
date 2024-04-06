import * as React from "react";
import tw from "twin.macro";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";

const Input = tw.input`ml-2 border-2 border-gray-800 rounded-md`;
const FieldDiv = tw.div`w-full`;
const Label = tw.label`flex`;
const LabelDiv = tw.div`w-20`;

const ContactPage = () => {
  return (
    <Layout>
      <Container>
        <form method="post" action="#">
          <FieldDiv>
            <Label>
              <LabelDiv>Name</LabelDiv>
              <Input type="text" name="name" id="name" />
            </Label>
          </FieldDiv>
          <FieldDiv>
            <Label>
              <LabelDiv>Email</LabelDiv>
              <Input type="email" name="email" id="email" />
            </Label>
          </FieldDiv>
          <FieldDiv>
            <Label>
              <LabelDiv>Subject</LabelDiv>
              <Input type="text" name="subject" id="subject" />
            </Label>
          </FieldDiv>
          <FieldDiv>
            <Label>
              <LabelDiv>Message</LabelDiv>
              <textarea
                name="message"
                id="message"
                rows="5"
                tw="ml-2 border-2 border-gray-800 rounded-md"
              />
            </Label>
          </FieldDiv>
          <div>
            <button
              tw="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </Container>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact Billy Now</title>;
