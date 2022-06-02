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
import ProjectNames from "../data/homeproj.json";
import Projects from "../data/projects.json";
import News from "../data/news.json";
import { TimelineCard } from "../components/Cards/TimelineCard";
import { InstaPosts } from "../components/InstaPosts";
import { CategoryCard } from "../components/Cards/CategoryCard";
import HomeCategories from "../data/homeproj.json";
import { useEffect, useState } from "react";
export default function Home() {
  // set the news displayed for the "featured news" section on the homepage
  const numToDisplay = 3;
  let NewsLine = News.sort(
    (a, b) => Date.parse(new Date(a.date)) - Date.parse(new Date(b.date))
  );
  NewsLine = [...NewsLine].reverse();
  let displayedNews = NewsLine.slice(0, numToDisplay);

  // deal with setting up projects
  const [dProjs, setDProjs] = useState([]);
  const projKeys = Object.keys(Projects);
  const lstOfProj = [];
  const useProjects = [];

  useEffect(() => {
    projKeys.forEach((item) => {
      let lst = Projects[item];

      lstOfProj.push(...lst);
    });

    // lstOfProj contains all the projects that we have

    ProjectNames.forEach((title, index) => {
      var ele = lstOfProj.filter((e) => e.title == title);
      useProjects.push(ele[0]);
    });

    setDProjs(useProjects);

    // if (typeof window !== "undefined" && ele[0]) {
    //   setDesc(ele[0].about);
    //   setAvatars(ele[0].avimages);
    //   setNames(ele[0].avnames);
    // }
  });

  let displayedProjects = [...ProjectNames].reverse();
  displayedProjects = displayedProjects.slice(0, numToDisplay);

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
          {/* {displayedProjects.map((project, index) => {
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
          })} */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {dProjs.map((category, index) => {
              return (
                <>
                  <CategoryCard
                    key={index}
                    title={category.title}
                    href={"/projects/" + category.title}
                    avatars={category.avimages}
                    names={category.avnames}
                  />
                </>
              );
            })}
          </SimpleGrid>

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

        <SmSep line={true} />
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
                  href={item.href}
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

        <SmSep line={true} />
        <HeadingWithDesc mb={8}>Media</HeadingWithDesc>
        <InstaPosts />
      </Container>
      <SmSep />
      <Footer />
    </>
  );
}
