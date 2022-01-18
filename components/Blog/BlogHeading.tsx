import { Heading, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

interface BlogHeadingProps {

}

export const BlogHeading: React.FC<BlogHeadingProps> = ({children}) => {
    const textColor=useColorModeValue('cardDark2','darkSecondary')
    return (
        <Heading color={textColor} fontSize="6xl">
            {children}

            </Heading>
        );
}