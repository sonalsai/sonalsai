import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          Sonal Sai
        </div>
        
        <div className={styles.links}>

          <a href="#skills" className={styles.link}>Skills</a>
          <a href="#projects" className={styles.link}>Projects</a>
          <a href="#about" className={styles.link}>About</a>
        </div>

        <button className={styles.cta}>
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
