import { Tag as ChakraTag, useColorModeValue } from '@chakra-ui/react'

import React from 'react'

interface TagProps {

    label:string
}

export const Tag: React.FC<TagProps> = ({label}) => {
    const tagColor = useColorModeValue('cardDark2','darkSecondary');
    const color =useColorModeValue('lightBackground','darkBackground')
    return (<ChakraTag bgColor={tagColor} fontSize="lg" color={color}>{label}</ChakraTag>);
}