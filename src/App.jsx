import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HeroSection from "./modules/HeroSection/HeroSection";
import Navbar from "./modules/Navbar/Navbar";
import Skills from "./modules/Skills/Skills";
import Projects from "./modules/Projects/Projects";
import AboutSection from "./modules/AboutSection/AboutSection";
import AboutPage from "./modules/AboutPage/AboutPage";
import { scrollToSection } from "./utils/scrollToSection";
import { useDocumentMeta } from "./hooks/useDocumentMeta";

const LandingPage = () => {
  const location = useLocation();

  useDocumentMeta({
    title: "Sonal Sai - Full Stack & Frontend Developer",
    description:
      "Sonal Sai is a full stack developer and frontend developer in Thrissur, India, building real-time React & Node.js web apps. View projects & résumé.",
    path: "/",
  });

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
      // Clear state to prevent scroll on refresh would require useNavigate but this is simple enough
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <main role="main">
      <header role="banner">
        <Navbar />
      </header>
      <section aria-label="Hero Section">
        <HeroSection />
      </section>
      <section aria-label="About Section">
        <AboutSection />
      </section>
      <section aria-label="Skills Section">
        <Skills />
      </section>
      <section aria-label="Projects Section">
        <Projects />
      </section>
    </main>
  );
};

function App() {
  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
