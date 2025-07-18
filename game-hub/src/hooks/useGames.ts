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
    let platformIds = gameQuery.platforms?.map((p) => p.id).join(",");
    if ( platformIds === "") {
        platformIds = "1"
    } 
    console.log("Platform IDs:", platformIds);

    return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: platformIds, // omit if empty
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );
};

export default useGames;
export type { Game };
