import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import styles from "./AboutPage.module.scss";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";

const AboutPage = () => {
  useDocumentMeta({
    title: "About Sonal Sai - Full Stack & Frontend Developer",
    description:
      "Sonal Sai is a full stack developer and frontend developer in Thrissur, Kerala, building real-time React web apps at AOT Technologies.",
    path: "/about",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.container}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.title}>My Journey</h1>
            <p className={styles.subtitle}>
              From writing my first line of code to shipping production,
              real-time web applications.
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>Who I Am</h2>
            <div className={styles.bio}>
              <p>
                I’m Sonal Sai, a full stack developer and frontend developer
                based in Thrissur, Kerala, with production experience building
                performant, real-time web applications. I specialize in crafting
                responsive, accessible React interfaces with a strong eye for
                component architecture, state management, and UI performance.
              </p>
              <p>
                The frontend is where I’m most at home, but I’m equally
                comfortable extending into backend services when a project
                demands it. At AOT Technologies I shipped a production VoIP
                transcription system integrating Twilio Media Streams and
                Deepgram AI, and built event-driven workflows with Python and
                NATS — turning ambiguous requirements into polished,
                production-ready solutions.
              </p>
            </div>
          </motion.section>

          {/* Timeline Section */}
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className={styles.sectionTitle}>Experience & Education</h2>
            <div className={styles.timeline}>
              <div className={styles.item}>
                <span className={styles.year}>June 2024 - Present</span>
                <h3 className={styles.role}>Junior Software Engineer</h3>
                <p className={styles.company}>AOT Technologies · Trivandrum</p>
                <p className={styles.description}>
                  Architected and shipped a production VoIP transcription system
                  using Twilio Media Streams and Deepgram AI, built responsive
                  React interfaces for real-time workflows with live WebSocket
                  updates, and implemented event-driven services with Python and
                  NATS for scalable, low-latency communication.
                </p>
              </div>

              <div className={styles.item}>
                <span className={styles.year}>2021 - 2024</span>
                <h3 className={styles.role}>Diploma in Computer Engineering</h3>
                <p className={styles.company}>
                  Maharaja’s Technological Institute (MTI), Thrissur
                </p>
                <p className={styles.description}>
                  Focused on Data Structures, Algorithms, Web Development, and
                  Software Engineering principles. Graduated with a CGPA of
                  7.8 / 10.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
