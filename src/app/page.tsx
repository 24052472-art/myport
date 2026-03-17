"use client";

import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import dynamic from "next/dynamic";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

// Dynamic import to prevent Three.js from being rendered server-side (it requires browser APIs)
const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-transparent min-h-screen text-white selection:bg-[var(--primary-purple)] selection:text-white">
      <CustomCursor />
      
      {/* 3D Background - only loads on client */}
      <Scene />
      
      {/* Navigation */}
      <Navbar />

      {/* Content wrapper */}
      <div className="relative z-10 w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        
        {/* Simple Footer */}
        <footer className="py-8 text-center border-t border-white/10 relative z-10 bg-black/20 backdrop-blur-lg">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aalok Kushwaha. Built with Next.js, R3F & Tailwind CSS.
          </p>
        </footer>
      </div>
    </main>
  );
}

