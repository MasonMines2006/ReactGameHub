import useGenres from "@/hooks/usegenres";
import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";

const GenreList = () => {
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
              <Text> {genre.name} </Text>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
