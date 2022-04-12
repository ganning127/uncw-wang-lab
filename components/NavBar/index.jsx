import { Flex, Box, Text, Link, Container, Center } from "@chakra-ui/react";

const content = [
  {
    title: "Team",
    href: "/team",
  },
  {
    title: "Publications",
    href: "/publications",
  },
  {
    title: "The Wang Lab",
    href: "/",
  },

  {
    title: "News",
    href: "/news",
  },
  {
    title: "Awards",
    href: "/awards",
  },
];
export const NavBar = ({ active }) => {
  return (
    <Center
      h="60px"
      backgroundImage="url('/banner_1.png')"
      backgroundPosition="-953% 60%"
      backgroundRepeat="repeat"
      sx={{ position: "sticky", top: "0" }}
      zIndex={1000}
    >
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          {content.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                color={
                  active === item.title.toLowerCase() ? "white" : "gray.400"
                }
                fontSize="xl"
                fontWeight={active === item.title.toLowerCase() ? 700 : 300}
                _hover={{ color: "white" }}
                transition="all .2s"
              >
                {item.title}
              </Link>
            );
          })}
        </Flex>
      </Container>
    </Center>
  );
};
