import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react'

interface HorizontalBlogCardProps {
    post: any,
    index: number
}

export const HorizontalBlogCard: React.FC<HorizontalBlogCardProps> = ({ post, index }) => {
    return (
        <VStack>
            <HStack>
                <Text>{post.title}</Text>

            </HStack>

        </VStack>
    );
}


export default HorizontalBlogCard