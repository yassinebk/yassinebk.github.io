import { ContactSection } from "../components/ContactSection";
import { GetToKnowSection } from "../components/GetToKnowSection";
import Layout from "../components/Layout";
import { PresentationSection } from "../components/PresentationSection";
import { ProjectSection } from "../components/ProjectSection";
import { SkillSection } from "../components/SkillSection";

export default function Home() {
  return (
    <Layout title="YB - Porfolio">
      <PresentationSection />
      <GetToKnowSection />
      <SkillSection />
      <ProjectSection/>
      <ContactSection/>
    </Layout>
  );
}
