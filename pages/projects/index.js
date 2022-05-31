import Head from "next/head";
import Image from "next/image";
import { NavBar } from "../../components/NavBar";
import { SwiperLanding } from "../../components/Landings/SwiperLanding";
import { HeadingWithDesc } from "../../components/Headings/HeadingWithDesc";
import { SmSep } from "../../components/Separators/SmSep";
import { MedSep } from "../../components/Separators/MedSep";
import { XSSep } from "../../components/Separators/XSSep";
import { ProjectCard } from "../../components/Cards/ProjectCard";
import { Container, Button, Box, SimpleGrid } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import Categories from "../../data/projects.json";
import { CategoryCard } from "../../components/Cards/CategoryCard";
import { Banner } from "../../components/Headings/Banner";
import { SqProjectCard } from "../../components/Cards/SqProjectCard";
export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - The Wang Lab</title>
        <meta name="description" content="Here are our projects!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar active="projects" />
      <Banner>Projects</Banner>

      {/*      <Container maxW="container.xl" p={15}>
        {HomeKeys.map((key, index) => {
          return (
            <Box key={index}>
                <HeadingWithDesc>{key}</HeadingWithDesc>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {Categories[key].map((category, index) => {
                  return (
                    <CategoryCard
                    key={index}
                    title={category.name}
                    href={"/projects/" + category.name}
                    avatars={category.avatars}
                    names={category.names}
                  />
                  );
                })}
                </SimpleGrid>
                <SmSep />
            </Box>
          );
          })}
      </Container> */}

      <Container maxW="container.xl" p={15}>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {Categories.map((category, index) => {
            return (
              <>
                <CategoryCard
                  key={index}
                  title={category.title}
                  desc={category.about}
                  href={"/projects/" + category.title}
                  avatars={category.avimages}
                  names={category.avnames}
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
