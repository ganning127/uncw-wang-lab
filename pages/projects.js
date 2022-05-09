import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";
import { SwiperLanding } from "../components/Landings/SwiperLanding";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";
import { SmSep } from "../components/Separators/SmSep";
import { MedSep } from "../components/Separators/MedSep";
import { XSSep } from "../components/Separators/XSSep";
import { ProjectCard } from "../components/Cards/ProjectCard";
import { Container, Button, Box, SimpleGrid } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import ProjectData from "../data/projects.json";
import { Banner } from "../components/Headings/Banner";
import { SqProjectCard } from "../components/Cards/SqProjectCard";
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

      <Container maxW="container.xl" p={15}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {ProjectData.map((project, index) => {
            return (
              <>
                <SqProjectCard
                  key={index}
                  title={project.title}
                  desc={project.desc}
                  href={project.href}
                  img={project.img}
                  link={project.link}
                  avatars={project.avatars}
                  names={project.names}
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
