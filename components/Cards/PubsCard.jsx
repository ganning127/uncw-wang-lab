import { Text, HStack, VStack, Img, Link } from "@chakra-ui/react";

export const PubsCard = ({ names, title, resources, publink, images }) => {
  return (
    <VStack>
      <HStack>
        <Text fontWeight="normal" color="gray.800" fontSize="lg">
          {names}
        </Text>
        <Text fontWeight="bold" color="gray.800" fontSize="lg">
          {title}
        </Text>
        <Text fontWeight="normal" color="gray.800" fontSize="lg">
          {resources}
        </Text>
      </HStack>

      <HStack>
        <Link href={publink} _hover={{ color: "blue.400" }} isExternal>
          {/* <Icon src={'/PubMedButton1.png'} /> */}
        </Link>
        <Text
          textAlign="center"
          fontWeight="bold"
          color="gray.800"
          fontSize="lg"
        >
          Team Authors:{" "}
        </Text>
        <Img src={images} height="50px" width="50px" />
      </HStack>
    </VStack>
  );
};
