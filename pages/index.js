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
import News from "../data/news.json";
import { TimelineCard } from "../components/Cards/TimelineCard";

export default function Home() {
  const numToDisplay = 3;

  let displayedProjects = [...ProjectData].reverse();
  displayedProjects = displayedProjects.slice(0, numToDisplay);

  let displayedNews = [...News].reverse();
  displayedNews = displayedNews.slice(0, numToDisplay);

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
        <Box>
          <HeadingWithDesc my={8}>Featured Projects</HeadingWithDesc>
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
            <Button
              colorScheme="blue"
              mt={4}
              as="a"
              href="/projects"
              shadow="md"
            >
              See all
            </Button>
          </Box>
        </Box>

        <MedSep line={true} />
        <Box>
          <HeadingWithDesc my={8}>Featured News</HeadingWithDesc>
          {displayedNews.map((item, index) => {
            return (
              <>
                <TimelineCard
                  key={index}
                  title={item.title}
                  date={item.date}
                  desc={item.desc}
                  avatars={item.avatars}
                  names={item.names}
                />
                <XSSep line={false} />
              </>
            );
          })}

          <Box textAlign="center">
            <Button colorScheme="blue" mt={4} as="a" href="/news" shadow="md">
              See all
            </Button>
          </Box>
        </Box>
      </Container>
      <SmSep />
      <Footer />
    </>
  );
}
