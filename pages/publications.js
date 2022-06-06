import Head from "next/head";
import { NextSeo } from "next-seo";
import { SimpleGrid, Container, Box } from "@chakra-ui/react";
import { PubsCard } from "../components/Cards/PubsCard";
import PubsData from "../data/publications.json";
import { SmSep } from "../components/Separators/SmSep";
import { Banner } from "../components/Headings/Banner";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";

const url = "https://thewanglab.org/publications";
const title = "Publications - The Wang lab";
const description =
  "Publications: Biochemistry Lab @ the University of North Carolina Wilmington researching Macromolecular Condensation, Pharmaceutical Formulation, and Protein Engineering.";
const image = {
  url: "https://i.imgur.com/UZs0lkV.jpg",
  width: 800,
  height: 600,
  alt: "Dr. Wang showing a student around in the Wang Lab.",
};

export default function Publications() {
  const keys = Object.keys(PubsData);
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

      <NavBar active="publications" />
      <Banner>Publications</Banner>

      <Container maxW="container.xl" p={15}>
        {keys.map((key, index) => {
          return (
            <Box key={index}>
              <HeadingWithDesc>{key}</HeadingWithDesc>
              <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                {PubsData[key].map((pub, index) => {
                  return (
                    <PubsCard
                      key={index}
                      names={pub.names}
                      avnames={pub.avnames}
                      title={pub.title}
                      publication={pub.publication}
                      resources={pub.resources}
                      publink={pub.publink}
                      avatars={pub.avatars}
                    />
                  );
                })}
              </SimpleGrid>
              <SmSep />
            </Box>
          );
        })}
      </Container>

      <SmSep />
      <Footer />
    </>
  );
}
