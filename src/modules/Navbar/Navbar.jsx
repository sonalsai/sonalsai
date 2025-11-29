import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import profileImg from "../../assets/profile.jpg";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const threshold = heroHeight * 0.18;
      const isScrolled = window.scrollY > threshold;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    setSidebarOpen(false); // Close sidebar after navigation

    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const startPosition = window.scrollY;
    const targetPosition = elementPosition + startPosition - offset;
    const distance = targetPosition - startPosition;
    const duration = 1500;
    let start = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

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

          <div className={styles.links}>
            <button
              onClick={() => scrollToSection("skills")}
              className={styles.link}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={styles.link}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={styles.link}
            >
              About
            </button>
          </div>

          <button className={styles.cta}>Contact Me</button>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setSidebarOpen(true)}
          >
            <HiMenuAlt3 />
          </button>
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

          <div className={styles.links}>
            <button
              onClick={() => scrollToSection("skills")}
              className={styles.link}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={styles.link}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={styles.link}
            >
              About
            </button>
          </div>

          <button className={styles.cta}>Contact Me</button>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setSidebarOpen(true)}
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <img
            src={profileImg}
            alt="Profile"
            className={styles.sidebarProfile}
          />
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
          <button
            onClick={() => scrollToSection("skills")}
            className={styles.sidebarLink}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={styles.sidebarLink}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={styles.sidebarLink}
          >
            About
          </button>
          <button className={styles.sidebarCta}>Contact Me</button>
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
