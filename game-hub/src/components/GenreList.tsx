import useGenres, { type Genre } from "@/hooks/usegenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Box,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner size="xl" />;

  if (error) return <Text>And error occured.</Text>;
  return (
    <>
      <Box position="sticky" top={0} zIndex={1} paddingY={5} overflow={"auto"}>
        <List.Root>
          {data.map((genre) => (
            <ListItem key={genre.id}>
              <HStack paddingY="5px" fontSize="lg">
                <Image
                  boxSize="40px"
                  borderRadius={8}
                  src={genre.image_background}
                  loading="lazy"
                />
                <Button
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
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
      </Box>
    </>
  );
};

export default GenreList;
