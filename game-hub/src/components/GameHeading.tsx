import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platformNames =
    gameQuery.platforms?.map((p) => p.name).join(", ") || "";
  const genreName = gameQuery.genre?.name || "";

  const heading = `${platformNames} ${genreName} Games`.trim();

  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
