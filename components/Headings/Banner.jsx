import { Box, Center, Heading } from "@chakra-ui/react";

export const Banner = ({ children }) => {
  return (
    <Center
      bg="#263864"
      h="150px"
      backgroundImage="url('/banner_lg.png')"
      backgroundPosition="0% 115%"
      backgroundRepeat="repeat"
    >
      <Heading color="white" fontWeight={700} size="3xl">
        {children}
      </Heading>
    </Center>
  );
};
