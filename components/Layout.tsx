import React from "react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

import { Body } from "./Body";
import { SideLinks } from "./SideLinks";

interface LayoutProps {
  title: string;
  isFooterPresent?: boolean;
  description?: string;
  imageLink?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  imageLink,
  isFooterPresent = true,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preload" as="font" href=""></link>
        <meta
          name="description"
          content={
            description ? description : "Yassine Belkhadem Portfolio Website"
          }
          key="desc"
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={
            description ? description : "Yassine Belkhadem Portfolio Website"
          }
        />
        {imageLink && <meta property="og:image" content={imageLink} />}
        <meta
          name="google-site-verification"
          content="8uYSPvcdlfOzE8ienPTU-uSpjLTnUIyRKDOBDnlzWmg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SideLinks />
      <Body isFooterPresent={isFooterPresent}>{children}</Body>
      <Footer />
    </>
  );
};

export default Layout;
