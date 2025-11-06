"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import Container from "@/components/ui/container";
import {
  Briefcase,
  Code2,
  Sparkles,
  CheckCircle2,
  Star,
  Cpu,
  Globe,
  Settings,
  Wrench,
  Lightbulb,
} from "lucide-react";

export default function WorkExperienceSkills() {
  const [tab, setTab] = useState("experience");
  const [hoveredSkill, setHoveredSkill] = useState("");

  const skills = {
    "Web Development": {
      icon: <Globe className="text-[var(--color-primary)]" size={26} />,
      color: "from-pink-100 via-white to-sand/30",
      skills: [
        "HTML/CSS",
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        "React (Hooks, Context API, Router, REST APIs)",
        "UI Design (Figma, Adobe XD)",
        "Responsive Design",
      ],
    },
    Backend: {
      icon: <Settings className="text-[var(--color-primary)]" size={26} />,
      color: "from-sand/30 via-white to-green-50",
      skills: [
        "Express.js (Beginner)",
        "Node.js (Beginner)",
        "WebSockets (Beginner)",
      ],
    },
    AI: {
      icon: <Cpu className="text-[var(--color-primary)]" size={26} />,
      color: "from-blue-50 via-white to-pink-50",
      skills: ["Python", "RAG", "Agentic AI", "LLMs", "Prompt Engineering"],
    },
    Other: {
      icon: <Wrench className="text-[var(--color-primary)]" size={26} />,
      color: "from-sand/20 via-white to-gray-50",
      skills: [
        "Software Design",
        "Software Testing",
        "IT Support",
        "Git & GitHub",
        "Databases",
        "Data Visualization",
      ],
    },
    "Soft Skills": {
      icon: <Lightbulb className="text-[var(--color-primary)]" size={26} />,
      color: "from-pink-50 via-white to-sand/30",
      skills: [
        "Teamwork",
        "Collaboration",
        "Communication",
        "Writing",
        "Research",
      ],
    },
  };

  const responsibilities = [
    "Design and build responsive, high-quality UIs with Figma, React, Next.js, and Tailwind CSS",
    "Replace legacy JS/HTML with modern React applications",
    "Collaborate with Head of Technology and Lead Backend Developer on architecture",
    "Conduct code reviews, optimize performance, contribute to project planning",
    "Integrate frontend UI with custom API endpoints built in Express.js",
    "Secondary IT support duties including hardware maintenance and Workspace admin",
    "Leverage AI tools (Cursor, Copilot, Claude) to streamline development workflows",
  ];

  return (
    <section className="relative py-24 backdrop-blur-[1px] bg-[var(--color-bg)]/70 text-[var(--color-text)]">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-[Playfair_Display] font-semibold mb-4">
            Work Experience & Skills
          </h2>
          <p className="text-lg text-[var(--color-text)/80] max-w-2xl mx-auto">
            Building modern web experiences with thoughtful design and clean
            code
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            {
              id: "experience",
              label: "Experience",
              icon: <Briefcase size={18} />,
            },
            { id: "skills", label: "Skills", icon: <Code2 size={18} /> },
          ].map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`group px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                tab === id
                  ? "bg-[var(--color-primary)] text-white shadow-lg"
                  : "bg-white text-[var(--color-text)] hover:shadow-md border border-pink-100"
              }`}
            >
              <span className="flex items-center gap-2">
                {icon} {label}
              </span>
            </button>
          ))}
        </div>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          {tab === "experience" ? (
            /* EXPERIENCE SECTION (unchanged) */
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 sm:p-12 bg-gradient-to-br from-white via-pink-50 to-sand/40 border border-pink-100 rounded-3xl shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-transparent rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-[var(--color-primary)] rounded-2xl shadow-lg">
                      <Briefcase className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">
                        Frontend Web Developer (React)
                      </h3>
                      <p className="text-[var(--color-primary)] font-medium mt-1">
                        BRR Media, London, UK
                      </p>
                      <p className="text-sm text-[var(--color-text)/60] mt-1">
                        July 2025 – Present
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center gap-2 mb-6">
                      <Sparkles
                        className="text-[var(--color-primary)]"
                        size={20}
                      />
                      <h4 className="text-lg font-semibold">
                        Key Responsibilities
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {responsibilities.map((resp, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 group"
                        >
                          <CheckCircle2
                            className="text-[var(--color-leaf)] mt-1 group-hover:scale-110 transition-transform"
                            size={18}
                          />
                          <span className="leading-relaxed">{resp}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-pink-100 my-10" />
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Star className="text-[var(--color-primary)]" size={20} />
                      <h4 className="text-lg font-semibold">
                        Projects & Prototypes
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <strong>AI Voice Transcription Prototype:</strong> Built
                        a Whisper API-based web app with searchable transcripts
                        and dynamic highlighting.
                      </li>
                      <li>
                        <strong>RAG Chatbot:</strong> Created a LlamaIndex-based
                        chatbot using LLMs for internal onboarding support.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ) : (
            /* 🌈 ENHANCED SKILLS SECTION */
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {Object.entries(skills).map(([category, data], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredSkill(category)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <Card
                    className={`relative overflow-hidden p-6 rounded-2xl border border-pink-100 shadow-md transition-all duration-300 h-full bg-gradient-to-br ${
                      data.color
                    } ${
                      hoveredSkill === category
                        ? "scale-[1.03] shadow-xl border-[var(--color-primary)]"
                        : "hover:shadow-lg"
                    }`}
                  >
                    {/* Glow Overlay */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                        hoveredSkill === category ? "opacity-100" : ""
                      }`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          animate={{
                            rotate:
                              hoveredSkill === category ? [0, 10, -10, 0] : 0,
                          }}
                          transition={{ duration: 0.4 }}
                          className="text-3xl"
                        >
                          {data.icon}
                        </motion.div>
                        <h4 className="text-lg font-semibold text-[var(--color-primary)]">
                          {category}
                        </h4>
                      </div>

                      <ul className="space-y-2">
                        {data.skills.map((skill, i) => (
                          <motion.li
                            key={skill}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                            <span className="hover:text-[var(--color-primary)] transition-colors">
                              {skill}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
