// import * as React from "react";
import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.div(({ tw: additionalTw }) => [
  tw`w-full px-4 py-6 lg:(w-lg m-auto)`,
  additionalTw,
]);

export const FullContainer = styled.div(({ tw: additionalTw }) => [
  tw`w-full`,
  additionalTw,
]);
