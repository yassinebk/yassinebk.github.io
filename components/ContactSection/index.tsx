import {
  Box,
  Center,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import NextImage from "next/image";
import React from "react";
import { AiFillLinkedin, AiOutlineFacebook } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import ParallaxContainer from "../Parallax";
import { SectionHeading } from "../SectionHeading";

interface ContactSectionProps {}

export const ContactSection: React.FC<ContactSectionProps> = ({}) => {
  const miniTextColor = useColorModeValue("#000", "darkSecondary");
  const style = {
    minHeight: "75vh",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    display: "flex",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingBottom: "60px",
    paddingTop: "32px",
  };
  return (
    <ParallaxContainer styleProps={style as any}>
      <Flex
        w="100%"
        maxW="881px"
        flexDir={["column", "column", "row", "row"]}
        alignItems={["center", "center", "flex-start"]}
        justifyContent="center"
      >
        <VStack alignItems="center" mx="auto" id="contact-layout">
          <ParallaxContainer
            variants={{
              show: {
                translateY: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                },
              },
              hidden: { translateY: -100, opacity: 0 },
            }}
          >
            <Center w="full" id="image-center">
              <Box width={["70vw", "50vw", "220px"]} border={5}>
                <NextImage
                  src="/assets/avatar.png"
                  height={302}
                  width={221}
                  layout="responsive"
                />
              </Box>
            </Center>
            <VStack mt="16px">
              <Text fontSize="2xl">Yassine Belkhadem</Text>
              <Text
                fontSize="lg"
                textDecoration="underline"
                color={miniTextColor}
              >
                @Yassine Belkhadem
              </Text>
            </VStack>
          </ParallaxContainer>
        </VStack>
        <ParallaxContainer
          variants={{
            show: {
              translateY: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
              },
            },

            hidden: { translateY: 100, opacity: 0 },
          }}
        >
          <VStack
            alignItems={["center", "center", "flex-start"]}
            px={["0%", "0%", "5%"]}
            borderRadius={2}
            w={['100%','100%',"400px"]}
            paddingTop={["12", "12", 0]}
          >
            <SectionHeading>Contact Me</SectionHeading>
            <Box h={[0, 4, "12"]} />
            <HStack alignItems="center" fontSize="2xl">
              <AiFillLinkedin />
              <Link href="https://www.linkedin.com/in/yassine-belkhadem-396266204/">
                Yassine Belkhadem
              </Link>
            </HStack>
            <HStack alignItems="center" fontSize="2xl">
              <AiOutlineFacebook />
              <Link href="https://www.facebook.com/yassine.belkhadm/">
                yassine.belkhadem
              </Link>
            </HStack>
            <HStack fontSize="2xl" alignItems="center">
              <BsDiscord />
              <Text>Ophelius#3779</Text>
            </HStack>
          </VStack>
        </ParallaxContainer>
      </Flex>
    </ParallaxContainer>
  );
};
