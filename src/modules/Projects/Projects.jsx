import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiSocketdotio,
  SiTypescript,
  SiRedux,
  SiFramer,
} from "react-icons/si";
import styles from "./Projects.module.scss";

const Projects = () => {
  const [activeImageIndex, setActiveImageIndex] = useState({});

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      name: "Real-Time Audio Transcription Platform",
      description:
        "A sophisticated platform enabling live audio transcription using Twilio Media Streams and Deepgram AI. Features real-time WebSocket communication, audio processing pipelines, and seamless telephony integration.",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Socket.IO", icon: <SiSocketdotio /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Express", icon: <SiExpress /> },
      ],
      status: "completed", // completed, inprogress, onhold
      deployed: true,
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://project1.vercel.app",
      images: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      ],
    },
    {
      id: 2,
      name: "Interactive Portfolio Website",
      description:
        "A modern, glassmorphic portfolio showcasing technical skills with animated components, responsive design, and smooth micro-interactions. Built with React and Framer Motion for premium user experience.",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Framer Motion", icon: <SiFramer /> },
        { name: "SCSS", icon: <SiReact /> },
      ],
      status: "inprogress",
      deployed: true,
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://yourportfolio.com",
      images: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      ],
    },
    {
      id: 3,
      name: "E-Commerce Dashboard",
      description:
        "Full-stack e-commerce admin dashboard with real-time analytics, inventory management, and order processing. Features Redux state management and responsive data visualization.",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
      status: "onhold",
      deployed: false,
      githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
      liveUrl: null,
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop",
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => {
        const nextState = { ...prev };
        projects.forEach((project) => {
          const currentIndex = prev[project.id] || 0;
          nextState[project.id] = (currentIndex + 1) % project.images.length;
        });
        return nextState;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleManualImageChange = (projectId) => {
    setActiveImageIndex((prev) => {
      const project = projects.find((p) => p.id === projectId);
      const currentIndex = prev[projectId] || 0;
      const nextIndex = (currentIndex + 1) % project.images.length;
      return { ...prev, [projectId]: nextIndex };
    });
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
          <p className={styles.subtitle}>
            A curated selection of work that demonstrates technical expertise
            and creative problem-solving
          </p>
        </motion.div>
      </div>

      {/* Projects List */}
      <div className={styles.projectsList}>
        {projects.map((project, index) => {
          const currentImageIndex = activeImageIndex[project.id] || 0;
          const statusBadge = getStatusBadge(project.status);

          return (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0.8, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.7 }}
              transition={{
                duration: 0.1,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              {/* Image Carousel - Left Side */}
              <div
                className={styles.imageCarousel}
                onClick={() => handleManualImageChange(project.id)}
                style={{ cursor: "pointer" }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]}
                    alt={project.name}
                    className={styles.carouselImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className={styles.carouselIndicators}>
                  {project.images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`${styles.indicator} ${
                        idx === currentImageIndex ? styles.active : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Info - Right Side */}
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
    </section>
  );
};

export default Projects;
