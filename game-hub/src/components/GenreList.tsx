import useGenres, { type Genre } from "@/hooks/usegenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner size="xl" />;

  if (error) return <Text>And error occured.</Text>;
  return (
    <>
      <List.Root>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY="5px" fontSize="lg">
              <Image
                boxSize="40px"
                borderRadius={8}
                src={genre.image_background}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant={"ghost"}
              >
                {" "}
                {genre.name}{" "}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
