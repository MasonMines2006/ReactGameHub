import useData from "./useData";
import type { Game } from "./useGames";

export interface Trailer {
    id: number;
    name: string;
    preview: string;
    data: object;
}

interface Props {
    game: Game
}

const useTrailer = ({game}: Props) => {
    return useData<Trailer>(`games/${game.id}/movies`);
}

export default useTrailer;