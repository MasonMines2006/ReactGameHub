import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/usegenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const showAside = useBreakpointValue({
    base: false,
    lg: true,
  });
  // const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([]);
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
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => {
              setSelectedGenre(genre);
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <PlatformSelector onSelectPlatform={setSelectedPlatforms} />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatforms={selectedPlatforms}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
