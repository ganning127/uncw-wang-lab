import { Box, Divider } from '@chakra-ui/react'

export const XSSep = ({ line }) => {
    if (line) return <Divider my="5" h="1px" />
    else return <Box my="5" h="1px" />
}