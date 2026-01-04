"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  Sparkles,
  Zap,
  Target,
  CheckCircle2,
  Code2,
  Cpu,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "./data/projects";
import { BlurFade } from "@/components/ui/blur-fade";
import { Meteors } from "@/components/ui/meteors";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section id="featured-projects" className="relative pb-10 bg-[var(--color-bg)]/70 text-[var(--color-text)] overflow-hidden">
      {/* Meteors background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Meteors number={10} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-[Playfair_Display] font-semibold mb-4 text-[var(--color-text)]">
              Featured Projects
            </h2>
            <p className="text-lg text-[var(--color-text)/80] max-w-2xl mx-auto">
              A curated selection of projects showcasing thoughtful design, clean
              code, and innovative solutions
            </p>
          </div>
        </BlurFade>

        {/* 🔸 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <BlurFade
              key={project.id}
              delay={0.15 + index * 0.05}
              inView
            >
              <div
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedProject(project)}
              >
                {/* 🔸 Optimized card - removed BorderBeam for performance */}
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white border-2 border-pink-100 transition-all duration-200 hover:shadow-xl hover:border-[var(--color-primary)] h-[380px] flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-48 w-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-pink-50 to-sand/30">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      loading={index < 3 ? "eager" : "lazy"}
                      quality={75}
                      unoptimized
                    />

                    {/* Simplified overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />

                    {/* Hover Buttons - simplified animation */}
                    {hoveredCard === project.id && (
                      <div className="absolute inset-0 flex items-center justify-center gap-4 animate-in fade-in duration-150">
                        {/* View Button */}
                        <Button
                          variant="sage"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demoUrl, "_blank");
                          }}
                          className="flex items-center gap-2 px-3 py-3 rounded-full font-small 
                        bg-[var(--color-primary)] text-white 
                        hover:bg-[var(--color-accent)] 
                        hover:shadow-[0_0_18px_var(--color-primary)] 
                        transition-all duration-300 shadow-md text-xs"
                        >
                          <ExternalLink size={16} />
                          View
                        </Button>

                        {/* Code Button */}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, "_blank");
                          }}
                          className="flex items-center gap-2 px-3 py-3 rounded-full font-medium 
                        bg-[var(--color-bg)] text-[var(--color-text)] 
                        hover:shadow-[0_0_18px_var(--color-sand)] 
                        hover:brightness-105 transition-all duration-300 shadow-md border-0 text-xs"
                        >
                          <Github size={16} />
                          Code
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-between flex-grow text-[var(--color-text)]">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-pink-50 text-[var(--color-text)] border border-pink-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Modal - Opens high-level via Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onAnimationComplete={() => setCurrentImageIndex(0)}
                className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-pink-100"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/90 hover:bg-pink-50 shadow-lg transition-colors z-20"
                >
                  <X size={20} className="text-[var(--color-text)] sm:w-6 sm:h-6" />
                </button>

                <div className="relative p-5 sm:p-10 text-[var(--color-text)]">
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-4xl font-[Playfair_Display] font-semibold mb-3 sm:mb-4 text-[var(--color-text)] pr-8">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
                      <Button
                        onClick={() =>
                          window.open(selectedProject.demoUrl, "_blank")
                        }
                        className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[var(--color-primary)] hover:bg-pink-400 text-white shadow-lg transition-all text-sm sm:text-base"
                      >
                        <Globe size={16} className="sm:w-[18px]" />
                        Live Demo
                      </Button>
                      <Button
                        onClick={() =>
                          window.open(selectedProject.githubUrl, "_blank")
                        }
                        className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[var(--color-text)] hover:bg-[#2b2424] text-white shadow-lg transition-all text-sm sm:text-base"
                      >
                        <Github size={16} className="sm:w-[18px]" />
                        GitHub
                      </Button>
                    </div>

                    {/* 🔸 Image Carousel */}
                    {selectedProject.images && selectedProject.images.length > 0 && (
                      <div className="mt-6 sm:mt-8 relative group/carousel">
                        <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl bg-pink-50/30 border border-pink-100 shadow-inner">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentImageIndex}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="relative w-full h-full"
                            >
                              <Image
                                src={selectedProject.images[currentImageIndex]}
                                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                                fill
                                className="object-cover object-top"
                                unoptimized
                              />
                            </motion.div>
                          </AnimatePresence>

                          {/* Carousel Controls */}
                          {selectedProject.images.length > 1 && (
                            <>
                              <button
                                onClick={prevImage}
                                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all opacity-100 sm:opacity-0 sm:group-hover/carousel:opacity-100 backdrop-blur-sm border border-pink-100 text-[var(--color-primary)]"
                              >
                                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                              </button>
                              <button
                                onClick={nextImage}
                                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all opacity-100 sm:opacity-0 sm:group-hover/carousel:opacity-100 backdrop-blur-sm border border-pink-100 text-[var(--color-primary)]"
                              >
                                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                              </button>

                              {/* Dots Indicator */}
                              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                                {selectedProject.images.map((_, i) => (
                                  <button
                                    key={i}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setCurrentImageIndex(i);
                                    }}
                                    className={`h-1.5 sm:h-2 rounded-full transition-all ${i === currentImageIndex
                                      ? "w-4 sm:w-6 bg-[var(--color-primary)]"
                                      : "w-1.5 sm:w-2 bg-white/60 hover:bg-white"
                                      }`}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="text-[var(--color-primary)]" size={20} />
                      <h3 className="text-xl font-semibold">Project Overview</h3>
                    </div>
                    <p className="leading-relaxed">{selectedProject.overview}</p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles
                        className="text-[var(--color-primary)]"
                        size={20}
                      />
                      <h3 className="text-xl font-semibold">Key Features</h3>
                    </div>
                    <ul className="space-y-4">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            className="text-[var(--color-leaf)] mt-1 flex-shrink-0"
                            size={18}
                          />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedProject.techStack && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Code2 className="text-[var(--color-primary)]" size={20} />
                        <h3 className="text-xl font-semibold">Tech Stack</h3>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {selectedProject.techStack.map((tech, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-3 rounded-xl bg-pink-50/50 border border-pink-100"
                          >
                            <tech.icon className="text-[var(--color-primary)]" size={20} />
                            <span className="font-medium">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.implementation && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="text-[var(--color-primary)]" size={20} />
                        <h3 className="text-xl font-semibold">Implementation</h3>
                      </div>
                      <p className="leading-relaxed p-4 rounded-2xl bg-slate-50 border border-slate-100 italic text-[var(--color-text)/90]">
                        {selectedProject.implementation}
                      </p>
                    </div>
                  )}

                  {selectedProject.challenges && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="text-[var(--color-primary)]" size={20} />
                        <h3 className="text-xl font-semibold">Challenges & Learnings</h3>
                      </div>
                      <p className="leading-relaxed p-4 rounded-2xl bg-amber-50/50 border border-amber-100 text-[var(--color-text)/90]">
                        {selectedProject.challenges}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section >
  );
}
