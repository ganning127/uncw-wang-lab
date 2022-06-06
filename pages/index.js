import Head from "next/head";
import { NextSeo } from "next-seo";
import { NavBar } from "../components/NavBar";
import { SwiperLanding } from "../components/Landings/SwiperLanding";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";
import { SmSep } from "../components/Separators/SmSep";
import { XSSep } from "../components/Separators/XSSep";
import { Container, Button, Box, SimpleGrid } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import ProjectNames from "../data/homeproj.json";
import Projects from "../data/projects.json";
import News from "../data/news.json";
import { TimelineCard } from "../components/Cards/TimelineCard";
import { InstaPosts } from "../components/InstaPosts";
import { CategoryCard } from "../components/Cards/CategoryCard";
import { useEffect, useState } from "react";

const url = "https://thewanglab.org";
const title = "The Wang lab";
const description =
  "Biochemistry Lab @ the University of North Carolina Wilmington researching Macromolecular Condensation, Pharmaceutical Formulation, and Protein Engineering.";
const image = {
  url: "https://i.imgur.com/UZs0lkV.jpg",
  width: 800,
  height: 600,
  alt: "Dr. Wang showing a student around in the Wang Lab.",
};

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
  });

  let displayedProjects = [...ProjectNames].reverse();
  displayedProjects = displayedProjects.slice(0, numToDisplay);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [image],
        }}
      />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <NavBar active="the wang lab" />

      <SwiperLanding />

      <Container maxW="container.xl" p={15}>
        <Box>
          <HeadingWithDesc my={8}>Featured Projects</HeadingWithDesc>
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

        <SmSep line={true} />
        {/* <HeadingWithDesc>Funding</HeadingWithDesc> */}
        <Box textAlign="center">
          <Button
            colorScheme="blue"
            mt={4}
            as="a"
            href="/funding"
            shadow="md"
            px={16}
            py={8}
            fontSize="2xl"
          >
            Sponsors & Collaborators
          </Button>
        </Box>
      </Container>
      <SmSep />
      <Footer />
    </>
  );
}
