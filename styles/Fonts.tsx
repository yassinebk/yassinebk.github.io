import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Inversionz Unboxed';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/Inversionz_Unboxed.ttf') ;
      }
      `}
  />
);

export default Fonts;
