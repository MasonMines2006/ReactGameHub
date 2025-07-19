import React from "react";
import { type Game } from "@/hooks/useGames";
import { Card, Image, Text, Button, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppeddImageUrl from "@/services/image-url";
import GameCardContainer from "./GameCardContainer";
import GameDescription from "./GameDescription";
import CardScrollWheel from "./CardScrollWheel";

interface Props {
  game: Game;
  children?: React.ReactNode;
}

const GameCard = ({ game }: Props) => {
  if (!game) return null;
  return (
    <>
      <GameCardContainer>
        <Card.Root>
          <CardScrollWheel game={game} />

          <Card.Body gap="2">
            <HStack justifyContent="space-between" alignItems="center">
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              ></PlatformIconList>
              <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
            <HStack justifyContent="space-between" alignItems="center">
              <Card.Title>
                <Text
                  textStyle="2xl"
                  fontWeight="medium"
                  letterSpacing="tight"
                  mt="2"
                >
                  {game.name}
                </Text>
              </Card.Title>
              <Card.Description>
                <GameDescription game={game} />
              </Card.Description>
            </HStack>
          </Card.Body>
          <Card.Footer gap="2">
            <Button variant="solid">Buy now</Button>
          </Card.Footer>
        </Card.Root>
      </GameCardContainer>
    </>
  );
};

export default GameCard;
