import { useEffect } from "react";
import HeroSection from "./modules/HeroSection/HeroSection";
import Navbar from "./modules/Navbar/Navbar";
import Skills from "./modules/Skills/Skills";
import Projects from "./modules/Projects/Projects";

function App() {
  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main role="main">
      <header role="banner">
        <Navbar />
      </header>
      <section id="hero" aria-label="Hero Section">
        <HeroSection />
      </section>
      <section id="skills" aria-label="Skills Section">
        <Skills />
      </section>
      <section id="projects" aria-label="Projects Section">
        <Projects />
      </section>
    </main>
  );
}

export default App;
