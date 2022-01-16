import { GetToKnowSection } from "../components/GetToKnowSection";
import Layout from "../components/Layout";
import { PresentationSection } from "../components/PresentationSection";
import { SkillSection } from "../components/SkillSection";

export default function Home() {
  return (
    <Layout title="YB - Porfolio">
      <PresentationSection />
      <GetToKnowSection />
      <SkillSection />
    </Layout>
  );
}
