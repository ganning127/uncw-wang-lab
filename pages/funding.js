import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SimpleGrid, Container, Img, Link } from "@chakra-ui/react";

import { SmSep } from "../components/Separators/SmSep";
import { Banner } from "../components/Headings/Banner";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

const logos = [
  {
    pic: "/uncw_logo.png",
    link: "https://www.uncw.edu/",
  },
  {
    pic: "/logo_sq.png",
    link: "https://www.uncw.edu/",
  },
  {
    pic: "/logo_sq.png",
    link: "https://www.uncw.edu/",
  },
  {
    pic: "/logo_sq.png",
    link: "https://www.uncw.edu/",
  },
  {
    pic: "/logo_sq.png",
    link: "https://www.uncw.edu/",
  },
  {
    pic: "/logo_sq.png",
    link: "https://www.uncw.edu/",
  },
  {
    pic: "/logo_sq.png",
    link: "https://www.uncw.edu/",
  },
  {
    pic: "/logo_sq.png",
    link: "https://www.uncw.edu/",
  },
  {
    pic: "/logo_sq.png",
    link: "https://www.uncw.edu/",
  },
];
export default function Funding() {
  return (
    <>
      <Head>
        <title>Funding - The Wang Lab</title>
        <meta
          name="description"
          content="We're so grateful for our sponsors who make our work possible!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar active="" />
      <Banner>Funding</Banner>

      <Container maxW="container.xl" p={15}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={20}>
          {logos.map((logo, index) => (
            <Link href={logo.link} target="_blank" key={index} _focus={{}}>
              <Img
                src={logo.pic}
                alt="logo"
                objectFit="contain"
                target="_blank"
                mx="auto"
                maxH="200px"
              />
            </Link>
          ))}
        </SimpleGrid>
      </Container>

      <SmSep />
      <Footer />
    </>
  );
}
