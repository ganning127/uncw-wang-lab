import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SimpleGrid, Container } from "@chakra-ui/react";
import { AlumniCard } from "../components/Cards/AlumniCard";
import { SmSep } from "../components/Separators/SmSep";
import { Banner } from "../components/Headings/Banner";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import AlumniData from "../data/alumni.json";
export default function Alumni() {
  const keys = Object.keys(AlumniData);
  return (
    <>
      <Head>
        <title>Alumni - The Wang Lab</title>
        <meta
          name="description"
          content="Meet our former researchers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <Banner>Alumni</Banner>

      <Container maxW="container.xl" p={15}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {keys.map((alumni, index) => {
            return (
              <>
                <AlumniCard
                  key={index}
                  name={alumni.name}
                  year={alumni.year}
                  about={alumni.about}
                  image={alumni.image}
                />
              </>
            );
          })}
        </SimpleGrid>
      </Container>

      <SmSep />
      <Footer />
    </>
  );
}