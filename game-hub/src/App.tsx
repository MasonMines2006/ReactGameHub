import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Theme } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameCard from "./components/GameCard";
import GenreList from "./components/GenreList";

function App() {
  const showAside = useBreakpointValue({
    base: false,
    lg: true,
  });
  const [theme, setTheme] = useState<"dark" | "light">("dark");
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
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
