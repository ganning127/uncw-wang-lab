import { Box, Text, VStack } from "@chakra-ui/react"

export const PubsCard = ({ names, title, resources, publink, images }) => {
    return (
        <Box mx='auto' textAlign='left' maxW='800px'>

            <VStack
                spacing={0.25}
            >
                <Text> 
                    <Text fontWeight="normal" color='gray.800' fontSize="lg">{names}</Text>
                    <Text fontWeight="bold" color='gray.800' fontSize="lg">{title}</Text>
                    <Text fontWeight="normal" color='gray.800' fontSize="lg">{resources}</Text>
                </Text>

                <Text>
                    // Here the pubmed button will be, the link is contained in publink.
                    <Text textAlign='center' fontWeight="bold" color='gray.800' fontSize="lg">Team Authors: </Text>
                    <img src={images} height='50px' width='50px' /> // NEED to change, so that multiple imgs can print. 
                </Text>

                <div style={{ borderTop: "2px solid gray.800", marginLeft: 20, marginRight: 20}}></div>
            </VStack>
        </Box>
    )
}