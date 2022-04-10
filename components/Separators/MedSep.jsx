import { Box, Divider } from '@chakra-ui/react'

export const MedSep = ({ line }) => {
    if (line) return <Divider my="20" h="1px" />
    else return <Box my="20" h="1px" />
}