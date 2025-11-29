import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaAngular } from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiTwilio,
  SiPostman,
  SiJavascript,
  SiJest,
} from "react-icons/si";
import {
  MdDevices,
  MdPlayCircleOutline,
  MdAudiotrack,
  MdMic,
  MdFiberManualRecord,
  MdGraphicEq,
  MdWaves,
  MdRecordVoiceOver,
  MdSubtitles,
  MdAutoAwesome,
} from "react-icons/md";
import { TbBrandSocketIo } from "react-icons/tb";
import { AiOutlineAudio } from "react-icons/ai";

import styles from "./Skills.module.scss";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categoryDescriptions = {
    frontend: "Building interactive, scalable, and aesthetic web experiences.",
    backend: "Server-side logic, APIs, and scalable data architecture.",
    realtime: "Low-latency systems for audio, streaming, and live data.",
    tools: "Development workflow, testing, and productivity tools.",
    other: "Audio processing, AI pipelines, and specialized technologies.",
  };

  const categories = [
    { id: "frontend", label: "Frontend", icon: "🎨" },
    { id: "backend", label: "Backend", icon: "⚙️" },
    { id: "realtime", label: "Real-Time", icon: "📡" },
    { id: "tools", label: "Tools", icon: "🚀" },
    { id: "other", label: "Other", icon: "🔧" },
  ];

  const skills = {
    frontend: [
      {
        name: "React.js",
        context: "UI architecture & interactive experiences",
        icon: <FaReact />,
        tags: ["UI", "Components", "Hooks"],
      },
      {
        name: "Angular",
        context: "Scalable enterprise applications",
        icon: <FaAngular />,
        tags: ["Enterprise", "TypeScript", "RxJS"],
      },
      {
        name: "JavaScript",
        context: "Core web interactivity",
        icon: <SiJavascript />,
        tags: ["ES6+", "DOM", "Async"],
      },
      {
        name: "TypeScript",
        context: "Strong typing for scalable apps",
        icon: <SiTypescript />,
        tags: ["Types", "Interfaces", "Generics"],
      },
      {
        name: "Redux Toolkit",
        context: "Global state & async flows",
        icon: <SiRedux />,
        tags: ["State", "Actions", "Slices"],
      },
      {
        name: "Framer Motion",
        context: "Smooth animations & transitions",
        icon: <SiFramer />,
        tags: ["Animation", "Gestures", "Variants"],
      },
      {
        name: "Responsive Design",
        context: "Adaptive layouts across devices",
        icon: <MdDevices />,
        tags: ["Mobile", "Grid", "Flex"],
      },
    ],

    backend: [
      {
        name: "Node.js",
        context: "APIs, event-driven logic, servers",
        icon: <FaNodeJs />,
        tags: ["Runtime", "Event-Loop", "Async"],
      },
      {
        name: "Express.js",
        context: "Routing, middleware, REST services",
        icon: <SiExpress />,
        tags: ["API", "Routing", "Middleware"],
      },
      {
        name: "MongoDB",
        context: "Data modeling & scalable storage",
        icon: <SiMongodb />,
        tags: ["NoSQL", "Schemas", "Queries"],
      },
    ],

    realtime: [
      {
        name: "WebSockets",
        context: "Live communication systems",
        icon: <TbBrandSocketIo />,
        tags: ["Bidirectional", "Persistent", "Live"],
      },
      {
        name: "Socket.IO",
        context: "Low-latency messaging",
        icon: <SiSocketdotio />,
        tags: ["Events", "Rooms", "Broadcasting"],
      },
      {
        name: "Twilio Media Streams",
        context: "Real-time audio ingestion",
        icon: <SiTwilio />,
        tags: ["Audio", "Streaming", "Telephony"],
      },
      {
        name: "Deepgram",
        context: "Streaming speech-to-text pipelines",
        icon: <AiOutlineAudio />,
        tags: ["STT", "AI", "Transcription"],
      },
    ],

    tools: [
      {
        name: "Git & GitHub",
        context: "Version control & workflows",
        icon: <FaGitAlt />,
        tags: ["Versioning", "Branching", "CI/CD"],
      },
      {
        name: "Postman",
        context: "API testing & debugging",
        icon: <SiPostman />,
        tags: ["Testing", "REST", "Automation"],
      },
      {
        name: "MongoDB Atlas",
        context: "Cloud database management",
        icon: <SiMongodb />,
        tags: ["Cloud", "Monitoring", "Scaling"],
      },
      {
        name: "Playwright",
        context: "End-to-end testing",
        icon: <MdPlayCircleOutline />,
        tags: ["E2E", "Testing", "Automation"],
      },
      {
        name: "Jest",
        context: "Unit & integration testing",
        icon: <SiJest />,
        tags: ["Unit", "Mocking", "Coverage"],
      },
    ],

    other: [
      {
        name: "FFmpeg",
        context: "Audio processing & transformation",
        icon: <MdAudiotrack />,
        tags: ["Encoding", "Format", "Processing"],
      },
      {
        name: "MediaRecorder API",
        context: "Browser audio capture",
        icon: <MdMic />,
        tags: ["Recording", "Browser", "Capture"],
      },
      {
        name: "Recorder.js",
        context: "Raw audio buffer handling",
        icon: <MdFiberManualRecord />,
        tags: ["Buffers", "WAV", "PCM"],
      },
      {
        name: "PCM / PCMU codecs",
        context: "Audio encoding standards",
        icon: <MdGraphicEq />,
        tags: ["Codecs", "Compression", "Standards"],
      },
      {
        name: "Audio Streaming Pipelines",
        context: "Real-time audio flow architecture",
        icon: <MdWaves />,
        tags: ["Pipeline", "Flow", "Real-time"],
      },
      {
        name: "Deepgram STT",
        context: "Speech-to-text API integration",
        icon: <MdRecordVoiceOver />,
        tags: ["STT", "AI", "Integration"],
      },
      {
        name: "Real-time transcription",
        context: "Live audio to text conversion",
        icon: <MdSubtitles />,
        tags: ["Live", "Transcription", "STT"],
      },
      {
        name: "AI streaming pipelines",
        context: "Continuous AI data processing",
        icon: <MdAutoAwesome />,
        tags: ["AI", "Streaming", "Processing"],
      },
    ],
  };

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
          <h2 className={styles.title}>Technical Arsenal</h2>
          <p className={styles.subtitle}>
            A refined set of capabilities shaped through real-world problem
            solving
          </p>
        </motion.div>

        {/* Category Selector */}
        <div className={styles.categories}>
          {categories.map((cat, index) => (
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

        {/* Category Description */}
        <motion.p
          className={styles.categoryDescription}
          key={activeCategory}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {categoryDescriptions[activeCategory]}
        </motion.p>

        {/* Skills Grid */}
        <motion.div className={styles.skillsGrid} layout>
          <AnimatePresence mode="popLayout">
            {skills[activeCategory].map((skill, idx) => (
              <motion.div
                key={skill.name}
                className={styles.skillCard}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  ease: [0.25, 0.8, 0.25, 1],
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
