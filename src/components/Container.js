import * as React from "react";
import "twin.macro";

export const Container = ({ children }) => {
  return <div tw="w-full px-2 py-4 lg:(w-lg)">{children}</div>;
};

export const FullContainer = ({ children }) => {
  return <div tw="w-full">{children}</div>;
};
