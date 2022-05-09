import {
  Heading,
  Img,
  Avatar,
  Text,
  Link,
  Flex,
  Spacer,
  HStack,
  Box,
  SimpleGrid,
  Tooltip,
} from "@chakra-ui/react";

export const ProjectCard = ({
  title,
  img,
  desc,
  link,
  href,
  avatars,
  names,
}) => {
  console.log(href);
  return (
    <Box rounded="lg" bg="white" shadow="md" p={15} textAlign="center">
      <Heading fontSize="2xl" textAlign="center">
        {title}
      </Heading>
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
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        mt={5}
        alignItems="center"
        justifyContent="center"
      >
        <Box textAlign="center">
          <Img src={img} maxH="250px" mx="auto" />
        </Box>
        <Box textAlign="left">
          <Text>{desc}</Text>
        </Box>
      </SimpleGrid>

      <Flex>
        <Spacer />
        <Link
          color="blue.300"
          href={href}
          isExternal={true}
          _hover={{ color: "blue.500" }}
        >
          {link}
        </Link>
      </Flex>
    </Box>
  );
};
