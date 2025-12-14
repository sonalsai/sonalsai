import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { projects } from "../../constants/data";
import styles from "./Projects.module.scss";

const Projects = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 500; // Adjust based on card width
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };
  const getStatusBadge = (status) => {
    const statusConfig = {
      completed: { label: "Completed", className: styles.statusCompleted },
      inprogress: { label: "In Progress", className: styles.statusInProgress },
      onhold: { label: "On Hold", className: styles.statusOnHold },
    };
    return statusConfig[status];
  };

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle} style={{ marginBottom: "10px" }}>
            Here are some of my recent projects that showcase my skills and
            expertise in web development.
          </p>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className={styles.navigationWrapper}>
        <motion.button
          className={`${styles.navButton} ${styles.navLeft}`}
          onClick={() => scroll("left")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous project"
        >
          <FaChevronLeft />
        </motion.button>

        {/* Projects List */}
        <div className={styles.projectsList} ref={scrollContainerRef}>
          {projects.map((project, index) => {
            const statusBadge = getStatusBadge(project.status);

            return (
              <motion.div
                key={project.id}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                {/* Project Info */}
                <div className={styles.projectInfo}>
                  {/* Badges Row */}
                  <div className={styles.badgesRow}>
                    <span
                      className={`${styles.statusBadge} ${statusBadge.className}`}
                    >
                      {statusBadge.label}
                    </span>
                    <span
                      className={`${styles.deploymentBadge} ${
                        project.deployed ? styles.deployed : styles.notDeployed
                      }`}
                    >
                      {project.deployed ? "Deployed" : "Not Deployed"}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3 className={styles.projectName}>{project.name}</h3>

                  {/* Technologies */}
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        className={styles.techBadge}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className={styles.techIcon}>{tech.icon}</span>
                        <span className={styles.techName}>{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className={styles.description}>{project.description}</p>

                  {/* Action Buttons */}
                  <div className={styles.actions}>
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionButton}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub />
                        <span>View Code</span>
                        <FaArrowRight className={styles.arrow} />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.actionButton} ${styles.primary}`}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                        <FaArrowRight className={styles.arrow} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.button
          className={`${styles.navButton} ${styles.navRight}`}
          onClick={() => scroll("right")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next project"
        >
          <FaChevronRight />
        </motion.button>
      </div>
    </section>
  );
};

export default Projects;
