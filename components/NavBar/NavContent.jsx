import {
  Box,
  Center,
  HStack,
  Stack,
  Img,
  useDisclosure,
  Flex,
  Text,
  Link,
  Heading,
  Spacer,
  Container,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { NavLink } from "./NavLink";
import { NavList } from "./NavList";
import { NavListItem } from "./NavListItem";

const links = [
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

const MobileNavContent = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box {...props}>
      <Flex>
        <Box p="2" d="flex" alignItems="center" as="a" href="/">
          <Img src="/logo_sq.png" h="16" display="inline" mr="3" />
          <Text
            as="h1"
            fontSize="2xl"
            fontWeight="extrabold"
            maxW="48rem"
            color="white"
            display="inline"
          >
            Wang Lab
          </Text>
        </Box>

        <Spacer />
        <Box
          as="button"
          py="2"
          pr={4}
          fontSize="2xl"
          onClick={onToggle}
          color="white"
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </Box>
      </Flex>

      <NavList
        pos="absolute"
        insetX="0"
        bg="#263864"
        top="64px"
        animate={isOpen ? "enter" : "exit"}
      >
        <Stack spacing="0">
          {links.map((link, index) => (
            <NavListItem key={index}>
              <NavLink.Mobile href={link.href} color="white">
                {link.title}
              </NavLink.Mobile>
            </NavListItem>
          ))}
          <NavListItem
            style={{
              flex: "1",
            }}
          ></NavListItem>
        </Stack>
      </NavList>
    </Box>
  );
};

const DesktopNavContent = (props) => {
  return (
    <Center h="80px" {...props}>
      <Container maxW="container.xl" position="relative">
        <Flex align="center" justify="space-between">
          {links.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                color={
                  props.active === item.title.toLowerCase()
                    ? "white"
                    : "gray.400"
                }
                fontSize="xl"
                fontWeight={
                  props.active === item.title.toLowerCase() ? 700 : 300
                }
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

export const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
};
