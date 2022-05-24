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

      <NavBar active="publications" />
      <Banner>Publications</Banner>

      <Container maxW="container.xl" p={15}>
        <SimpleGrid columns={{ base: 1, md: 1, md: 1 }} spacing={5}>
          <PubsCard
            names= {["M. J. Scannell", "M. W. Hyatt", "I. L. Budyak", "M. A. Woldeyes", "Y. Wang"]}
            title="Revisit PEG-Induced Precipitation Assay for Protein Solubility Assessment of Monoclonal Antibody Formulations"
            publication= "Pharmaceutical Research"
            resources="PMID: 34647231 (2021)"
            publink="https://pubmed.ncbi.nlm.nih.gov/34647231/"
            images={["/ying_wang.png"]}
          />
          <PubsCard
            names="Y. Wang, R. F. Latypov"
            title="Quantitative Evaluation of Protein Solubility in Aqueous Solutions by PEG-Induced Liquid-Liquid Phase Separation"
            publication= "Methods in Molecular Biology"
            resources="2039, 39-49 (2019)"
            publink="https://pubmed.ncbi.nlm.nih.gov/31342417/"
            images={["/ying_wang.png"]}
          />
          <PubsCard
            names="J.B. Rowe, R.P. Flynn, H.R. Wooten, H.A. Noufer, R.A. Cancel, J. Zhang, J.A. Subramony, S. Pechenov, Y. Wang"
            title="Submicron Aggregation of Chemically Denatured Monoclonal Antibody"
            publication= "Molecular Pharmaceutics"
            resources="15, 4710-4721 (2018)"
            publink="https://pubmed.ncbi.nlm.nih.gov/30142275/"
            images={["/harrison_wooten.png", "/ying_wang.png"]}
          />
          <PubsCard
            names="J.B. Rowe, R.A. Cancel, T.D. Evangelous, R.P. Flynn, S. Pechenov, J.A. Subramony, J. Zhang, Y. Wang"
            title="Meta-stability Gap in the Phase Diagram of Monoclonal IgG Antibody"
            publication= "Biophysical Journal"
            resources="113, 1750-1756 (2017)"
            publink="https://pubmed.ncbi.nlm.nih.gov/29045869/"
            images={["/ying_wang.png"]}
          />
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 1, md: 1 }} spacing={5}>

          <Heading spacing = {25}></Heading>
          <Heading as="h1" size="2xl" color='#263864' mb="4" fontWeight={700} alignItems = "center" textAlign = "center" spacing = {8}>Pre- The Wang Lab</Heading>

          <PubsCard
            names="Y. Wang, A. Lomakin, S. Kanai, R. Alex, G. B. Benedek"
            title="Liquid-Liquid Phase Separation in Oligomeric Peptide Solutions"
            publication= "Langmuir"
            resources="33, 7715-7721 (2017)"
            publink="https://pubmed.ncbi.nlm.nih.gov/28689408/"
            images={["/ying_wang.png"]}
          />
          <PubsCard
            names="G. Sun, Y. Wang, A. Lomakin, G. B. Benedek, H. E. Stanley, L. Xu, S. V. Buldyrev"
            title="The Phase Behavior Study of Human Antibody Solution Using Multi-scale Modeling"
            publication= "The Journal of Chemical Physics"
            resources="145, 194901 (2016)"
            publink="https://pubmed.ncbi.nlm.nih.gov/27875860/"
            images={["/ying_wang.png"]}
          />
          <PubsCard
            names="R.W. Thompson, R.F. Latypov, Y. Wang, A. Lomakin, J.A. Meyer, S. Vunnum, G. B. Benedek"
            title="Evaluation of effects of pH and ionic strength on colloidal stability of IgG solutions by PEG-induced liquid-liquid phase separation="
            publication= "The Journal of Chemical Physics"
            resources="145, 185101 (2016)"
            publink="https://pubmed.ncbi.nlm.nih.gov/27846698/"
            images={["/ying_wang.png"]}
          />
          <PubsCard
            names="Y. Wang, A. Lomakin, S. Kanai, R. Alex, S. Belli, M. Donzelli, G. B. Benedek"
            title="The molecular basis for the prolonged blood circulation of lipidated incretin peptides: peptide oligomerization or binding to serum albumin"
            publication= "Journal of Controlled Release"
            resources="241, 25-33 (2016)"
            publink="https://pubmed.ncbi.nlm.nih.gov/27578099/"
            images={["/ying_wang.png"]}
          />
          <PubsCard
            names="M.A. Kreutzberger, E. Tejada, Y. Wang, P.F. Almeida"
            title="GUVs melt like LUVs: the large heat capacity of MLVs is not due to large size or small curvature"
            publication= "Biophysical Journal"
            resources="12(2), 411-419 (2015)"
            publink="https://pubmed.ncbi.nlm.nih.gov/26039163/"
            images={["/ying_wang.png"]}
          />
          <PubsCard
            names="Y. Wang, A. Lomakin, S. Kanai, R. Alex, G.B. Benedek"
            title="Transformation of oligomers of lipidated peptide Induced by Change in pH"
            publication= "Molecular Pharmaceutics"
            resources="12(2), 411-419 (2015)"
            publink="https://pubmed.ncbi.nlm.nih.gov/25569709/"
            images={["/ying_wang.png"]}
          />
          <PubsCard
            names="Y. Wang, R.F. Latypov, A. Lomakin, J.A. Meyer, B.A. Kerwin, S. Vunnum, G.B. Benedek"
            title="Quantitative evaluation of colloidal stability of antibody solutions using PEG-induced liquid-liquid phase separation."
            publication= "Molecular Pharmaceutics"
            resources="11(5), 1391-1402 (2014)"
            publink="https://pubmed.ncbi.nlm.nih.gov/24679215/"
            images={["/ying_wang.png"]}
          />
          <PubsCard
            names="Y. Wang, A. Lomakin, R.F. Latypov, J.P. Laubach, T. Hideshima, P.G. Richardson, N.C. Munshi, K.C. Anderson, G.B. Benedek"
            title="Phase transitions in human IgG solutions"
            publication= "J. Chem. Phys"
            resources="139, 121904(1-9) (2013)"
            publink="https://pubmed.ncbi.nlm.nih.gov/24089716/"
            images={["/ying_wang.png"]}
          />
          <PubsCard
            names="Y. Wang, A. Lomakin, T. Hideshima, J.P. Laubach, O.O. Ogun, P.G. Richardson, N.C. Munshi, K.C. Anderson, G.B. Benedek"
            title="Pathological crystallization of human immunoglobulins"
            publication= "Proc. Natl. Acad.Sci. USA"
            resources="109, 13359-13361(2012)"
            publink="https://pubmed.ncbi.nlm.nih.gov/22847421/"
            images={["/ying_wang.png"]}
          />
          <PubsCard
            names="Y. Wang, A. Lomakin, R.F. Latypov, G.B. Benedek"
            title="Phase separation in solutions of monoclonal antibodies and the effect of human serum albumin"
            publication= "Proc. Natl. Acad.Sci. USA"
            resources="108, 16606-16611 (2011)"
            publink="https://pubmed.ncbi.nlm.nih.gov/21921237/"
            images={["/ying_wang.png"]}
          />
          <PubsCard
            names="Y. Wang, A. Lomakin, J.J. McManus, O. Ogun, G.B. Benedek"
            title="Phase behavior of mixtures of human lens proteins Gamma D and Beta B1"
            publication= "Proc. Natl. Acad.Sci. USA"
            resources="107, 13282-13287 (2010)"
            publink="https://pubmed.ncbi.nlm.nih.gov/20616077/"
            images={["/ying_wang.png"]}
          />
          <PubsCard
            names="O. Annunziata, A. Payne and Y. Wang"
            title="Solubility of lysozyme in the presence of aqueous chloride salts: common-ion effect and its role on solubility and crystal thermodynamics"
            publication= "J. Am. Chem. Soc"
            resources="130, 13347-13352 (2008)"
            publink="https://pubmed.ncbi.nlm.nih.gov/18788805/"
            images={["/ying_wang.png"]}
          />
          <PubsCard
            names="Y. Wang and O. Annunziata"
            title="Liquid-liquid phase transition of protein aqueous solutions isothermally induced by protein crosslinking"
            publication= "Langmuir"
            resources="24, 2799-2807 (2008)"
            publink="https://pubmed.ncbi.nlm.nih.gov/18229962/"
            images={["/ying_wang.png"]}
          />
          <PubsCard
            names="Y. Wang and O. Annunziata"
            title="Comparison between protein-PEG interactions and the effect of PEG on protein-protein interactions using the liquid-liquid phase transition"
            publication= "J. Phys. Chem. B"
            resources="111, 1222-1230 (2007)"
            publink="https://pubmed.ncbi.nlm.nih.gov/17266278/"
            images={["/ying_wang.png"]}
          />
        </SimpleGrid>

      </Container>

      <SmSep />
      <Footer />
    </>
  );
}
