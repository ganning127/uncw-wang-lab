import Head from "next/head";
import { useRouter } from "next/router";
import { NavBar } from "../../components/NavBar";
import { SwiperLanding } from "../../components/Landings/SwiperLanding";
import { HeadingWithDesc } from "../../components/Headings/HeadingWithDesc";
import { SmSep } from "../../components/Separators/SmSep";
import { MedSep } from "../../components/Separators/MedSep";
import { XSSep } from "../../components/Separators/XSSep";
import { ProjectCard } from "../../components/Cards/ProjectCard";
import { Container, Button, Text, Box, SimpleGrid } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import ProjectData from "../../data/indvproj.json";
import Categories from "../../data/indvproj.json";
import { CategoryCard } from "../../components/Cards/CategoryCard";
import { Banner } from "../../components/Headings/Banner";
import { SqProjectCard } from "../../components/Cards/SqProjectCard";
import { useEffect, useState } from "react";
export default function CategoryId() {
  const router = useRouter();

  //   const [categoryUse, setCategoryUse] = useState("");

  //   useEffect(() => {
  //     if (router.isReady) {
  //       // Code using query
  //       setCategoryUse(router.query);
  //     }
  //   }, [router.isReady]);

  let { category } = router.query;

  const reversed = [...ProjectData].reverse();

  const filtered = reversed.filter(function (el) {
    return el.category === category;
  });

  const dummy = [...Categories];
  const categoryObj = Categories.filter(function (e) {
    return e.name === category;
  });

  let item = categoryObj[0];

  return (
    <>
      <Head>
        <title>{category + " "} - The Wang Lab</title>
        <meta name="description" content="Here are our projects!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar active="projects" />
      <Banner>{category}</Banner>

      <Container maxW="container.xl" p={15}>
        {/* <Box bg="white" px={4} py={8} rounded="md" mb={4} shadow="md">
          {" "}
          <Text fontSize="md" textAlign="center">
            {item.desc}
          </Text>
        </Box> */}

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {ProjectData.map((project, index) => {
              return (
                <SqProjectCard
                  key={index}
                  title={project.title}
                  // href={project.href}
                  img={project.image}
                  // link={project.link}
                  avatars={project.avimages}
                  names={project.avnames}
                  desc={project.about}
                />
              );
            })}
          </SimpleGrid>
          <SmSep />

      </Container>

      <Footer />
    </>
  );
}

function titleCase(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase();
  // str = "I'm a little tea pot".toLowerCase();
  // str = "i'm a little tea pot";

  // Step 2. Split the string into an array of strings
  str = str.split(" ");
  // str = "i'm a little tea pot".split(' ');
  // str = ["i'm", "a", "little", "tea", "pot"];

  // Step 3. Create the FOR loop
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    /* Here str.length = 5
      1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
                     str[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
                     str[0] = "I"                            + "'m";
                     str[0] = "I'm";
      2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
                     str[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
                     str[1] = "A"                            + "";
                     str[1] = "A";
      3rd iteration: str[2] = str[2].charAt(0).toUpperCase()   + str[2].slice(1);
                     str[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
                     str[2] = "L"                              + "ittle";
                     str[2] = "Little";
      4th iteration: str[3] = str[3].charAt(0).toUpperCase() + str[3].slice(1);
                     str[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
                     str[3] = "T"                            + "ea";
                     str[3] = "Tea";
      5th iteration: str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
                     str[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
                     str[4] = "P"                           + "ot";
                     str[4] = "Pot";                                                         
      End of the FOR Loop*/
  }

  // Step 4. Return the output
  return str.join(" "); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}
