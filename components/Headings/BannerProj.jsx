import { Box, Text, Center, Heading } from "@chakra-ui/react";

export const BannerProj = ({ textDesc, children }) => {
  return (
    <Center
      bg="#263864"
      h="150px"
      backgroundImage="url('/banner_lg.png')"
      backgroundPosition="0% 115%"
      backgroundRepeat="repeat"
    >
      <Box textAlign="center">
        <Heading
          color="white"
          fontWeight={700}
          fontSize={{ base: "xl", lg: "6xl" }}
        >
          {children}
        </Heading>
      </Box>
    </Center>
  );
};
