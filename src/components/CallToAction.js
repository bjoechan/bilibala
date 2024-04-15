import * as React from "react";
import "twin.macro";
import { navigate } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";

import { H3, PSmall } from "./Typography";

export const CallToAction = ({ options }) => {
  const { title, description, imageSrc, link } = options;

  return (
    <button
      tw="border-2 border-slate rounded-2xl mb-8 last:(mb-0) flex flex-row items-center md:(m-0 flex-col) overflow-hidden hover:(ring-2 ring-green border-green bg-amber-200)"
      onClick={() => {
        navigate(link);
      }}
    >
      <GatsbyImage
        image={imageSrc}
        alt={title}
        loading="eager"
        tw="w-full h-full md:(w-80 h-80)"
        objectFit="cover"
        objectPosition="right center"
      />

      <div tw="p-4 text-left w-full md:(p-2 text-center) lg:(p-4)">
        <H3>{title}</H3>
        <PSmall>{description}</PSmall>
      </div>
    </button>
  );
};
