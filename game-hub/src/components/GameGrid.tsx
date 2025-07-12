import useGames from "@/hooks/useGames";
import GameCard from "@/components/GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "@/components/GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  if (error) return <p>{error}</p>;
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <SimpleGrid columns={[1, 2, 3]} gap="20px" padding="10px">
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
