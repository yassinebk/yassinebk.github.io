import { Heading, useColorModeValue } from "@chakra-ui/react";

export const Header1 = (props) => {
  const h1Color = useColorModeValue("#22223b", "#d8e2dc");
  return (
      <Heading as="h1" color={h1Color} my={12} fontSize={"40px"}>
      {props.children}
    </Heading>
  );
};
export const Header2 = (props) => {
  const h2Color = useColorModeValue("#3d5a80", "#e0fbfc");
  return (
    <Heading as="h2" color={h2Color} my={6} fontSize="33px" fontFamily="Sen">
      {props.children}
    </Heading>
  );
};
export const Header3 = (props) => {
  const h3Color = useColorModeValue("#6d6875", "#99c1de");
  return (
    <Heading as="h3" color={h3Color} my={6} fontSize="32px" fontFamily="Sen">
      {props.children}
    </Heading>
  );
};

export const Header4 = (props) => (
  <Heading as="h4" fontWeight="400" fontSize="28px" my={2}>
    {props.children}
  </Heading>
);
export const Header5 = (props) => (
  <Heading as="h5" fontWeight="500" fontSize="26px" my={1}>
    {props.children}
  </Heading>
);
export const Header6 = (props) => <Heading as="h6">{props.children}</Heading>;
