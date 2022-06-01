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
      maxW="400px"
      _hover={{
        bg: "gray.100",
      }}
      transition="all 0.2s"
      mx="auto"
      target="_blank"
    >
      <VStack spacing={4}>
        <Heading fontSize="xl" textAlign="center">
          {title}
        </Heading>
        <HStack spacing={4}>
          {avatars &&
            avatars.map((avatar, i) => {
              return (
                <Tooltip label={names[i]} key={i} placement="auto-end">
                  <Avatar name={names[i]} src={avatar} size="sm" icon={<Img src="/temp_team_avatar.png" rounded="full" />} />
                </Tooltip>
              );
            })}
        </HStack>
        <Img src={img} maxH="250px" mx="auto" rounded="md" />

        <Text noOfLines={5} display={{ base: "none", md: "-webkit-box" }}>
          {desc}
        </Text>
        {/* remove the text on mobile, make sure that line still truncates */}
      </VStack>
    </Box>
  );
};

// 316194567364715|6098f37e084ccb9d4b4fb0f61d51a509
