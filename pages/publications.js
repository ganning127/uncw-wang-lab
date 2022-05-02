import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SimpleGrid, Container } from "@chakra-ui/react";
import { PubsCard } from "../components/Cards/PubsCard";

import { SmSep } from "../components/Separators/SmSep";
import { Banner } from "../components/Headings/Banner";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export default function Publications() {
  return (
    <>
      <Head>
        <title>Publications - Wang Lab</title>
        <meta name="description" content="Here are the members of our team!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar active="" />
      <Banner>Publications</Banner>

      <Container maxW="container.xl" p={15}>
        <SimpleGrid columns={{ base: 1, md: 1, md: 1 }}>
          <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
        </SimpleGrid>

        <Text fontWeight="normal" color="gray.400" fontSize="lg">
          Pre - The Wang Lab
        </Text>

        <SimpleGrid columns={{ base: 1, md: 1, md: 1 }}>
          <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
        </SimpleGrid>

      </Container>

      <SmSep />
      <Footer />
    </>
  );
}
