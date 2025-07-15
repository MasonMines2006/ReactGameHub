import type { GameQuery } from "@/App";
import useData from "./useData";
import type { Genre } from "./usegenres";
import type { Platform } from "./usePlatforms";

interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  const platformIds = gameQuery.defaultSelectedPlatforms?.map((p) => p.id).join(",");

  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: platformIds, // omit if empty
      },
    },
    [gameQuery]
  );
};

export default useGames;
export type { Game };
