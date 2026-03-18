"use client";

import GlassCard from "../ui/GlassCard";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 relative z-10 mb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Let&apos;s Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary-neon)] to-[var(--primary-purple)] mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Whether you have a question, a project proposal, or just want to say hi, 
            I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-6">
            <GlassCard className="flex items-center gap-4 p-6">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 flex-shrink-0">
                <Phone className="w-5 h-5 text-[var(--primary-neon)]" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Call Me On</p>
                <p className="font-semibold">+91 6205355884</p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-center gap-4 p-6">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 flex-shrink-0">
                <Mail className="w-5 h-5 text-[var(--primary-purple)]" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <p className="font-semibold break-all">aalokkushwaha285@gmail.com</p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-center gap-4 p-6">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 flex-shrink-0">
                <MapPin className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Location</p>
                <p className="font-semibold">Bhubaneswar, Odisha</p>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="md:col-span-3 p-8">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center gap-4"
                >
                  <CheckCircle className="w-16 h-16 text-[var(--primary-neon)]" />
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-gray-400">Thanks for reaching out. I&apos;ll get back to you at <span className="text-white">aalokkushwaha285@gmail.com</span> shortly!</p>
                  <button onClick={() => setStatus("idle")} className="mt-4 px-6 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                  {/* Web3Forms config */}
                  <input type="hidden" name="access_key" value="38808859-90d4-4871-b1c8-a5e3f19390cb" />
                  <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                  <input type="hidden" name="subject" value="New message from your portfolio!" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                      <input type="text" name="name" id="name" required className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary-neon)] transition-colors placeholder:text-gray-600" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                      <input type="email" name="email" id="email" required className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary-purple)] transition-colors placeholder:text-gray-600" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                    <input type="text" name="subject_line" id="subject" required className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600" placeholder="How can I help you?" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea name="message" id="message" rows={5} required className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600 resize-none" placeholder="Your message here..." />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button type="submit" disabled={status === "loading"} className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group disabled:opacity-60">
                    {status === "loading" ? "Sending..." : (
                      <><span>Send Message</span><Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

