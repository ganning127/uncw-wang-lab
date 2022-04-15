import { Box, Text, Link, Avatar, VStack, chakra } from "@chakra-ui/react";

export const TeamCard = ({ name, title, email, resume, about, image }) => {
  return (
    <Box mx="auto" textAlign="center" maxW="350px">
      <VStack spacing={0.3}>
        <Avatar
          name={name}
          src={image}
          height={{ base: "100px", md: "200px" }}
          width={{ base: "100px", md: "200px" }}
          mb="3"
        />
        <Text fontWeight={700} color="gray.800" fontSize="xl">
          {name}
        </Text>
        <Text fontWeight="normal" color="gray.400" fontSize="lg">
          {title}
        </Text>
        <Text fontWeight="normal" color="gray.400" fontSize="lg">
          <chakra.span fontWeight={700}>FOCUS: </chakra.span>
          {about}
        </Text>

        <Text>
          <Link href={`mailto:${email}`} _hover={{}}>
            <Text
              fontWeight="normal"
              color="blue.300"
              _hover={{ color: "blue.400" }}
              fontSize="lg"
              as="span"
            >
              Email
            </Text>
          </Link>

          <Text as="span" mx="2" color="gray.400" fontSize="2xl">
            |
          </Text>

          <Link href={resume} _hover={{}}>
            <Text
              fontWeight="normal"
              color="blue.300"
              _hover={{ color: "blue.400" }}
              fontSize="lg"
              as="span"
            >
              Resume
            </Text>
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};
