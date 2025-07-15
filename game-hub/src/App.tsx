import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/usegenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platforms: Platform[] | [];
  defaultSelectedPlatforms?: Platform[];
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const defaultPlatform: Platform[] = [
    {
      id: 4,
      name: "PC",
      slug: "pc",
    },
  ];
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
        <Navbar />
      </GridItem>
      <Show when={showAside}>
        <GridItem area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <PlatformSelector
          onSelectPlatform={(platforms: Platform[]) =>
            setGameQuery({ ...gameQuery, platforms })
          }
          defaultSelectedPlatforms={defaultPlatform}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
