import { Box, Center, SimpleGrid, Text, Img, Icon, HStack, Link, Divider } from '@chakra-ui/react'
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineTwitter } from 'react-icons/ai'

export const Footer = () => {
    return (
        <Box bg='#E1F7FF'>
            <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} alignItems='center' justifyContent='center'>
                <Box mx='auto'>
                    <Img src='/logo_sq.png' alt='The Wang Lab' maxH='300px' />
                </Box>
                <Box mx='auto' textAlign='center' fontWeight={700} fontSize='xl'>
                    <Text>Veteran Hall 3045, 1040 Walton Drive, Wilmington, NC 28403</Text>
                    <Text mt={4}>Email: wangyy@uncw.edu</Text>
                    <Text>Phone: (910) 962-7721</Text>
                    <Text>Fax: (910) 962-3013</Text>


                    <HStack mt={4} fontSize='4xl' justifyContent='center' color='gray.400'>
                        <Link href='https://www.instagram.com/thewanglab/' _hover={{ color: 'gray.700' }} isExternal>
                            <Icon as={AiOutlineInstagram} />
                        </Link>
                        <Link href='https://www.instagram.com/thewanglab/' _hover={{ color: 'gray.700' }} isExternal>
                            <Icon as={AiOutlineYoutube} />
                        </Link>
                        <Link href='https://www.instagram.com/thewanglab/' _hover={{ color: 'gray.700' }} isExternal>
                            <Icon as={AiOutlineTwitter} />
                        </Link>
                    </HStack>
                </Box>
                <Box mx='auto'>
                    <Img src='/uncw_logo.png' alt='The Wang Lab' maxH='300px' />

                </Box>
            </SimpleGrid>
            <Divider my={4} borderColor='gray.400' />
            <Text textAlign='center' pb={4}>
                Copyright &copy; {new Date().getFullYear()} The Wang Lab.
            </Text>
        </Box>
    )
}   