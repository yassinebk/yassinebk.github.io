import { GetToKnowSection } from "../components/GetToKnowSection";
import Layout from "../components/Layout";
import { PresentationSection } from "../components/PresentationSection";

export default function Home() {
  return (
    <Layout title="YB - Porfolio">
      <PresentationSection />
      <GetToKnowSection />
    </Layout>
  );
}
