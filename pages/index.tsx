import { ContactSection } from "../components/ContactSection";
import { GetToKnowSection } from "../components/GetToKnowSection";
import Layout from "../components/Layout";
import { PresentationSection } from "../components/PresentationSection";
import { ProjectSection } from "../components/ProjectSection";
import { SkillSection } from "../components/SkillSection";
import { getAllProjects } from "../lib/getAllProjects";

export default function Home({projects}) {
  return (
    <Layout title="YB - Porfolio">
      <PresentationSection />
      <GetToKnowSection />
      <SkillSection />
      <ProjectSection projects={projects}/>
      <ContactSection />
    </Layout>
  );
}
export const getStaticProps = async () => {
  const projects = await getAllProjects();
  console.log("projects", projects);
  return {
    props: {
      projects: projects ? projects : [],
    },
  };
};
