import {
  Grid,
  GridItem,
  HStack,
  Show,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/usegenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platforms: Platform[] | [];
  defaultSelectedPlatforms?: Platform[];
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const handleGameQuery = (query: GameQuery) => {
    setGameQuery(query);
  };
  const showAside = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show when={showAside}>
        <GridItem area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => {
              handleGameQuery({ ...gameQuery, genre });
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <HStack paddingLeft={2}>
          <PlatformSelector
            gameQuery={gameQuery}
            onSelectPlatform={(platforms) => {
              handleGameQuery({ ...gameQuery, platforms });
            }}
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
