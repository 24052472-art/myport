"use client";

import GlassCard from "../ui/GlassCard";

export default function Education() {
  const experiences = [
    {
      year: "2024 - Present",
      title: "KIIT UNIVERSITY",
      subtitle: "B.Tech Computer Science & Engineering",
      desc: "Currently pursuing bachelor's degree at a highly-ranked university in Bhubaneswar, Odisha. Focusing on advanced computing concepts, software architecture, and modern web development.",
      highlight: true
    },
    {
      year: "NOV 2024 - Present",
      title: "Kings Agency",
      subtitle: "Digital Marketing & Automation",
      desc: "Running an agency helping businesses grow through creative branding, automation, and digital solutions. Working with hotels, gyms, restaurants to provide custom branding kits and scan menus."
    },
    {
      year: "OCT 2017 - 2019",
      title: "The Helping Hands",
      subtitle: "Founder & Social Worker",
      desc: "Founded a group of young social workers across Parsa district, Nepal. Organized relief efforts providing food and medicines to those in need during emergencies."
    }
  ];

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary-neon)] to-[var(--primary-purple)] mx-auto rounded-full" />
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-12 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              {/* Timeline Dot */}
              <div 
                className={`absolute w-4 h-4 rounded-full -left-[41px] md:-left-[55px] top-6 border-2 
                ${exp.highlight ? "bg-[var(--primary-neon)] border-[var(--primary-neon)] shadow-[0_0_15px_var(--primary-neon)]" : "bg-black border-white/30"}`} 
              />
              
              <GlassCard delay={idx * 0.1} className={exp.highlight ? "border-[var(--primary-neon)]/30" : ""}>
                <span className="text-[var(--primary-purple)] font-mono text-sm mb-2 font-bold block">
                  {exp.year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                <h4 className="text-lg text-gray-300 mb-4">{exp.subtitle}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {exp.desc}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
