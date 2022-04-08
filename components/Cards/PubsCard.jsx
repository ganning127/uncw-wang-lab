import { Text, HStack, VStack } from "@chakra-ui/react"

export const PubsCard = ({ names, title, resources, publink, images }) => {
    return (

        <VStack>

            <HStack> 
                <Text fontWeight="normal" color='gray.800' fontSize="lg">{names}</Text>
                <Text fontWeight="bold" color='gray.800' fontSize="lg">{title}</Text>
                <Text fontWeight="normal" color='gray.800' fontSize="lg">{resources}</Text>
            </HStack>

            <HStack>
                <Text textAlign='left' fontWeight="normal" color ='gray.800'>Button</Text>
                <Text textAlign='center' fontWeight="bold" color='gray.800' fontSize="lg">Team Authors: </Text>
                <img src={images} height='50px' width='50px' />
            </HStack>

        </VStack>
    )
}