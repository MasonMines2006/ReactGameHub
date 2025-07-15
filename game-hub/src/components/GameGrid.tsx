import GameCard from "@/components/GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "@/components/GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genre } from "@/hooks/usegenres";
import usePlatforms, { type Platform } from "@/hooks/usePlatforms";
import useGames from "@/hooks/useGames";
import EmptyCard from "./EmptyCard";
import type { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);

  if (error) return <p>{error}</p>;
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (!games) return <GameCardContainer>No Games Found</GameCardContainer>;

  return (
    <SimpleGrid columns={[1, 2, 3]} gap="20px" padding="10px">
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games.length === 0 && (
        <GameCardContainer>
          <EmptyCard />
        </GameCardContainer>
      )}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
