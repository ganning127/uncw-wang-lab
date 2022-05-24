import {
  Text,
  HStack,
  Flex,
  VStack,
  Img,
  Link,
  Avatar,
  Button,
  Heading,
  Box,
  Spacer,
  SimpleGrid,
  Tooltip,
} from "@chakra-ui/react";

export const PubsCard = ({
  names,
  title,
  publication,
  resources,
  publink,
  avatars,
}) => {
  return (
    <Box mx="auto" rounded="lg" bg="white" shadow="md" p={15}>
      <Text>
        <Text as="span" fontWeight="normal" color="gray.800" fontSize="lg">
          {names + ". "}
        </Text>
        <Text as="span" fontWeight="bold" color="gray.800" fontSize="lg">
          {title + ". "}
        </Text>
        <Text as="i" fontWeight="normal" color="gray.800" fontSize="lg">
          {publication + ". "}
        </Text>
        <Text as="span" fontWeight="normal" color="gray.800" fontSize="lg">
          {resources + ". "}
        </Text>
      </Text>

      <Flex align="center">
        <Button
          bg="#5BBEE5"
          color="white"
          _hover={{
            bg: "#40b7e6",
          }}
          as="a"
          href={publink}
          target="_blank"
        >
          PubMed
        </Button>

        <Spacer />
        <Box d="flex" alignItems="center">
          <Text
            textAlign="center"
            fontWeight="bold"
            color="gray.800"
            fontSize="lg"
            display={{ base: "none", md: "block" }}
          >
            Team Authors:
          </Text>
          <HStack spacing={2} ml={4} wrap="wrap" justifyContent={"center"}>
            {avatars && avatars.map((avatar, i) => {
              return (
                <Tooltip label={names[i]} key={i} placement="auto-end">
                  <Avatar name={names[i]} src={avatar} height="50px" width="50px" />
              </Tooltip>
              );
            })}
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

// const MobilePubsCard = ({
//   names,
//   title,
//   publication,
//   resources,
//   publink,
//   images,
// }) => {
//   return (
//     <Box mx="auto" rounded="lg" bg="white" shadow="md" p={15}>
//       <Text>
//         <Text as="span" fontWeight="normal" color="gray.800" fontSize="lg">
//           {names + ". "}
//         </Text>
//         <Text as="span" fontWeight="bold" color="gray.800" fontSize="lg">
//           {title + ". "}
//         </Text>
//         <Text as="i" fontWeight="normal" color="gray.800" fontSize="lg">
//           {publication + ". "}
//         </Text>
//         <Text as="span" fontWeight="normal" color="gray.800" fontSize="lg">
//           {resources + ". "}
//         </Text>
//       </Text>

//       <Flex align="center">
//         <Button
//           bg="#5BBEE5"
//           color="white"
//           _hover={{
//             bg: "#40b7e6",
//           }}
//           as="a"
//           href={publink}
//           isExternal
//         >
//           PubMed
//         </Button>

//         <Spacer />
//         <Box d="flex" alignItems="center">
//           <Text
//             textAlign="center"
//             fontWeight="bold"
//             color="gray.800"
//             fontSize="lg"
//           >
//             Team Authors:
//           </Text>
//           <SimpleGrid spacing={2} ml={4} columns={{ base: 2, md: 5, lg: 10 }}>
//             {images.map((image, i) => {
//               return (
//                 <Avatar
//                   src={image}
//                   height="50px"
//                   width="50px"
//                   name={names}
//                   key={i}
//                 />
//               );
//             })}
//           </SimpleGrid>
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export const PubsCard = {
//   Mobile: MobilePubsCard,
//   Desktop: DesktopPubsCard,
// };
