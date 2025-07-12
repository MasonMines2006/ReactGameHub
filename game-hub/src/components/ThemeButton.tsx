import { Stack, Switch, Icon } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();

  const text = useColorModeValue("Light Mode", "Dark Mode");

  return (
    <Stack align="flex-start" gap="4">
      <Switch.Root
        colorPalette="blue"
        size="lg"
        onCheckedChange={toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
          <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
            <Icon as={FaSun} color="yellow.400" />
          </Switch.Indicator>
        </Switch.Control>
        <Switch.Label>{text}</Switch.Label>
      </Switch.Root>
    </Stack>
  );
};

export default ThemeButton;
