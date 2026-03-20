import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { StudentExperience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { MiniProjects } from "@/components/MiniProjects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground grain-overlay">
      <Navigation />
      <main>
        <Hero />
        <About />
        <StudentExperience />
        <Projects />
        <TechStack />
        <Testimonials />
        <MiniProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
