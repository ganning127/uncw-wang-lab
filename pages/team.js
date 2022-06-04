import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SimpleGrid, Container, Box, Button } from "@chakra-ui/react";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";
import { TeamCard } from "../components/Cards/TeamCard";
import { SmSep } from "../components/Separators/SmSep";
import { Banner } from "../components/Headings/Banner";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import TeamData from "../data/team.json";
export default function Team() {
  const keys = Object.keys(TeamData);
  return (
    <>
      <Head>
        <title>Team - The Wang Lab</title>
        <meta
          name="description"
          content="Meet our PI, graduate researchers, undergraduate researchers, and high school researchers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar active="team" />
      <Banner>Team</Banner>

      <Container maxW="container.xl" p={15}>
        {keys.map((key, index) => {
          let minCols = TeamData[key].length == 1 ? 1 : 2;

          let maxCols = TeamData[key].length == 1 ? 1 : 3;

          return (
            <Box key={index}>
              <HeadingWithDesc>{key}</HeadingWithDesc>
              <SimpleGrid columns={{ base: minCols, md: maxCols }} spacing={10}>
                {TeamData[key].map((person, index) => {
                  return (
                    <TeamCard
                      key={index}
                      name={person.name}
                      title={person.title}
                      image={person.image}
                      about={person.about}
                      email={person.email}
                      phone={person.phone}
                      resume={person.resume}
                    />
                  );
                })}
              </SimpleGrid>
              <SmSep />
            </Box>
          );
        })}
      </Container>

      <Box textAlign="center">
        <Button
          colorScheme="blue"
          mt={8}
          as="a"
          href="/alumni"
          shadow="md"
          px={24}
          py={8}
          fontSize="2xl"
        >
          Alumni
        </Button>
      </Box>

      <SmSep />
      <Footer />
    </>
  );
}
