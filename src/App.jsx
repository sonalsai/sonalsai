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
    <main>
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
