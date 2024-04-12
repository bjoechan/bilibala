import * as React from "react";
import "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

export const Hero = ({ options = {} }) => {
  let { title, description, bgImage } = options;

  const backgroundImage = bgImage || "";

  return (
    <div tw="h-96 relative z-0">
      <GatsbyImage
        image={backgroundImage}
        alt={title}
        tw="w-full h-96"
        objectPosition="100% 50%"
      />

      <div tw="absolute top-0 left-0 bg-black bg-opacity-20 z-10 h-96 w-full flex items-center">
        <div tw="w-lg mx-auto text-white p-10 md:(p-2 animate-slideIn)">
          <div tw="text-4xl font-bold  md:text-6xl">{title}</div>
          <div tw="text-xl w-4/5 md:(text-2xl)">{description}</div>
        </div>
      </div>
    </div>
  );
};
