import useGames from "@/hooks/useGames";
import GameCard from "@/components/GameCard";
import { SimpleGrid } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error } = useGames();

  if (error) return <p>{error}</p>;
  if (!games.length) return <p>Loading games...</p>;

  return (
    <SimpleGrid columns={[1, 2, 3, 5]} gap="20px" padding="10px">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
