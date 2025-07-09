import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Theme } from "@chakra-ui/react";
import { useState } from "react";

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
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show when={showAside}>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
