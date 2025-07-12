import React from "react";
import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card.Root>
        <Skeleton height="300px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card.Root>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
