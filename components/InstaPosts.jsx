import { InstagramEmbed } from "react-social-media-embed";
import Posts from "../data/insta.json";
import { SimpleGrid } from "@chakra-ui/react";
export const InstaPosts = () => {
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
        justifyContent="center"
      >
        {Posts.map((post, i) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }} key={i}>
              <InstagramEmbed url={post} width={328} style="" />
            </div>
          );
        })}
      </SimpleGrid>
    </>
  );
};
