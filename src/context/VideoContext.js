import React, { useState, useEffect } from "react";
import "twin.macro";

import CloseIcon from "../images/assets/close-icon.inline.svg";

const defaultState = {
  playNow: false,
  videoId: "",
  togglePlay: () => {},
};

const VideoContext = React.createContext(defaultState);

const VideoProvider = ({ children }) => {
  const [state, setState] = useState({
    playNow: false,
    videoId: "",
  });

  const togglePlay = (videoId) => {
    setState((prevState) => ({
      playNow: !prevState.playNow,
      videoId,
    }));
  };

  useEffect(() => {
    // if (state.playNow) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "unset";
    // }
  }, [state.playNow]);
  return (
    <VideoContext.Provider
      value={{
        ...state,
        togglePlay: togglePlay,
      }}
    >
      {children}
      {state.playNow && (
        <button
          tw="fixed inset-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 z-40"
          onClick={() => togglePlay("")}
        >
          <iframe
            tw="aspect-video w-4/5"
            src={`https://www.youtube.com/embed/${state.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <CloseIcon tw="absolute top-4 right-4 w-8 h-8 text-white" />
        </button>
      )}
    </VideoContext.Provider>
  );
};

export default VideoContext;

export { VideoProvider };
