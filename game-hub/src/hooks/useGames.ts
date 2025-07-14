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

const useGames = (selectedGenre: Genre | null, selectedPlatforms: Platform[] = []) => {
  const platformIds = selectedPlatforms.map((p) => p.id).join(",");

  return useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: platformIds, // omit if empty
      },
    },
    [selectedGenre?.id, platformIds]
  );
};

export default useGames;
export type { Game };
