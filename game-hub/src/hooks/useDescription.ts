import useData from "./useData";
import type { Game } from "./useGames";

interface Description {
  id: number;
  slug: string;
  name: string;
  description: string;
}

interface Props {
    game: Game;
}

const useDescription = ({game}: Props) => {
    const {id} = game;

    const data= useData<Description>(`/games/${id}`);
    return data;
};

export default useDescription;
export type { Description };
