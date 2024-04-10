import * as React from "react";
import tw from "twin.macro";
import Img from "gatsby-image";
import VideoContext from "../context/VideoContext";
import { Container } from "./Container";
import PlayIcon from "../images/assets/play-icon.inline.svg";
import { H2, P } from "./Typography";

const BoardgameItem = ({ packages }) => {
  const {
    title = "",
    descriptions = () => {},
    images = [],
    videoId = "",
    imagePosition = "left",
  } = packages;

  return (
    <Container
      tw="flex flex-col border-b-2 border-green md:(flex-row)"
      css={[imagePosition === "right" && tw`md:(flex-row-reverse)`]}
    >
      <div tw="w-full md:(w-2/5)">
        {images.map((image, index) => (
          <Img key={index} fluid={image} tw="w-full" />
        ))}
      </div>
      <div tw="w-full pt-8 md:(w-3/5 p-8)">
        <H2>{title}</H2>
        {descriptions()}
        {videoId !== "" && (
          <P>
            <VideoContext.Consumer>
              {(videoState) => (
                <button
                  tw="flex items-center"
                  onClick={() => videoState.togglePlay(videoId)}
                >
                  <PlayIcon tw="w-4 h-4 mr-2" /> <div>Learn more</div>
                </button>
              )}
            </VideoContext.Consumer>
          </P>
        )}
      </div>
    </Container>
  );
};

export default BoardgameItem;