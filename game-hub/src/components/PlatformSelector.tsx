import type { GameQuery } from "@/App";
import useAllPlatforms, { type Platform } from "@/hooks/usePlatforms";
import {
  Button,
  Menu,
  Portal,
  HStack,
  Stack,
  useCheckboxGroup,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { HiCog } from "react-icons/hi";

interface Props {
  gameQuery: GameQuery;
  onSelectPlatform: (platforms: Platform[]) => void;
}

const PlatformSelector = ({ gameQuery, onSelectPlatform }: Props) => {
  const { data = [], error } = useAllPlatforms();

  const allSlugs = data.map((p) => p.slug);
  const defaultSlugs =
    gameQuery.defaultSelectedPlatforms?.map((p) => p.slug) ?? allSlugs;

  const { value, isChecked, toggleValue, setValue } = useCheckboxGroup({
    defaultValue: defaultSlugs,
  });

  useEffect(() => {
    if (!data.length) return;
    const selectedPlatforms = data.filter((platform) =>
      value.includes(platform.slug)
    );
    onSelectPlatform(selectedPlatforms);
  }, [value.join(","), data.length]);

  const handleSelectAll = () => setValue(allSlugs);
  const handleClearAll = () => setValue([]);

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <HiCog style={{ marginRight: "6px" }} />
          Platforms
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="200px">
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Platforms</Menu.ItemGroupLabel>
              {data.map(({ name, id, slug }) => (
                <Menu.CheckboxItem
                  key={id}
                  value={slug}
                  checked={isChecked(slug)}
                  onCheckedChange={() => toggleValue(slug)}
                >
                  {name}
                  <Menu.ItemIndicator />
                </Menu.CheckboxItem>
              ))}
            </Menu.ItemGroup>

            <Stack px="3" py="2">
              <HStack justify="space-between">
                <Button size="xs" variant="ghost" onClick={handleSelectAll}>
                  Select All
                </Button>
                <Button size="xs" variant="ghost" onClick={handleClearAll}>
                  Clear All
                </Button>
              </HStack>
            </Stack>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
