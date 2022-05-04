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
            names="M. J. Scannell, M. W. Hyatt, I. L. Budyak, M. A. Woldeyes, Y. Wang"
            title="Revisit PEG-Induced Precipitation Assay for Protein Solubility Assessment of Monoclonal Antibody Formulations"
            publication= "Pharmaceutical Research"
            resources="PMID: 34647231 (2021)"
            publink="https://pubmed.ncbi.nlm.nih.gov/34647231/"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
          <PubsCard
            names="Y. Wang, R. F. Latypov"
            title="Quantitative Evaluation of Protein Solubility in Aqueous Solutions by PEG-Induced Liquid-Liquid Phase Separation"
            publication= "Methods in Molecular Biology"
            resources="2039, 39-49 (2019)"
            publink="https://pubmed.ncbi.nlm.nih.gov/31342417/"
            images={["/johndoe.png", "/johndoe.png"]}
          />
          <PubsCard
            names="J.B. Rowe, R.P. Flynn, H.R. Wooten, H.A. Noufer, R.A. Cancel, J. Zhang, J.A. Subramony, S. Pechenov, Y. Wang"
            title="Submicron Aggregation of Chemically Denatured Monoclonal Antibody"
            publication= "Molecular Pharmaceutics"
            resources="15, 4710-4721 (2018)"
            publink="https://pubmed.ncbi.nlm.nih.gov/30142275/"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
          <PubsCard
            names="J.B. Rowe, R.A. Cancel, T.D. Evangelous, R.P. Flynn, S. Pechenov, J.A. Subramony, J. Zhang, Y. Wang"
            title="Meta-stability Gap in the Phase Diagram of Monoclonal IgG Antibody"
            publication= "Biophysical Journal"
            resources="113, 1750-1756 (2017)"
            publink="https://pubmed.ncbi.nlm.nih.gov/29045869/"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png", "/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 1, md: 1 }} spacing={5}>

          <Heading spacing = {25}></Heading>
          <Heading as="h1" size="2xl" color='#263864' mb="4" fontWeight={700} alignItems = "center" textAlign = "center" spacing = {8}>Pre- The Wang Lab</Heading>

          <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            publication= "Untitled Resource"
            resources="15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
          <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            publication= "Untitled Resource"
            resources="15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
          <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            publication= "Untitled Resource"
            resources="15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
          <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            publication= "Untitled Resource"
            resources="15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
          <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            publication= "Untitled Resource"
            resources="15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
          <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            publication= "Untitled Resource"
            resources="15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
          <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            publication= "Untitled Resource"
            resources="15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
          <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            publication= "Untitled Resource"
            resources="15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
          <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            publication= "Untitled Resource"
            resources="15-2. 2022"
            publink="uncw.edu"
            images={["/johndoe.png", "/johndoe.png", "/johndoe.png"]}
          />
          <PubsCard
            names="Wang D, Wang D, Wang, D"
            title="Long Title Example for Research Paper Under the Wang Laboratory"
            publication= "Untitled Resource"
            resources="15-2. 2022"
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
