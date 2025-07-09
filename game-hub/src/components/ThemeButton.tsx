import { Button } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Button variant="outline" onClick={toggleColorMode}>
      Toggle Mode
    </Button>
  );
};

export default ThemeButton;
