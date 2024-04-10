import * as React from "react";
import tw from "twin.macro";
import { Container } from "../components/Container";
import { Button } from "./Typography";

const Input = tw.input`w-full border-2 border-gray-400 rounded-md h-14 p-2 text-xl focus:(border-green border-4 outline-none bg-amber-100) md:(mr-32) lg:(m-0)`;
const Textarea = tw.textarea`w-full border-2 border-gray-400 rounded-md text-xl p-2 focus:(border-green border-4 outline-none bg-amber-100) md:(mr-32) lg:(m-0)`;
const FieldDiv = tw.div`w-full mb-4`;
const Label = tw.label`flex w-full items-center tracking-wide`;
const LabelDiv = tw.div`w-1/3 text-right text-base font-bold text-gray-600 pr-4 md:text-xl `;

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
          <Button tw="text-white font-bold" type="submit">
            Connect Now
          </Button>
        </div>
      </form>
    </Container>
  );
};
