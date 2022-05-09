import {
  Heading,
  Img,
  Avatar,
  Text,
  Link,
  Flex,
  Spacer,
  HStack,
  VStack,
  Box,
  SimpleGrid,
  Tooltip,
} from "@chakra-ui/react";

export const SqProjectCard = ({
  title,
  img,
  desc,
  link,
  href,
  avatars,
  names,
}) => {
  return (
    <Box
      rounded="lg"
      bg="white"
      shadow="md"
      p={8}
      as="a"
      href={href}
      isExternal={true}
      maxW="400px"
      _hover={{
        bg: "gray.100",
      }}
      transition="all 0.2s"
      mx="auto"
    >
      <VStack spacing={4}>
        <Heading fontSize="xl">{title}</Heading>
          {avatars &&
            avatars.map((avatar, i) => {
              return (
                <Tooltip label={names[i]} key={i} placement="auto-end">
                  <Avatar name={names[i]} src={avatar} size="sm" />
                </Tooltip>
              );
            })}

        <Img src={img} maxH="250px" mx="auto" rounded="md" />

        <Text noOfLines={5}>{desc}</Text>
      </VStack>
    </Box>
  );
};
