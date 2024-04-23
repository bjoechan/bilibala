import * as React from "react";
import { useState, useRef } from "react";
import tw from "twin.macro";
import { Container } from "../components/Container";
import { Button, H1Green } from "./Typography";

import emailjs from "@emailjs/browser";

const Input = tw.input`w-full border-2 border-gray-400 rounded-md h-14 p-2 text-xl focus:(border-green border-4 outline-none bg-amber-100)`;
const Textarea = tw.textarea`w-full border-2 border-gray-400 rounded-md text-xl p-2 focus:(border-green border-4 outline-none bg-amber-100)`;
const FieldDiv = tw.div` w-full mb-4 md:(w-4/5)`;
const Label = tw.label`flex w-full items-center tracking-wide`;
const LabelDiv = tw.div`w-1/3 text-right text-base font-bold text-gray-600 pr-4 md:text-xl `;

const ErrorDiv = tw.div`text-red-400 text-sm text-right md:(text-base pr-32) lg:(pr-0)`;

const errors = {
  name: "Please enter your name with at least 3 characters.",
  email: "Please enter a valid email.",
  subject: "Please enter a subject line with at least 3 characters.",
  message: "Please enter a message with at least 10 characters.",
  overall: "Please correct the errors above.",
};

export const Form = () => {
  // console.log(process.env.GATSBY_CAPTCHA_SITE_KEY);
  const [isSent, setIsSent] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const form = useRef();
  // const recaptchaRef = useRef();

  const nameInputHandler = (_name = "") => {
    const isNameValid = _name.trim().length >= 3;
    setNameError(!isNameValid);
    return isNameValid;
  };

  const emailInputHandler = (_email = "") => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = _email.match(emailRegex) && _email.trim().length >= 3;
    setEmailError(!isEmailValid);
    return isEmailValid;
  };

  const subjectInputHandler = (_subject = "") => {
    const isSubjectValid = _subject.trim().length >= 3;
    setSubjectError(!isSubjectValid);
    return isSubjectValid;
  };

  const messageInputHandler = (_message = "") => {
    const isMessageValid = _message.trim().length >= 10;
    setMessageError(!isMessageValid);
    return isMessageValid;
  };
  const sendEmail = (e) => {
    e.preventDefault();

    // const recaptchaValue = recaptchaRef.current.getValue();

    // if (!recaptchaValue) {
    //   alert("Please verify that you are not a robot.");
    //   return;
    // }

    const name = e.target.name.value || "";
    const email = e.target.email.value || "";
    const subject = e.target.subject.value || "";
    const message = e.target.message.value || "";

    const isNameValid = nameInputHandler(name);
    const isEmailValid = emailInputHandler(email);
    const isSubjectValid = subjectInputHandler(subject);
    const isMessageValid = messageInputHandler(message);

    // If there are no validation errors, then submit the form
    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      emailjs.sendForm("XXX", "XXX", form.current, "XXX").then(
        (result) => {
          setIsSent(true);
        },
        (error) => {
          setIsSent(false);
        }
      );
    } else {
      alert("Form not submitted!");
      setIsSent(false);
    }
  };

  return (
    <Container>
      {!isSent && (
        <form ref={form} onSubmit={sendEmail}>
          <FieldDiv>
            <Label>
              <LabelDiv>Name</LabelDiv>
              <Input
                type="text"
                name="user_name"
                id="name"
                onKeyUp={(e) => nameInputHandler(e.target.value)}
              />
            </Label>
            {nameError && <ErrorDiv>{errors.name}</ErrorDiv>}
          </FieldDiv>
          <FieldDiv>
            <Label>
              <LabelDiv>Email</LabelDiv>
              <Input
                type="email"
                name="user_email"
                id="email"
                onKeyUp={(e) => emailInputHandler(e.target.value)}
              />
            </Label>
            {emailError && <ErrorDiv>{errors.email}</ErrorDiv>}
          </FieldDiv>
          <FieldDiv>
            <Label>
              <LabelDiv>Subject</LabelDiv>
              <Input
                type="text"
                name="subject"
                id="subject"
                onKeyUp={(e) => subjectInputHandler(e.target.value)}
              />
            </Label>
            {subjectError && <ErrorDiv>{errors.subject}</ErrorDiv>}
          </FieldDiv>
          <FieldDiv>
            <Label>
              <LabelDiv>Message</LabelDiv>
              <Textarea
                name="message"
                id="message"
                rows="5"
                onKeyUp={(e) => messageInputHandler(e.target.value)}
              />
            </Label>
            {messageError && <ErrorDiv>{errors.message}</ErrorDiv>}
          </FieldDiv>

          <div tw="w-full flex flex-col items-end md:(w-4/5)">
            {/* <div
              className="g-recaptcha"
              ref={recaptchaRef}
              data-sitekey={process.env.GATSBY_CAPTCHA_SITE_KEY}
            /> */}

            {/* <Reaptcha sitekey={process.env.GATSBY_CAPTCHA_SITE_KEY} onVerify={onVerify} ref={recaptchaRef} /> */}

            <Button tw="text-white font-bold mt-4" type="Submit">
              Connect Now
            </Button>
            {(nameError || emailError || subjectError || messageError) && (
              <ErrorDiv>{errors.overall}</ErrorDiv>
            )}
          </div>
        </form>
      )}
      {isSent && (
        <H1Green tw="text-center">
          Thank you for your message! We will reply you asap.
        </H1Green>
      )}
    </Container>
  );
};
