import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import styles from "./HeroSection.module.scss";
import profileImg from "../../assets/profile.jpg";

const HeroSection = () => {
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <section className={styles.hero}>
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
          <div
            className={styles.imageWrapper}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            {/* Profile Image - Always Visible */}
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

            {/* Glassmorphic Card - Appears on Hover */}
            <motion.div
              className={styles.profileCard}
              initial={{
                height: "360px",
                opacity: 0,
                borderRadius: "50%",
              }}
              animate={{
                height: isImageHovered ? "500px" : "360px",
                opacity: isImageHovered ? 1 : 0,
                borderRadius: isImageHovered ? "24px" : "50%",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className={styles.cardContent}
                initial={{ opacity: 0 }}
                animate={{ opacity: isImageHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <h3 className={styles.cardName}>Sonal Sai</h3>
                <p className={styles.cardPosition}>Frontend Developer</p>
                <p className={styles.cardExperience}>1.6 Years Experience</p>
                <p className={styles.cardMotto}>UI • Logic • Performance</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
