"use client";

import GlassCard from "../ui/GlassCard";
import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C++", "C#"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion", "HTML/CSS"],
    },
    {
      title: "Backend & Tools",
      skills: ["Node.js", "Git", "WordPress", "Video Editing", "Bot Management"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Tech Arsenal</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary-neon)] to-[var(--primary-purple)] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <GlassCard key={i} delay={i * 0.1} className="flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-6 text-[var(--primary-neon)]">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-[var(--primary-purple)]/50 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
