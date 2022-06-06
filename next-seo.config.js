const title = "The Wang Lab";
const description =
  "[Wang, Ying Ph.D] Biochemistry Lab @ the University of North Carolina Wilmington researching Macromolecular Condensation, Pharmaceutical Formulation, and Protein Engineering.";

const SEO = {
  title,
  description,
  canonical: "https://thewanglab.org",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://thewanglab.org",
    title,
    description,
    images: [
      {
        url: "https://thewanglab.org/logo_sq.png",
        alt: title,
      },
    ],
  },
};

export default SEO;
