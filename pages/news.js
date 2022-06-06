import { Container } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { SmSep } from "../components/Separators/SmSep";
import { Banner } from "../components/Headings/Banner";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { NewsLine } from "../components/NewsLine";

const url = "https://thewanglab.org";
const title = "News - The Wang lab";
const description =
  "News: [Wang, Ying Ph.D] Biochemistry Lab @ the University of North Carolina Wilmington researching Macromolecular Condensation, Pharmaceutical Formulation, and Protein Engineering.";
const image = {
  url: "https://i.imgur.com/UZs0lkV.jpg",
  width: 800,
  height: 600,
  alt: "Dr. Wang showing a student around in the Wang Lab.",
};

export default function News() {
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

      <NavBar active="news" />
      <Banner>News</Banner>

      <Container
        maxW="container.xl"
        p={15}
        justifyContent="center"
        textAlign="center"
      >
        <NewsLine />
      </Container>

      <SmSep />
      <Footer />
    </>
  );
}
