import { ContactSection } from "../components/ContactSection";
import { GetToKnowSection } from "../components/GetToKnowSection";
import Layout from "../components/Layout";
import { PresentationSection } from "../components/PresentationSection";
import { ProjectSection } from "../components/ProjectSection";
import { SkillSection } from "../components/SkillSection";
import { getAllProjects } from "../lib/getAllProjects";

export default function Home({ projects }) {
  return (
    <Layout title="YB - Porfolio" description="Yassine Belkhadem is a software engineering student, passionated by computers and all the services they can offer. This portfolio is a showcase for projects he has done and skills he has learnt during his still going journey. #programming #cybersecurity " imageLink="https://res.cloudinary.com/dsdvvwb8v/image/upload/v1659869790/portfolio_view.png">
      <PresentationSection />
      <GetToKnowSection />
      <SkillSection />
      <ProjectSection projects={projects} />
      <ContactSection />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: {
      projects: projects ? projects : [],
    },
    revalidate: 60 * 5,
  };
};
