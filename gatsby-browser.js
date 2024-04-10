import "./src/styles/global.css";

import React from "react";
import { VideoProvider } from "./src/context/VideoContext";

export const wrapRootElement = ({ element }) => {
  return <VideoProvider>{element}</VideoProvider>;
};
