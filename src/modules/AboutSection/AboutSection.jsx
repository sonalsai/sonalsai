import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./AboutSection.module.scss";
import { useState } from "react";

const AboutSection = () => {
  // State to manage the sequence strictly
  const [isGreetingComplete, setIsGreetingComplete] = useState(false);

  return (
    <section className={styles.about} id="about">
      <div className={styles.background}>
        <div className={styles.blob} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.contentWrapper}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Greeting Animation */}
          <motion.div
            className={styles.greetingWrapper}
            style={{
              position: isGreetingComplete ? "relative" : "absolute",
              width: "100%", // Ensure it keeps width when switching
            }}
            variants={{
              initial: {
                opacity: 0,
                scale: 0.8,
                top: "50%",
                y: "-50%",
                // positioning handled by style prop/state
              },
              animate: {
                opacity: 1,
                scale: 1,
                top: "0%",
                y: "0%",
                transition: {
                  opacity: { duration: 0.8, ease: "easeOut" },
                  scale: { duration: 0.8, ease: "easeOut" },
                  top: {
                    duration: 0.7,
                    delay: 1.5,
                    ease: [0.25, 0.1, 0.25, 1.0],
                  },
                  y: {
                    duration: 0.7,
                    delay: 1.5,
                    ease: [0.25, 0.1, 0.25, 1.0],
                  },
                },
              },
            }}
            onAnimationComplete={(definition) => {
              // Only trigger on the main animation completion
              if (definition === "animate") {
                setIsGreetingComplete(true);
              }
            }}
          >
            <h2 className={styles.greeting}>Hi, I’m Sonal Sai</h2>
          </motion.div>

          {/* Main Content - Renders only when greeting is relative/done */}
          {isGreetingComplete && (
            <motion.div
              className={styles.textContent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.text}>
                <p>
                  I’m a frontend-focused full-stack developer who builds
                  performant, real-time web applications with clean architecture
                  and a strong eye for UI performance.
                </p>
                <p>
                  I craft responsive React interfaces and extend into backend
                  services when needed — developing real-time features and
                  integrating AI-driven functionality to deliver
                  production-ready solutions.
                </p>
              </div>

              <div className={styles.actions}>
                <Link
                  to="/about"
                  className={`${styles.btn} ${styles.btnPrimary}`}
                >
                  <span>Wanna know more</span>
                  <BsArrowRight className={styles.icon} />
                </Link>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
