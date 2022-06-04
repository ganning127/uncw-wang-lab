import Head from "next/head";
import { useRouter } from "next/router";
import { NavBar } from "../../components/NavBar";
import { SwiperLanding } from "../../components/Landings/SwiperLanding";
import { HeadingWithDesc } from "../../components/Headings/HeadingWithDesc";
import { SmSep } from "../../components/Separators/SmSep";
import { MedSep } from "../../components/Separators/MedSep";
import { XSSep } from "../../components/Separators/XSSep";
import { ProjectCard } from "../../components/Cards/ProjectCard";
import {
  Container,
  Button,
  Text,
  Img,
  Box,
  HStack,
  Tooltip,
  Avatar,
} from "@chakra-ui/react";
import { Footer } from "../../components/Footer";

// import { Banner } from "../../components/Headings/Banner";
import { BannerProj } from "../../components/Headings/BannerProj";
import { SqProjectCard } from "../../components/Cards/SqProjectCard";
import { useEffect, useState } from "react";
import Projects from "../../data/projects.json";
export default function CategoryId() {
  const [desc, setDesc] = useState("");
  const [avatars, setAvatars] = useState([]);
  const [names, setNames] = useState([]);

  const router = useRouter();

  const { title } = router.query;
  const projKeys = Object.keys(Projects);
  const lstOfProj = [];

  useEffect(() => {
    projKeys.forEach((item) => {
      let lst = Projects[item];

      lstOfProj.push(...lst);
    });

    var ele = lstOfProj.filter((e) => e.title == title);

    if (typeof window !== "undefined" && ele[0]) {
      setDesc(ele[0].about);
      setAvatars(ele[0].avimages);
      setNames(ele[0].avnames);
    }
  });

  return (
    <>
      <Head>
        <title>{title + " "} - The Wang Lab</title>
        <meta name="description" content="Here are our projects!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar active="projects" />
      <BannerProj>{title}</BannerProj>

      <Container maxW="container.sm" p={15} textAlign="center">
        <Text fontWeight="normal" color="gray.800" fontSize="3xl">
          Team Authors:
        </Text>
        <HStack justifyContent="center" my={3} spacing={6}>
          {avatars &&
            avatars.map((avatar, i) => {
              return (
                <Tooltip label={names[i]} key={i} placement="auto-end">
                  <Avatar
                    name={avatar ? isFileImage(avatar) : ""}
                    src={avatar}
                    size="md"
                    icon={<Img src="/temp_team_avatar.png" rounded="full" />}
                  />
                </Tooltip>
              );
            })}
        </HStack>
        <Text fontWeight="normal" color="gray.800" fontSize="lg">
          {desc}
        </Text>
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

function isFileImage(file) {
  try {
    return file && file["type"].split("/")[0] === "image";
  } catch (e) {
    return false;
  }
}
