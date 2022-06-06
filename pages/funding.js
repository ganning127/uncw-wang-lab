import { NextSeo } from "next-seo";
import { SimpleGrid, Container, Img, Link } from "@chakra-ui/react";
import { SmSep } from "../components/Separators/SmSep";
import { Banner } from "../components/Headings/Banner";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Logos from "../data/funding.json";

const url = "https://thewanglab.org/funding";
const title = "Funding - The Wang lab";
const description =
  "Funding: [Wang, Ying Ph.D] Biochemistry Lab @ the University of North Carolina Wilmington researching Macromolecular Condensation, Pharmaceutical Formulation, and Protein Engineering.";
const image = {
  url: "https://i.imgur.com/UZs0lkV.jpg",
  width: 800,
  height: 600,
  alt: "Dr. Wang showing a student around in the Wang Lab.",
};

export default function Funding() {
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

      <NavBar active="funding" />
      <Banner>Funding</Banner>

      <Container maxW="container.xl" p={15}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={20}>
          {Logos.map((logo, index) => (
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
