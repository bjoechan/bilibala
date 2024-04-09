import * as React from "react";
import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div(({ tw: additionalTw }) => [
  tw`w-full px-2 py-4 lg:(w-lg m-auto)`,
  additionalTw,
]);
export const FullContainer = ({ children }) => {
  return <div tw="w-full">{children}</div>;
};
