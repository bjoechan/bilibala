import * as React from "react";
import tw from "twin.macro";
import { Layout } from "../components/Layout";

const Input = tw.input`ml-2 border-2 border-gray-800 rounded-md`;
const FieldDiv = tw.div`w-1/2 h-8`;
const LabelDiv = tw.div`inline w-10`;

const ContactPage = () => {
  return (
    <Layout>
      <form method="post" action="#">
        <FieldDiv>
          <label>
            <LabelDiv>Name</LabelDiv>
            <Input type="text" name="name" id="name" />
          </label>
        </FieldDiv>
        <FieldDiv>
          <label>
            <LabelDiv>Email</LabelDiv>
            <Input type="email" name="email" id="email" />
          </label>
        </FieldDiv>
        <FieldDiv>
          <label>
            Subject
            <Input type="text" name="subject" id="subject" />
          </label>
        </FieldDiv>
        <FieldDiv>
          <label>
            Message
            <textarea
              name="message"
              id="message"
              rows="5"
              tw="w-2/3 ml-2 border-2 border-gray-800 rounded-md"
            />
          </label>
        </FieldDiv>
        <div>
          <button type="submit">Send</button>
        </div>
        <div>
          <input type="reset" value="Clear" />
        </div>
      </form>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact Billy Now</title>;
