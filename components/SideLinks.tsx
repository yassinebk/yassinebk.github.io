import { Flex, Link } from "@chakra-ui/react";
import React from "react";
import { AiFillLinkedin, AiOutlineFacebook } from "react-icons/ai";
import { useThemeText } from "../hooks/styleHooks";

interface SideLinksProps {}

const FacebookLink = () => {
  const { inversedTextColor, textColor } = useThemeText();
  return (
    <Link
      href="https://www.facebook.com/yassine.belkhadm/"
      _hover={{ color: inversedTextColor, bgColor: textColor }}
    >
      <AiOutlineFacebook size={50} />
    </Link>
  );
};
const LinkedinLink = () => {
  const { inversedTextColor, textColor } = useThemeText();
  return (
    <Link
      href="https://www.linkedin.com/in/yassine-belkhadem-396266204/"
      _hover={{ color: inversedTextColor, bgColor: textColor }}
    >
      <AiFillLinkedin size={50} />
    </Link>
  );
};
const CVLink = () => {
  const { inversedTextColor, textColor } = useThemeText();
  return (
    <Link
      _hover={{ color: inversedTextColor, bgColor: inversedTextColor }}
      href="/assets/YassineBelkhademCV.pdf"
      padding={1}
      bgColor={textColor}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 61 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="61"
          height="43"
          transform="translate(0 0.5)"
          fill="white"
        />
        <path
          d="M26.2354 20.0312C26.2354 18.8594 26.1084 17.9316 25.8545 17.248C25.6006 16.5645 25.1807 16.0469 24.5947 15.6953C24.0088 15.3438 23.2373 15.1191 22.2803 15.0215C21.333 14.9238 20.1562 14.875 18.75 14.875H12.1729C10.9229 14.875 9.86816 14.9141 9.00879 14.9922C8.15918 15.0605 7.45605 15.207 6.89941 15.4316C6.34277 15.6562 5.91309 15.9785 5.61035 16.3984C5.30762 16.8184 5.08789 17.375 4.95117 18.0684C4.81445 18.7617 4.73633 19.6162 4.7168 20.6318C4.69727 21.6377 4.6875 22.8438 4.6875 24.25C4.6875 25.6562 4.69727 26.8672 4.7168 27.8828C4.74609 28.8887 4.8291 29.7383 4.96582 30.4316C5.10254 31.125 5.31738 31.6816 5.61035 32.1016C5.91309 32.5215 6.34277 32.8438 6.89941 33.0684C7.45605 33.293 8.15918 33.4443 9.00879 33.5225C9.86816 33.5908 10.9229 33.625 12.1729 33.625H18.75C19.8438 33.625 20.7861 33.5957 21.5771 33.5371C22.3682 33.4785 23.042 33.3711 23.5986 33.2148C24.1553 33.0586 24.6045 32.8438 24.9463 32.5703C25.2881 32.2969 25.5518 31.9551 25.7373 31.5449C25.9326 31.125 26.0645 30.627 26.1328 30.0508C26.2012 29.4648 26.2354 28.7812 26.2354 28H29.0479C29.0479 28.9375 28.9893 29.7871 28.8721 30.5488C28.7549 31.3008 28.5449 31.9746 28.2422 32.5703C27.9492 33.1562 27.5537 33.6641 27.0557 34.0938C26.5576 34.5234 25.9277 34.8799 25.166 35.1631C24.4043 35.4365 23.4961 35.6367 22.4414 35.7637C21.3867 35.9004 20.1562 35.9688 18.75 35.9688H12.1729C10.4541 35.9688 9.00391 35.8613 7.82227 35.6465C6.65039 35.4414 5.68359 35.1289 4.92188 34.709C4.16016 34.2793 3.56934 33.7422 3.14941 33.0977C2.73926 32.4531 2.43652 31.6963 2.24121 30.8271C2.05566 29.958 1.94824 28.9766 1.91895 27.8828C1.88965 26.7891 1.875 25.5781 1.875 24.25C1.875 22.9219 1.88965 21.7109 1.91895 20.6172C1.94824 19.5234 2.05566 18.542 2.24121 17.6729C2.43652 16.8037 2.73926 16.0469 3.14941 15.4023C3.56934 14.7578 4.16016 14.2256 4.92188 13.8057C5.68359 13.376 6.65039 13.0586 7.82227 12.8535C9.00391 12.6387 10.4541 12.5312 12.1729 12.5312H18.75C20.1562 12.5312 21.3867 12.5996 22.4414 12.7363C23.4961 12.8633 24.4043 13.0635 25.166 13.3369C25.9277 13.6006 26.5576 13.9375 27.0557 14.3477C27.5537 14.7578 27.9492 15.2412 28.2422 15.7979C28.5449 16.3545 28.7549 16.9844 28.8721 17.6875C28.9893 18.3906 29.0479 19.1719 29.0479 20.0312H26.2354ZM56.7188 13H60L47.8125 35.5H44.0625L31.875 13H35.1562L45.9375 33.625L56.7188 13Z"
          fill="#16222A"
        />
      </svg>
    </Link>
  );
};
export const SideLinks: React.FC<SideLinksProps> = ({}) => {
  return (
    <Flex
      zIndex={"banner"}
      position="fixed"
      right={5}
      spacing={1}
      top={["20%"]}
      display={["none", "none", "flex"]}
      flexDir={["row", "row", "column", "column"]}
    >
      <FacebookLink />
      <LinkedinLink />
      <CVLink />
    </Flex>
  );
};
