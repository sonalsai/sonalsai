import { useState } from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import styles from "./HeroSection.module.scss";
import profileImg from "../../assets/sonalsai.jpeg";

const HeroSection = () => {
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);

  const calculateExperience = () => {
    const startDate = new Date("2024-06-10");
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - startDate);
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    return diffYears.toFixed(1);
  };

  const experience = calculateExperience();

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.backgroundCode}>
        {/* Abstract code background */}
        <div className={styles.codeRow}>
          const <span className={styles.var}>future</span> ={" "}
          <span className={styles.str}>"Loading..."</span>;
        </div>
        <div className={styles.codeRow}>
          import <span className={styles.comp}>Success</span> from{" "}
          <span className={styles.lib}>'./life'</span>;
        </div>
        <div className={styles.codeRow}>
          <span className={styles.kwd}>async function</span>{" "}
          <span className={styles.fn}>dream</span>() {"{"}
        </div>
        <div className={styles.codeRow}>
          &nbsp;&nbsp;<span className={styles.kwd}>await</span>{" "}
          <span className={styles.fn}>build</span>(
          <span className={styles.obj}>legacy</span>);
        </div>
        <div className={styles.codeRow}>{"}"}</div>
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.badge}>Frontend Developer</div>
          <h1 className={styles.title}>Solve, Build, Execute</h1>
          <p className={styles.description}>
            I transform ideas and complex logic into clean, functional
            experiences.
          </p>
          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button
              className={`${styles.btn} ${styles.btnPrimary}`}
              onMouseEnter={() => setIsDownloadHovered(true)}
              onMouseLeave={() => setIsDownloadHovered(false)}
            >
              <span>Download CV</span>
              <motion.span
                className={styles.btnIcon}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isDownloadHovered ? 1 : 0,
                  x: isDownloadHovered ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
              >
                <HiDownload />
              </motion.span>
            </button>
            <button
              className={`${styles.btn} ${styles.btnSecondary}`}
              onMouseEnter={() => setIsProjectsHovered(true)}
              onMouseLeave={() => setIsProjectsHovered(false)}
            >
              <span>See Projects</span>
              <motion.span
                className={styles.btnIcon}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isProjectsHovered ? 1 : 0,
                  x: isProjectsHovered ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
              >
                <BsArrowRight />
              </motion.span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glassmorphic Card */}
          <motion.div
            className={styles.profileCard}
            initial={{
              height:
                typeof window !== "undefined" && window.innerWidth <= 768
                  ? "220px"
                  : "460px",
              maxHeight:
                typeof window !== "undefined" && window.innerWidth <= 768
                  ? "220px"
                  : "460px",
              minHeight: "220px",
              opacity: 0,
              borderRadius: "24px",
            }}
            animate={{
              height: "100%",
              maxHeight: "460px",
              minHeight: "220px",
              opacity: 1,
              borderRadius: "24px",
            }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* Image Wrapper */}
            <div className={styles.imageWrapper}>
              <img
                src={profileImg}
                alt="Sonal Sai"
                className={styles.profileImage}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className={styles.placeholder}>
                <span>SS</span>
              </div>
            </div>

            {/* Card Content */}
            <motion.div
              className={styles.cardContent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <h3 className={styles.cardName}>Sonal Sai</h3>
              <p className={styles.cardPosition}>Frontend Developer</p>
              <p className={styles.cardExperience}>
                {experience} Years Experience
              </p>
              <p className={styles.cardMotto}>UI • Logic • Performance</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
