import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

interface Game {
  id: number;
  name: string;
  background_image: string;
<<<<<<< HEAD
  parent_platforms: {platform: Platform}[];
  metacritic: number;
=======
>>>>>>> refs/remotes/origin/main
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    // ✅ Proper cleanup function
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
<<<<<<< HEAD
export type { Game, Platform };
=======
export type { Game };
>>>>>>> refs/remotes/origin/main
