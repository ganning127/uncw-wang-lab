import { Box, Text, Link, Avatar, VStack, Img } from "@chakra-ui/react";

export const TeamCard = ({ name, title, email, resume, about, image }) => {
  return (
    <Box mx="auto" textAlign="center" maxW="350px">
      <VStack spacing={0.3}>
        <Avatar
          name={image ? name : ""}
          src={image}
          height={{ base: "100px", md: "200px" }}
          width={{ base: "100px", md: "200px" }}
          mb="3"
          icon={<Img src="/temp_team_avatar.png" rounded="full" />}
        />
        <Text fontWeight={700} color="gray.800" fontSize="xl">
          {name}
        </Text>
        <Text fontWeight="normal" color="gray.400" fontSize="lg">
          {title}
        </Text>
        {about && (
          <Text fontWeight="normal" color="gray.400" fontSize="lg">
            {/* <chakra.span fontWeight={700}>FOCUS: </chakra.span> */}
            {about}
          </Text>
        )}

        <Text>
          {email && (
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
          )}

          {resume && (
            <>
              <Text as="span" mx="2" color="gray.400" fontSize="2xl">
                |
              </Text>

              <Link href={resume} _hover={{}} isExternal>
                <Text
                  fontWeight="normal"
                  color="blue.300"
                  _hover={{ color: "blue.400" }}
                  fontSize="lg"
                  as="span"
                >
                  LinkedIn
                </Text>
              </Link>
            </>
          )}
        </Text>
      </VStack>
    </Box>
  );
};
