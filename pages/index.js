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
import { Container, Button, Box } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import ProjectData from "../data/projects.json";
export default function Home() {
  const numToDisplay = 3;
  const displayedProjects = ProjectData.slice(-numToDisplay);
  return (
    <>
      <Head>
        <title>The Wang Lab</title>
        <meta
          name="description"
          content="Meet our PI, graduate researchers, undergraduate researchers, and high school researchers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar active="the wang lab" />

      <SwiperLanding />

      <Container maxW="container.xl" p={15}>
        <SmSep line={false} />
        <HeadingWithDesc>Current Projects</HeadingWithDesc>
        {displayedProjects.map((project, index) => {
          return (
            <>
              <ProjectCard
                key={index}
                title={project.title}
                desc={project.desc}
                href={project.href}
                img={project.img}
                link={project.link}
                avatars={project.avatars}
                names={project.names}
              />
              <XSSep line={false} />
            </>
          );
        })}

        <Box textAlign="center">
          <Button colorScheme="blue" mt={4} as="a" href="/projects" shadow="md">
            See all projects
          </Button>
        </Box>
      </Container>
      <SmSep />
      <Footer />
    </>
  );
}
