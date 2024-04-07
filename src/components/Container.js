import * as React from "react";
import "twin.macro";

export const Container = ({ children }) => {
  return <div tw="w-full md:(w-lg)">{children}</div>;
};

export const FullContainer = ({ children }) => {
  return <div tw="w-full">{children}</div>;
};

export const Section = ({ children }) => {
  return <div tw="py-8">{children}</div>;
};
