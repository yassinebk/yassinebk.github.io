import "../styles/globals.css";
import Fonts from "../styles/fonts";
import { Chakra } from "../components/getUserTheme";

function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}

export default MyApp;

export { getServerSideProps } from "../components/getUserTheme";
