"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 backdrop-blur-[1px] bg-[var(--color-bg)]/70">
      <Container className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-[Playfair_Display] font-semibold text-[var(--color-text)]"
        >
          Hi, I’m{" "}
          <span className="text-[var(--color-primary)]">Rachana Hegde</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 max-w-2xl mx-auto text-lg text-[var(--color-text)/80]"
        >
          I craft thoughtful, user-centric digital experiences where elegant
          design meets functionality. Lately, I’ve been exploring how code and
          agentic AI can work together to create more intuitive, intelligent
          products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Button variant="sage">View My Work</Button>
          <Button variant="sand">Contact Me</Button>
        </motion.div>
      </Container>
    </section>
  );
}
