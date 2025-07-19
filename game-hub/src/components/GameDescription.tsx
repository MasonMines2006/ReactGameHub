import useDescription from "@/hooks/useDescription";
import type { Game } from "@/hooks/useGames";
import {
  Text,
  Spinner,
  Box,
  Button,
  CloseButton,
  Dialog,
  Portal,
} from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameDescription = ({ game }: Props) => {
  const { data, error, isLoading } = useDescription({ game });

  if (isLoading) return <Spinner />;
  if (error) return <Text color="red.500">Failed to load description.</Text>;
  if (!data || !Array.isArray(data)) return null;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="sm">
          Read Description
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{game.name} - Description</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              {data.map((description) => (
                <div
                  key={description.id}
                  dangerouslySetInnerHTML={{
                    __html: description.description,
                  }}
                />
              ))}
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Save</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default GameDescription;
