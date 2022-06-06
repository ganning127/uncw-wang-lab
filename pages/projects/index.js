import { NextSeo } from "next-seo";
import { NavBar } from "../../components/NavBar";
import { HeadingWithDesc } from "../../components/Headings/HeadingWithDesc";
import { SmSep } from "../../components/Separators/SmSep";
import { Container, Button, Box, SimpleGrid } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import Categories from "../../data/projects.json";
import { CategoryCard } from "../../components/Cards/CategoryCard";
import { Banner } from "../../components/Headings/Banner";
import { SqProjectCard } from "../../components/Cards/SqProjectCard";

const url = "https://thewanglab.org/projects";
const title = "Projects - The Wang lab";
const description =
  "Projects: Biochemistry Lab @ the University of North Carolina Wilmington researching Macromolecular Condensation, Pharmaceutical Formulation, and Protein Engineering.";
const image = {
  url: "https://i.imgur.com/UZs0lkV.jpg",
  width: 800,
  height: 600,
  alt: "Dr. Wang showing a student around in the Wang Lab.",
};

export default function Projects() {
  const HomeKeys = Object.keys(Categories);
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

      <NavBar active="projects" />
      <Banner>Projects</Banner>

      <Container maxW="container.xl" p={15}>
        {HomeKeys.map((key, index) => {
          return (
            <Box key={index}>
              <HeadingWithDesc>{key}</HeadingWithDesc>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                {Categories[key].map((category, index) => {
                  return (
                    <CategoryCard
                      key={index}
                      title={category.title}
                      href={"/projects/" + category.title}
                      avatars={category.avimages}
                      names={category.avnames}
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
