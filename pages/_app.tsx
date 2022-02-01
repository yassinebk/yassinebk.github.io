import { Chakra } from "../components/getUserTheme";
import Fonts from "../styles/fonts";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}

export default MyApp;

export { getServerSideProps } from "../components/getUserTheme";
