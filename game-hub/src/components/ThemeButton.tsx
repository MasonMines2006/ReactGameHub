import { Box, Button, Stack } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();

  const text = useColorModeValue("Light Mode", "Dark Mode");

  return (
    <Stack align="flex-start" gap="4">
      <Button variant="outline" size="sm" onClick={toggleColorMode}>
        {text}
      </Button>
    </Stack>
  );
};

export default ThemeButton;
