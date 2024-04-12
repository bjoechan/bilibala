import * as React from "react";
import { useState } from "react";
import tw from "twin.macro";

import { GatsbyImage } from "gatsby-plugin-image";

import { H2, H3 } from "./Typography";

import DownIcon from "../images/assets/down-icon.inline.svg";
import UpIcon from "../images/assets/up-icon.inline.svg";

export const Accordian = ({ accordianObj }) => {
  const id = accordianObj.id;
  const data = accordianObj.data;
  const openIndex = accordianObj.openIndex;

  const [openWhichbox, setOpenWhichbox] = useState(openIndex);

  const accordianClickHandler = (index) => {
    if (openWhichbox === index) {
      setOpenWhichbox(null);
    } else {
      setOpenWhichbox(index);
    }
  };

  return (
    <div id={id}>
      {data.map((item, index) => (
        <div key={index} tw="border-2 border-gray-200">
          <button
            tw="flex w-full justify-between items-center bg-slate text-white p-4"
            onClick={() => accordianClickHandler(index)}
          >
            <H3 tw="m-0">{item.lTitle}</H3>
            <H2 tw="m-0">{item.cTitle}</H2>
            {openWhichbox === index ? (
              <UpIcon tw="w-8 h-8" />
            ) : (
              <DownIcon tw="w-8 h-8" />
            )}
          </button>
          <div
            css={[
              tw`bg-lightslate w-full transition-all ease-in-out duration-500 overflow-hidden`,
              openWhichbox !== index ? tw`max-h-0` : tw`max-h-screen`,
            ]}
          >
            <div tw="p-4 flex w-full flex-col-reverse md:(flex-row)">
              <div tw="w-full text-lg md:(text-xl)">{item.description}</div>
              <div tw="w-full pb-4 md:(w-96 pl-6)">
                <GatsbyImage image={item.image} alt={item.cTitle} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
