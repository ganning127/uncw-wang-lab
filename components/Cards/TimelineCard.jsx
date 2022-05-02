import {
  Heading,
  Text,
  Box,
  HStack,
  Avatar,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";

export const TimelineCard = ({ title, date, desc, avatars, names }) => {
  return (
    <Box
      bg="white"
      p={4}
      rounded="md"
      shadow="md"
      textAlign="center"
      //   maxW="750px"
      mb={24}
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

      <Text fontSize="md" mt={3}>
        {desc}
      </Text>
    </Box>
  );
};
