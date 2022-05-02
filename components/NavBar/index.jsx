import { Flex, Box, Text, Link, Container, Center } from "@chakra-ui/react";
import { NavContent } from "./NavContent";

export const NavBar = ({ active }) => {
  return (
    <Box
      // h="80px"
      backgroundImage="url('/banner_1.png')"
      backgroundPosition="-953% 60%"
      backgroundRepeat="repeat"
      sx={{
        position: "sticky",
        top: "0",
      }}
      zIndex={1000000}
    >
      <NavContent.Desktop
        display={{
          base: "none",
          md: "flex",
        }}
        active={active}
      />
      <NavContent.Mobile
        display={{
          base: "block",
          md: "none",
        }}
        active={active}
      />
    </Box>
  );
};
