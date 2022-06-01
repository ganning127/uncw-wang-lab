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

export const CategoryCard = ({ title, href, names, avatars }) => {
  return (
    <Box
      rounded="lg"
      bg="white"
      shadow="md"
      p={8}
      as="a"
      href={href}
      maxW="400px"
      _hover={{
        bg: "gray.100",
      }}
      transition="all 0.2s"
      mx="auto"
    >
      <VStack spacing={2}>
        <Heading textAlign="center" fontSize="2xl">
          {title}
        </Heading>
        <HStack spacing={4}>
          {avatars &&
            avatars.map((avatar, i) => {
              return (
                <Tooltip label={names[i]} key={i} placement="auto-end">
                  <Avatar name={names[i]} src={avatar} size="sm"  icon={<Img src="/temp_team_avatar.png" rounded="full" />}/>
                </Tooltip>
              );
            })}
        </HStack>
        {/* <Img src={img} maxH="250px" mx="auto" rounded="md" /> */}

        {/* remove the text on mobile, make sure that line still truncates */}
      </VStack>
    </Box>
  );
};
