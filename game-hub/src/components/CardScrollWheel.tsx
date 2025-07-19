import type { Game } from "@/hooks/useGames";
import useTrailer from "@/hooks/useTrailer";
import { Box, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const CardScrollWheel = ({ game }: Props) => {
  const { data, error, isLoading } = useTrailer({ game });
  console.log(data, error, isLoading);
  return (
    <Box>
      <Image
        src={
          game.background_image ||
          "game-hub/src/assets/no-image-placeholder-6f3882e0.webp"
        }
        alt={game.name}
        loading="lazy"
      />
    </Box>
  );
};

export default CardScrollWheel;
