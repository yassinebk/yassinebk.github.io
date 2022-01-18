import { Chakra } from "../components/getUserTheme";
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
