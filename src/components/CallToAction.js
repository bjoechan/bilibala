import * as React from "react";
import tw from "twin.macro";
import { navigate } from "gatsby";
import Img from "gatsby-image";

const Button2 = tw.button`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`;
const H1 = tw.h1`text-lg lg:(text-2xl text-center) font-bold  mb-4`;
const P = tw.p`text-sm  lg:(text-lg) mb-4`;

export const CallToAction = ({ options }) => {
  const { title, description, buttonText, imageSrc, link } = options;
  return (
    <div tw="border-2 border-slate rounded-2xl mb-8 last:(mb-0) flex flex-row md:(m-0 flex-col) overflow-hidden">
      <Img fluid={imageSrc} tw="object-cover w-1/2 md:(w-full)" />
      <div tw="p-4 text-left md:(p-2 text-center) lg:(p-10)">
        <H1>{title}</H1>
        <P>{description}</P>
        <Button2
          onClick={() => {
            navigate(link);
          }}
        >
          {buttonText}
        </Button2>
      </div>
    </div>
  );
};
