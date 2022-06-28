import { Heading, useColorModeValue, Text, Link } from "@chakra-ui/react";

export const Header1 = (props) => {
  const h1Color = useColorModeValue("#22223b", "#d8e2dc");
  return (
    <Heading as="h1" color={h1Color} my={12} fontSize={"48px"} mt={14} mb={10}>
      {props.children}
    </Heading>
  );
};
export const Header2 = (props) => {
  const h2Color = useColorModeValue("#3d5a80", "#e0fbfc");
  return (
    <Heading as="h2" color={h2Color} my={6} fontSize="40px" fontFamily="Sen" mt={12} mb={8}>
      {props.children}
    </Heading>
  );
};
export const Header3 = (props) => {
  const h3Color = useColorModeValue("#6d6875", "#99c1de");
  return (
    <Heading as="h3" color={h3Color} my={6} fontSize="32px" fontFamily="Sen" mt={10} mb={6}>
      {props.children}
    </Heading>
  );
};

export const Header4 = (props) => (
  <Heading as="h4" fontWeight="700" fontSize="26px" mb={3} mt={6}>
    {props.children}
  </Heading>
);
export const Header5 = (props) => (
  <Heading as="h5" fontWeight="600" fontSize="22px" mt={6} mb={2} >
    {props.children}
  </Heading>
);
export const Header6 = (props) => <Heading as="h6">{props.children}</Heading>;

export const BoldText = (props) => <Text as="span" fontWeight="700" color="red.400">{props.children}</Text>
export const LinkTag = (props) =>  <Link as="a" fontWeight="700" color="orange.400" href={props.href}>{props.children}</Link>;

export const Paragraph = (props) => <Text>{props.children}</Text>;
