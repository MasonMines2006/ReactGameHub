import {
  Card,
  Skeleton,
  CardBody,
  SkeletonText,
  Text,
  Separator,
  EmptyState,
  List,
  VStack,
} from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import { BsFileBreak } from "react-icons/bs";
import { HiColorSwatch } from "react-icons/hi";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card.Root>
        <Skeleton height="300px" />
        <CardBody>
          <EmptyState.Root>
            <EmptyState.Content>
              <EmptyState.Indicator>
                <HiColorSwatch />
              </EmptyState.Indicator>
              <VStack textAlign="center">
                <EmptyState.Title>No results found</EmptyState.Title>
                <EmptyState.Description>
                  Try adjusting your search
                </EmptyState.Description>
              </VStack>
              <List.Root variant="marker">
                <List.Item>Try removing filters</List.Item>
                <List.Item>Try different keywords</List.Item>
              </List.Root>
            </EmptyState.Content>
          </EmptyState.Root>
        </CardBody>
      </Card.Root>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
