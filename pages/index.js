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
// TODO: fix infinite white space on the right side of the page
export default function Home() {
  return (
    <>
      <Head>
        <title>Wang Lab</title>
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
        <ProjectCard
          title="Predicting mRNA levels with drosophila melanogaster"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it rambled it"
          img="/temp_proj1.png"
          link="Read more"
          href="/LOL"
          avatars={["/p1.jpeg", "/p2.jpeg", "/p3.jpeg"]}
          names={["John Doe", "Jane Doe", "John Doe"]}
        />
        <XSSep line={false} />
        <ProjectCard
          title="Predicting mRNA levels with drosophila melanogaster"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it rambled it"
          img="/temp_proj1.png"
          link="Read more"
          href="/LOL"
          avatars={["/p1.jpeg", "/p2.jpeg", "/p3.jpeg"]}
          names={["John Doe", "Jane Doe", "John Doe"]}
        />{" "}
        <XSSep line={false} />
        <ProjectCard
          title="Predicting mRNA levels with drosophila melanogaster"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it rambled it"
          img="/temp_proj1.png"
          link="Read more"
          href="/LOL"
          avatars={["/p1.jpeg", "/p2.jpeg", "/p3.jpeg"]}
          names={["John Doe", "Jane Doe", "John Doe"]}
        />
        <Box textAlign="center">
          <Button colorScheme="blue" mt={4}>
            See all projects
          </Button>
        </Box>
      </Container>
      <SmSep />
      <Footer />
    </>
  );
}
