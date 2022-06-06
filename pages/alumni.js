import Head from "next/head";
import { NextSeo } from "next-seo";
import { SimpleGrid, Container } from "@chakra-ui/react";
import { AlumniCard } from "../components/Cards/AlumniCard";
import { SmSep } from "../components/Separators/SmSep";
import { Banner } from "../components/Headings/Banner";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import AlumniData from "../data/alumni.json";

const url = "https://thewanglab.org/alumni";
const title = "Alumni - The Wang lab";
const description =
  "Alumni: Biochemistry Lab @ the University of North Carolina Wilmington researching Macromolecular Condensation, Pharmaceutical Formulation, and Protein Engineering.";
const image = {
  url: "https://i.imgur.com/UZs0lkV.jpg",
  width: 800,
  height: 600,
  alt: "Dr. Wang showing a student around in the Wang Lab.",
};

export default function Alumni() {
  const keys = [...AlumniData].reverse();
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

      <NavBar />
      <Banner>Alumni</Banner>

      <Container maxW="container.xl" p={15}>
        <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} spacing={10}>
          {keys.map((alumni, index) => {
            return (
              <>
                <AlumniCard
                  key={index}
                  name={alumni.name}
                  year={alumni.year}
                  about={alumni.about}
                  image={alumni.image}
                />
              </>
            );
          })}
        </SimpleGrid>
      </Container>

      <SmSep />
      <Footer />
    </>
  );
}
