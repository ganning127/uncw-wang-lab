import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SimpleGrid, Container, Heading } from "@chakra-ui/react";
import { PubsCard } from "../components/Cards/PubsCard";


import { SmSep } from "../components/Separators/SmSep";
import { Banner } from "../components/Headings/Banner";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export default function Publications() {
  return (
    <>
      <Head>
        <title>Publications - The Wang Lab</title>
        <meta name="description" content="Here are our Publications!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar active="" />
      <Banner>Publications</Banner>

      <Container maxW="container.xl" p={15}>
        <SimpleGrid columns={{ base: 1, md: 1, md: 1 }} spacing={5}>
          <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
           <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
           <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
           <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
        </SimpleGrid>

          <Heading as="h1" size="2xl" color='#263864' mb="4" fontWeight={700} alignItems = "center" spacing ={14}>Pre - The Wang Lab</Heading>

        <SimpleGrid columns={{ base: 1, md: 1, md: 1 }} spacing={5}>
          <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
                    <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
           <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
           <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
           <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
                    <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
                    <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
           <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
           <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
           <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            resources="Untitled Resource 15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
        </SimpleGrid>

      </Container>

      <SmSep />
      <Footer />
    </>
  );
}
