/* pages/_document.js */

import NextDocument, {
  Html, Head, Main, NextScript,
} from 'next/document';
import link from 'next/link';

class Document extends NextDocument {
  render() {
    return ( <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Iceland&family=Sen:wght@400;700;800&display=swap" rel="stylesheet"/>
        <link href="/fonts/Inversionz_Unboxed.ttf"/>
          <link
            rel="stylesheet"
            href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;