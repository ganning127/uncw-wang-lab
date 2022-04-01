import { Box, Divider } from '@chakra-ui/react'

export const SmSep = ({ line }) => {
    if (line) return <Divider my="20" h="1px" />
    else return <Box my="20" h="1px" />
}