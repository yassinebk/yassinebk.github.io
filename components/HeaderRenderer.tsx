import { Heading, useColorModeValue, Text, Link, Box } from "@chakra-ui/react";

export const Header1 = (props) => {
  const h1Color = useColorModeValue("#B17BBA", "#A833B9");
  return (
    <Heading as="h1" color={h1Color} my={12} fontSize={"48px"} mt={14} mb={10}>
      {props.children}
    </Heading>
  );
};

export const Header2 = (props) => {
  const h2Color = useColorModeValue("#FACE7E", "#F6AE2D");
  return (
    <Heading
      id={props.children[0].toLowerCase()}
      as="h2"
      color={h2Color}
      my={6}
      fontSize="40px"
      fontFamily="Sen"
      mt={24}
      mb={8}
    >
      {props.children}
    </Heading>
  );
};
export const Header3 = (props) => {
  const h3Color = useColorModeValue("#6d6875", "#99c1de");
  return (
    <Heading
      id={props.children[0].toLowerCase()}
      as="h3"
      color={h3Color}
      my={6}
      fontSize="32px"
      fontFamily="Sen"
      mt={10}
      mb={6}
    >
      {props.children}
    </Heading>
  );
};

export const Header4 = (props: any) => (
  <Heading
    as="h4"
    fontWeight="700"
    fontSize="26px"
    mb={3}
    mt={6}
    id={props.children[0].toLowerCase()}
  >
    {props.children}
  </Heading>
);
export const Header5 = (props: any) => (
  <Heading as="h5" fontWeight="600" fontSize="24px" mt={6} mb={2}>
    {props.children}
  </Heading>
);
export const Header6 = (props: any) => (
  <Heading as="h6">{props.children}</Heading>
);

export const BoldText = (props: any) => (
  <Text as="span" fontWeight="700" color="red.400" fontSize="lg">
    {props.children}
  </Text>
);
export const LinkTag = (props: any) => (
  <Link as="a" fontWeight="700" color="orange.400" href={props.href}>
    {props.children}
  </Link>
);

export const Paragraph = (props: any) => (
  <Text lineHeight="1.2">{props.children}</Text>
);

export const Code = (_props: any) => (
  <Text fontWeight={"thin"} color="purple.400">
    {_props.children}
  </Text>
);

export const HR = (_props: any) => {
  const h2Color = useColorModeValue("#3d5a80", "#e0fbfc");
  return <Box my="60px" h="1px" bgColor={h2Color} />;
};
