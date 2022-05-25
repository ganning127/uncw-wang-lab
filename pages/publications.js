import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SimpleGrid, Container, Box } from "@chakra-ui/react";
import { PubsCard } from "../components/Cards/PubsCard";
import PubsData from "../data/publications.json";


import { SmSep } from "../components/Separators/SmSep";
import { Banner } from "../components/Headings/Banner";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";

export default function Publications() {
  const keys = Object.keys(PubsData);
  return (
    <>
      <Head>
        <title>Publications - The Wang Lab</title>
        <meta name="description" content="Here are our Publications!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar active="publications" />
      <Banner>Publications</Banner>

      <Container maxW="container.xl" p={15}>
        {keys.map((key, index) => {
          let minCols = TeamData[key].length == 1 ? 1 : 2;

          let maxCols = TeamData[key].length == 1 ? 1 : 3;

          return (
            <Box key={index}>
              <HeadingWithDesc>{key}</HeadingWithDesc>
              <SimpleGrid columns={{ base: minCols, md: maxCols }} spacing={10}>
                {PubsData[key].map((pub, index) => {
                  return (
                    <PubsCard
                      key={index}
                      names={pub.names}
                      avnames={pub.avnames}
                      title={pub.title}
                      publication={pub.publication}
                      resources={pub.resources}
                      publink={pub.publink}
                      avatars={pub.avatars}
                    />
                  );
                })}
              </SimpleGrid>
              <SmSep />
            </Box>
          );
        })}
      </Container>

      <SmSep />
      <Footer />
    </>
  );
}
