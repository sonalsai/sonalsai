import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import profileImg from "../../assets/sonalsai.jpeg";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { scrollToSection as scrollToSectionUtil } from "../../utils/scrollToSection";

// Single source of truth for the in-page navigation links
const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

const CONTACT_EMAIL = "sonalsai777@gmail.com";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const threshold = heroHeight * 0.18;
      const isScrolled = window.scrollY > threshold;
      setScrolled(isScrolled);

      // Active section detection
      const sections = ["hero", "about", "skills", "projects"];
      // Use a consistent offset (e.g. 1/3 viewport) to trigger change before top hits
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      scrollToSectionUtil(id, () => setSidebarOpen(false));
    } else {
      setSidebarOpen(false);
      navigate("/", { state: { scrollTo: id } });
    }
  };

  const handleContact = () => {
    setSidebarOpen(false);
    window.location.href = `mailto:${CONTACT_EMAIL}`;
  };

  // Links + CTA + hamburger are identical for both navbar variants
  const renderControls = () => (
    <>
      <div className={styles.links}>
        {navLinks.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`${styles.link} ${
              activeSection === item.id ? styles.active : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button className={styles.cta} onClick={handleContact}>
        Contact Me
      </button>

      {/* Mobile hamburger */}
      <button className={styles.hamburger} onClick={() => setSidebarOpen(true)}>
        <HiMenuAlt3 />
      </button>
    </>
  );

  return (
    <>
      {/* Initial full-width navbar - fades out when scrolling */}
      <nav
        className={`${styles.navbar} ${styles.initial} ${
          scrolled ? styles.hidden : ""
        }`}
      >
        <div className={styles.container}>
          <div
            className={styles.logoWrapper}
            onClick={() => scrollToSection("hero")}
          >
            <span className={styles.logoText}>Sonal Sai</span>
          </div>

          {renderControls()}
        </div>
      </nav>

      {/* Scrolled pill navbar - drops down from top */}
      <nav
        className={`${styles.navbar} ${styles.pill} ${
          scrolled ? styles.visible : ""
        }`}
      >
        <div className={styles.container}>
          <div
            className={styles.logoWrapper}
            onClick={() => scrollToSection("hero")}
          >
            <img src={profileImg} alt="Profile" className={styles.navProfile} />
          </div>

          {renderControls()}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.profileWrapper}>
            <img
              src={profileImg}
              alt="Profile"
              className={styles.sidebarProfile}
            />
            <div className={styles.profileInfo}>
              <span className={styles.sidebarName}>Sonal Sai</span>
              <span className={styles.sidebarTitle}>Full Stack Developer</span>
            </div>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => setSidebarOpen(false)}
          >
            <HiX />
          </button>
        </div>

        <div className={styles.sidebarContent}>
          <button
            onClick={() => scrollToSection("hero")}
            className={styles.sidebarLink}
          >
            Home
          </button>
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={styles.sidebarLink}
            >
              {item.label}
            </button>
          ))}
          <button className={styles.sidebarCta} onClick={handleContact}>
            Contact Me
          </button>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
