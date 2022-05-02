import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SimpleGrid, Container, Img, Link } from "@chakra-ui/react";

import { SmSep } from "../components/Separators/SmSep";
import { Banner } from "../components/Headings/Banner";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { NewsLine } from "../components/NewsLine";
export default function News() {
  return (
    <>
      <Head>
        News
        <title>Funding - Wang Lab</title>
        <meta
          name="description"
          content="We're so grateful for our sponsors who make our work possible!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar active="news" />
      <Banner>News</Banner>

      <Container maxW="container.xl" p={15}>
        <NewsLine />
      </Container>

      <SmSep />
      <Footer />
    </>
  );
}
