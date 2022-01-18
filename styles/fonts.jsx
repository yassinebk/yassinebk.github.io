import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={` 
@font-face{ 
    font-family:'Inversionz Unboxed';
    src: url('./fonts/Inversionz_Unboxed.ttf') ;
    font-display:swap
    
 ;}
`}
  />
);

export default Fonts;
