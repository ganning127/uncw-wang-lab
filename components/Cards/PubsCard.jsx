import {
  Text,
  HStack,
  Flex,
  VStack,
  Img,
  Link,
  Avatar,
  Button,
  Heading,
  Box,
  Spacer,
} from "@chakra-ui/react";

export const PubsCard = ({ names, title, resources, publink, images }) => {
  return (

    <Box maxW="700px" mx="auto" rounded="lg" bg="white" shadow="md" p={15}>
      <Text>
        <Text as="span" fontWeight="normal" color="gray.800" fontSize="lg">
          {names + ". "}
        </Text>
        <Text as="span" fontWeight="bold" color="gray.800" fontSize="lg">
          {title + ". "}
        </Text>
        <Text as="span" fontWeight="normal" color="gray.800" fontSize="lg">
          {resources + ". "}
        </Text>
      </Text>

      <Flex align="center">
        <Button
          bg="#5BBEE5"
          color="white"
          _hover={{
            bg: "#40b7e6",
          }}
          as="a"
          href={publink}
          isExternal
        >
          PubMed
        </Button>

        <Spacer />
        <Box d="flex" alignItems="center">
          <Text
            textAlign="center"
            fontWeight="bold"
            color="gray.800"
            fontSize="lg"
          >
            Team Authors:
          </Text>
          <HStack spacing={2} ml={4}>
            {images.map((image, i) => {
              return (
                <Avatar
                  src={image}
                  height="50px"
                  width="50px"
                  name={names}
                  key={i}
                />
              );
            })}
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};
