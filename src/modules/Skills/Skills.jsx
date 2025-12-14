import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, skills } from "../../constants/data";
import styles from "./Skills.module.scss";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Skills and Technologies</h2>
          <p className={styles.subtitle}>
            Skills that I have acquired through hands-on experience and
            self-directed learning
          </p>
        </motion.div>

        {/* Category Selector */}
        <div className={styles.categories}>
          {skillCategories.map((cat, index) => (
            <motion.button
              key={cat.id}
              className={`${styles.categoryBtn} ${
                activeCategory === cat.id ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div className={styles.skillsGrid} layout>
          <AnimatePresence>
            {skills[activeCategory].map((skill, idx) => (
              <motion.div
                key={skill.name}
                className={styles.skillCard}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{
                  duration: 0.3,
                  delay: idx * 0.03,
                  ease: "easeOut",
                }}
                viewport={{ once: false, amount: 0.1 }}
              >
                <div className={styles.iconWrapper}>{skill.icon}</div>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <p className={styles.skillContext}>{skill.context}</p>
                {skill.tags && (
                  <div className={styles.skillTags}>
                    {skill.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
