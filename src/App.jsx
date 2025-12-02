import HeroSection from "./modules/HeroSection/HeroSection";
import Navbar from "./modules/Navbar/Navbar";
import Skills from "./modules/Skills/Skills";
import Projects from "./modules/Projects/Projects";

function App() {
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
