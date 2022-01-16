import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  fonts: {
    heading: "Iceland",
    body: "Iceland",
  },

  styles: {
    global: (props)=>({
      body:{
        bg: mode("lightBackground", "darkBackground")(props),
        color:mode("lightSecondary","lightBackground")(props)
      }
    }),
  },
  colors: {
    darkBackground: "#16222A",
    lightSecondary: "#143258",
    cardDark: "#25313A",
    cardDark2: "#293640",
    darkSecondary: "#CFE4FF",
    lightBackground: "#ECEEF1",
  },
});

export default theme