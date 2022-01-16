import React from "react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

import { Body } from "./Body";
import { SideLinks } from "./SideLinks";

interface LayoutProps {
  title: string;
}

 const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Yassine Belkhadem Portfolio Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SideLinks />
      <Body>{children}</Body>
      <Footer />
    </>
  );
};

export default Layout;