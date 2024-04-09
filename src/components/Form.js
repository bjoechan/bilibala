import * as React from "react";
import tw from "twin.macro";
import { Container } from "../components/Container";

const Input = tw.input`w-full border-2 border-gray-400 rounded-md h-14 p-2 text-xl focus:(border-green border-4 outline-none bg-amber-100)`;
const Textarea = tw.textarea`w-full border-2 border-gray-400 rounded-md text-xl p-2 focus:(border-green border-4 outline-none bg-amber-100)`;
const FieldDiv = tw.div`w-full mb-4`;
const Label = tw.label`flex w-full items-center tracking-wide`;
const LabelDiv = tw.div`w-1/3 text-right text-xl font-bold text-gray-600 pr-4 `;

export const Form = () => {
  return (
    <Container tw="lg:w-1/2">
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
            <Textarea name="message" id="message" rows="5" />
          </Label>
        </FieldDiv>
        <div tw="text-right">
          <button
            tw="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-lg px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            type="submit"
          >
            Connect Now
          </button>
        </div>
      </form>
    </Container>
  );
};
