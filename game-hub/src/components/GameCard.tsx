import React from "react";
import { type Game } from "@/hooks/useGames";
<<<<<<< HEAD
import { Card, Image, Text, Button, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
=======
import { Card, Image, Text, Button } from "@chakra-ui/react";
>>>>>>> refs/remotes/origin/main

interface Props {
  game: Game;
  children?: React.ReactNode;
}

const GameCard = ({ game }: Props) => {
  if (!game) return null;
  return (
    <>
      <Card.Root maxW="sm" overflow="hidden">
        <Image
          src={game.background_image || "https://via.placeholder.com/300x200"}
          alt={game.name}
        />

        <Card.Body gap="2" borderRadius={20}>
          <Card.Title>{game.name}</Card.Title>
<<<<<<< HEAD
          <HStack justifyContent="space-between" alignItems="center">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
=======
>>>>>>> refs/remotes/origin/main
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
    </>
  );
};

export default GameCard;
