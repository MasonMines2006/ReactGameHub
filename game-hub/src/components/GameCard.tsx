import React from "react";
import { type Game } from "@/hooks/useGames";
import { Card, Image, Text, Button, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppeddImageUrl from "@/services/image-url";
import GameCardContainer from "./GameCardContainer";

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
          <Image
            src={game.background_image || "https://via.placeholder.com/300x200"}
            alt={game.name}
          />

          <Card.Body gap="2">
            <Card.Title>{game.name}</Card.Title>
            <HStack justifyContent="space-between" alignItems="center">
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              ></PlatformIconList>
              <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
            <Card.Description>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces.
            </Card.Description>
            <Text
              textStyle="2xl"
              fontWeight="medium"
              letterSpacing="tight"
              mt="2"
            >
              $450
            </Text>
          </Card.Body>
          <Card.Footer gap="2">
            <Button variant="solid">Buy now</Button>
            <Button variant="ghost">Add to cart</Button>
          </Card.Footer>
        </Card.Root>
      </GameCardContainer>
    </>
  );
};

export default GameCard;
