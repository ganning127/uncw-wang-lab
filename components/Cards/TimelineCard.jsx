import {
  Heading,
  Text,
  Box,
  HStack,
  Avatar,
  Flex,
  Spacer,
  Link,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";

export const TimelineCard = ({ title, date, desc, avatars, names, href }) => {
  return (
    <Box
      bg="white"
      p={15}
      rounded="lg"
      shadow="md"
      textAlign="center"
      // maxW="750px"
    >
      <Heading fontSize="2xl" fontWeight="bold">
        {title}
      </Heading>

      <Box>
        <HStack justifyContent="center" mt={3} spacing={6}>
          {avatars &&
            avatars.map((avatar, i) => {
              return (
                <Tooltip label={names[i]} key={i} placement="auto-end">
                  <Avatar name={names[i]} src={avatar} size="md" />
                </Tooltip>
              );
            })}
        </HStack>
      </Box>

      <Text fontSize="md" mt={3} display={{ base: "none", md: "block" }}>
        {desc}
      </Text>

      {href && (
        <Flex mt={2.5}>
          <Spacer />
          <Link
            color="blue.300"
            href={href}
            isExternal={true}
            _hover={{ color: "blue.500" }}
          >
            Read More
          </Link>
        </Flex>
      )}
    </Box>
  );
};
