import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { PageLayout } from "../components/PageLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>YB - Portfolio</title>
        <meta
          name="description"
          content="Yassine Belkhadem Portfolio Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Navbar/>
      </PageLayout>
    </div>
  );
}
