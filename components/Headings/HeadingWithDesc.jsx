import { Heading, Text, Box } from '@chakra-ui/react'
export const HeadingWithDesc = ({ desc, children }) => {
    return (
        <Box textAlign="center" maxW="700px" mx="auto">
            <Heading as="h1" size="2xl" color='gray.800' mb="4" fontWeight={700}>{children}</Heading>
            {desc && <Text fontWeight="normal" color='gray.400' fontSize="xl" my="3" >{desc}</Text>}
        </Box >
    )
}