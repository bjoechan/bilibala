import * as React from "react";
import "twin.macro";

export const Container = ({ children }) => {
  return <div tw="w-full py-4 px-4">{children}</div>;
};
