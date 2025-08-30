import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Nav } from "../components/Nav";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { WorkSection } from "../components/WorkSection";
import { EducationSection } from "../components/EducationSection";
import { AwardsSection } from "../components/AwardsSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle/>

      {/* Background Effects */}
      <StarBackground/>

      {/* Navbar */}
      <Nav/>

      {/* Main Content */}
      <main>
        <HeroSection/>
        <AboutSection/>
        <EducationSection/>
        <WorkSection/>
        <SkillSection/>
        <ProjectSection/>
        <AwardsSection/>
        <ContactSection/>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};
