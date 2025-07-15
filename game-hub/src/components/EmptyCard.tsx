import {
  Card,
  Skeleton,
  CardBody,
  SkeletonText,
  Text,
  Separator,
} from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import { BsFileBreak } from "react-icons/bs";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card.Root>
        <Skeleton height="300px" />
        <CardBody>
          <Text>Games not found! Try modifying your search.</Text>
          <Separator />
          <SkeletonText noOfLines={3} />
        </CardBody>
      </Card.Root>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
