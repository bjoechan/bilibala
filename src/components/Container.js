import * as React from "react";
import tw from "twin.macro";

export const Container = ({ children, atw }) => (
  <div css={[tw`w-full px-4 py-6 lg:(w-lg m-auto)`, atw]}>{children}</div>
);

export const FullContainer = ({ children, atw }) => (
  <div css={[tw`w-full`, atw]}>{children}</div>
);
