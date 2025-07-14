import useAllPlatforms, { type Platform } from "@/hooks/usePlatforms";
import {
  Button,
  Menu,
  Portal,
  useCheckboxGroup,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { HiCog } from "react-icons/hi";

interface Props {
  onSelectPlatform: (checkedPlatforms: Platform[]) => void;
  defaultSelectedPlatforms?: Platform[];
}

const PlatformSelector = ({
  onSelectPlatform,
  defaultSelectedPlatforms = [],
}: Props) => {
  const { data = [], error } = useAllPlatforms();

  const allSlugs = data.map((platform) => platform.slug);
  const defaultSlugs = defaultSelectedPlatforms.map((p) => p.slug);

  const group = useCheckboxGroup({
    defaultValue: defaultSlugs.length > 0 ? defaultSlugs : allSlugs,
  });

  useEffect(() => {
    if (!data.length) return;

    const selectedPlatforms = data.filter((platform) =>
      group.value.includes(platform.slug)
    );

    onSelectPlatform(selectedPlatforms);
  }, [group.value.join(","), data.length]); // stable deps

  const togglePlatform = (slug: string) => {
    group.toggleValue(slug);
  };

  const handleSelectAll = () => {
    console.log("selectedAll");
    allSlugs.forEach((slug) => {
      if (!group.isChecked(slug)) group.toggleValue(slug);
    });
  };

  const handleClearAll = () => {
    console.log("clearedAll");
    allSlugs.forEach((slug) => {
      if (group.isChecked(slug)) group.toggleValue(slug);
    });
  };

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
                  checked={group.isChecked(slug)}
                  onCheckedChange={() => togglePlatform(slug)}
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
