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
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import {
  MdDevices,
  MdPlayCircleOutline,
  MdAudiotrack,
  MdMic,
  MdFiberManualRecord,
  MdGraphicEq,
  MdWaves,
  MdSubtitles,
  MdAutoAwesome,
} from "react-icons/md";
import { TbBrandSocketIo, TbRocket, TbSettings, TbWifi } from "react-icons/tb";
import { AiOutlineAudio } from "react-icons/ai";
import { BiPalette } from "react-icons/bi";

// ========== SKILLS DATA ==========
export const skillCategories = [
  { id: "frontend", label: "Frontend", icon: <BiPalette /> },
  { id: "backend", label: "Backend", icon: <TbSettings /> },
  { id: "realtime", label: "Real-Time", icon: <TbWifi /> },
  { id: "tools", label: "Tools", icon: <TbRocket /> },
  { id: "other", label: "Other", icon: <MdAutoAwesome /> },
];

export const skills = {
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
    {
      name: "Real-time transcription",
      context: "Live audio to text conversion",
      icon: <MdSubtitles />,
      tags: ["Live", "Transcription", "STT"],
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
      name: "AI streaming pipelines",
      context: "Continuous AI data processing",
      icon: <MdAutoAwesome />,
      tags: ["AI", "Streaming", "Processing"],
    },
  ],
};

// ========== PROJECTS DATA ==========
export const projects = [
  {
    id: 1,
    name: "SwiftDrop Web",
    description:
      "A modern, peer-to-peer file sharing application featuring real-time room-based connections using WebRTC and a custom WebSocket signaling server. Direct browser-to-browser file sharing with secure room-based connections.",
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "WebRTC", icon: <SiSocketdotio /> },
      { name: "Material UI", icon: <SiReact /> },
    ],
    status: "inprogress",
    deployed: true,
    githubUrl: "https://github.com/sonalsai/SwiftDrop-Web",
    liveUrl: "https://swift-drop-web.vercel.app/",
  },
  {
    id: 2,
    name: "Audio Transcription Dashboard",
    description:
      "A real-time speech-to-text dashboard featuring animated recording controls, live transcription with typewriter effect, and persistent sessions. Built with a sophisticated dark theme and glassmorphism design.",
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "Vite", icon: <SiReact /> },
      { name: "SCSS", icon: <SiReact /> },
      { name: "WebSockets", icon: <SiSocketdotio /> },
    ],
    status: "inprogress",
    deployed: true,
    githubUrl: "https://github.com/sonalsai/AudioTranscription",
    liveUrl: "https://audio-transcription-nu.vercel.app/",
  },
  {
    id: 3,
    name: "EazNote",
    description:
      "A Progressive Web App (PWA) for taking, saving, viewing, editing, and deleting notes. Features offline access, password-protected secure notes, favorite marking, and responsive design for all devices.",
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "Vite", icon: <SiReact /> },
      { name: "Sass", icon: <SiReact /> },
      { name: "PWA", icon: <SiReact /> },
    ],
    status: "inprogress",
    deployed: true,
    githubUrl: "https://github.com/sonalsai/EazNote",
    liveUrl: "https://eaz-note.vercel.app/",
  },
  {
    id: 4,
    name: "Guess the Number Game",
    description:
      "A fun interactive game where players guess a number between 1-15 with real-time feedback and scoring. Full-stack application with React frontend and Node.js backend.",
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
    ],
    status: "completed",
    deployed: true,
    githubUrl: "https://github.com/sonalsai/guessTheNumber",
    liveUrl: "https://guess-the-magic-number.vercel.app/",
  },
  {
    id: 5,
    name: "Weather App",
    description:
      "A simple React app for checking real-time weather anywhere. Features city search, current weather conditions including temperature and pressure, with a clean and responsive design optimized for all devices.",
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "Vite", icon: <SiReact /> },
      { name: "Sass", icon: <SiReact /> },
    ],
    status: "completed",
    deployed: true,
    githubUrl: "https://github.com/sonalsai/weather-app",
    liveUrl: "https://check-weather-saisonal.vercel.app/",
  },
];
