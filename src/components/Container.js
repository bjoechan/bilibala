import * as React from "react";
import tw from "twin.macro";

export const Container = ({ children, additionalTw }) => (
  <div css={[tw`w-full px-4 py-6 lg:(w-lg m-auto)`, additionalTw]}>
    {children}
  </div>
);

export const FullContainer = ({ children, additionalTw }) => (
  <div css={[tw`w-full`, additionalTw]}>{children}</div>
);
