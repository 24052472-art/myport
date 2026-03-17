"use client";

import GlassCard from "../ui/GlassCard";
import { Github, ExternalLink } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Library Management Bot",
    desc: "A Telegram bot designed to streamline library operations, allowing users to search and manage resources efficiently.",
    tags: ["Python", "Telegram API", "Bot Management"],
    github: "#",
    live: "https://t.me/KiitNewzBot",
    image: "/projects/bot.png",
  },
  {
    title: "KIITNewz Bot",
    desc: "An automated information and news syndication bot built for KIIT University students to stay updated on campus events.",
    tags: ["Node.js", "Automation", "API"],
    github: "#",
    live: "https://t.me/KiitNewzBot",
    image: "/projects/news.png",
  },
  {
    title: "Ruden Fitness - Elite Personal Training Platform",
    desc: "Elite Personal Training Platform",
    tags: ["Personalized coaching to help you unlock your strongest self"],
    github: "#",
    live: "#",
    image: "/ruden.png",
  },
  {
    title: "Rajnish Kushwaha Youth Leadership",
    desc: "Dedicated to realizing the dreams of the youth of Kalikamai Gaupalika, working for social transformation through RMoksha NGO.",
    tags: ["Youth Leader", "Social Worker", "Voice of Change"],
    github: "#",
    live: "#",
    image: "/rajnish.png",
  },
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group h-full"
      onMouseMove={handleMouseMove}
    >
      {/* Glow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(188, 19, 254, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <GlassCard className="h-full flex flex-col relative z-10 transition-transform duration-300 hover:-translate-y-2">
        
        {/* 🔥 IMAGE SECTION */}
        {project.image && (
          <a href={project.live} target="_blank" rel="noreferrer">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
            </div>
          </a>
        )}

        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--primary-neon)] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 flex-grow">{project.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="text-xs font-medium px-2 py-1 bg-white/5 rounded-md text-[var(--primary-purple)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
          {project.github !== "#" && (
            <a
              href={project.github}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.live !== "#" && (
            <a
              href={project.live}
              className="text-gray-400 hover:text-[var(--primary-neon)] transition-colors flex items-center gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary-neon)] to-[var(--primary-purple)] mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}