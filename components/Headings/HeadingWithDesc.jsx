import { Heading, Text, Box } from "@chakra-ui/react";
export const HeadingWithDesc = (props) => {
  const { desc, children } = props;
  return (
    <Box textAlign="center" maxW="1200px" mx="auto" {...props}>
      <Heading as="h1" size="2xl" color="#263864" mb="4" fontWeight={700}>
        {children}
      </Heading>
      {desc && (
        <Text fontWeight="normal" color="gray.400" fontSize="xl" my="3">
          {desc}
        </Text>
      )}
    </Box>
  );
};
