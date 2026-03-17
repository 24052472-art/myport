"use client";

import GlassCard from "../ui/GlassCard";
import { User, Monitor, Code2, Zap } from "lucide-react";

export default function About() {
  const infoBoxes = [
    { icon: <Monitor className="w-6 h-6 text-[var(--primary-neon)]" />, title: "Web Dev", desc: "Interactive UI/UX" },
    { icon: <Code2 className="w-6 h-6 text-[var(--primary-purple)]" />, title: "Software", desc: "Clean Architecture" },
    { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: "Performance", desc: "Optimized & Fast" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary-neon)] to-[var(--primary-purple)] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <GlassCard className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-neon)]/10 to-[var(--primary-purple)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <User className="w-12 h-12 text-[var(--primary-neon)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">The Builder Mindset</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I&apos;m a computer science student at KIIT University passionately curious about the intersection of design and engineering. 
                I don&apos;t just write code; I craft experiences. 
              </p>
              <p className="text-gray-400 leading-relaxed">
                From developing sophisticated web applications to optimizing backend logic, my goal is to build products that leave a lasting impact and run seamlessly across all platforms.
              </p>
            </div>
          </GlassCard>

          <div className="grid gap-4">
            {infoBoxes.map((box, idx) => (
              <GlassCard key={idx} delay={idx * 0.1} className="flex items-center gap-6 p-6">
                <div className="p-4 bg-white/5 rounded-full border border-white/10">
                  {box.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{box.title}</h4>
                  <p className="text-sm text-gray-400">{box.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
