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