"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { Briefcase, Code2, Sparkles, CheckCircle2 } from "lucide-react";

export default function WorkExperienceSkills() {
  const [tab, setTab] = useState("experience");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = {
    "Web Development": {
      icon: "🌐",
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
      icon: "⚙️",
      skills: [
        "Express.js (Beginner)",
        "Node.js (Beginner)",
        "WebSockets (Beginner)",
      ],
    },
    AI: {
      icon: "🤖",
      skills: ["Python", "RAG", "Agentic AI", "LLMs", "Prompt Engineering"],
    },
    Other: {
      icon: "🛠️",
      skills: [
        "Software Design",
        "Software Testing",
        "IT Support",
        "Git & GitHub",
        "Databases",
        "Data Analysis & Visualization",
      ],
    },
    "Soft Skills": {
      icon: "💡",
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
    "Secondary IT support duties, including staff tech support, hardware/network maintenance, and Google Workspace administration",
    "Leverage AI tools (Cursor, Copilot, Claude) to streamline development workflows",
  ];

  return (
    <section className="relative py-24 backdrop-blur-[1px] bg-[var(--color-bg)]/70 text-[var(--color-text)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-[Playfair_Display] font-semibold mb-4 text-[var(--color-text)]">
            Work Experience & Skills
          </h2>
          <p className="text-lg text-[var(--color-text)/80] max-w-2xl mx-auto">
            Building modern web experiences with thoughtful design and clean
            code
          </p>
        </motion.div>

        {/* Enhanced Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setTab("experience")}
            className={`group px-8 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
              tab === "experience"
                ? "bg-[var(--color-primary)] text-white shadow-lg"
                : "bg-white text-[var(--color-text)] hover:shadow-md border border-pink-100"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Briefcase size={18} />
              Experience
            </span>
            {tab === "experience" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-[var(--color-primary)]"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
          </button>
          <button
            onClick={() => setTab("skills")}
            className={`group px-8 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
              tab === "skills"
                ? "bg-[var(--color-primary)] text-white shadow-lg"
                : "bg-white text-[var(--color-text)] hover:shadow-md border border-pink-100"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Code2 size={18} />
              Skills
            </span>
            {tab === "skills" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-[var(--color-primary)]"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
          </button>
        </div>

        {/* Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          {tab === "experience" ? (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 sm:p-12 bg-gradient-to-br from-white via-pink-50 to-sand/40 backdrop-blur-xl border border-pink-100 rounded-3xl shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-transparent rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-[var(--color-primary)] rounded-2xl shadow-lg">
                      <Briefcase className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-[var(--color-text)]">
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
                      <h4 className="text-lg font-semibold text-[var(--color-text)]">
                        Key Responsibilities
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {responsibilities.map((resp, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="flex items-start gap-3 group"
                        >
                          <CheckCircle2
                            className="text-[var(--color-leaf)] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                            size={18}
                          />
                          <span className="text-[var(--color-text)] leading-relaxed">
                            {resp}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ) : (
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
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setHoveredSkill(category)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <Card
                    className={`p-6 bg-white border border-pink-100 rounded-2xl shadow-md transition-all duration-300 h-full ${
                      hoveredSkill === category
                        ? "shadow-2xl scale-[1.02] border-[var(--color-primary)]"
                        : "hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`text-3xl transition-transform duration-300 ${
                          hoveredSkill === category ? "scale-110" : ""
                        }`}
                      >
                        {data.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-[var(--color-primary)]">
                        {category}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {data.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 text-[var(--color-text)] group/skill"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] group-hover/skill:scale-150 transition-transform" />
                          <span className="text-sm group-hover/skill:text-[var(--color-primary)] transition-colors">
                            {skill}
                          </span>
                        </div>
                      ))}
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
