import { Box, Text, Avatar, VStack, Img } from "@chakra-ui/react";

export const AlumniCard = ({ name, year, about, image }) => {
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
        <Text fontWeight="normal" color="blue.300" fontSize="lg">
          {"TLW " + year}
        </Text>
        {about && (
          <Text fontWeight="normal" color="gray.400" fontSize="lg">
            {about}
          </Text>
        )}
      </VStack>
    </Box>
  );
};