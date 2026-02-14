import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StudentExperience } from "@/components/Experience";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <About />
        <StudentExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
