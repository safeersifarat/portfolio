//App.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThreeHeroSection from "./components/ThreeHeroSection";

export default function PortfolioApp() {
  const [contentOpacity, setContentOpacity] = useState(0);
  const [contentBlur, setContentBlur] = useState(20);
  const [contentY, setContentY] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const max = window.innerHeight * 1;
      const value = Math.min(window.scrollY / max, 1);

      const fadeStart = 0.5;
      const fadeEnd = 0.9;

      if (value <= fadeStart) {
        setContentOpacity(0);
        setContentBlur(20);
        setContentY(100);
      } else if (value >= fadeEnd) {
        setContentOpacity(1);
        setContentBlur(0);
        setContentY(0);
      } else {
        const progress = (value - fadeStart) / (fadeEnd - fadeStart);
        setContentOpacity(Math.min(progress * 2, 1));
        setContentBlur(20 - Math.round(progress * 20));
        setContentY(100 - progress * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Habitster",
      desc: "A gamified habit-building app with an AI-powered habit coach.",
      tech: ["Flutter", "Firebase", "AI"],
    },
    {
      title: "Partnership Projects",
      desc: "Collaborative GitHub projects showcasing teamwork and production workflows.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "CS Mini Projects",
      desc: "Academic and personal builds across web, mobile, and backend systems.",
      tech: ["Python", "C++", "JavaScript"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold tracking-wide">Safeer.dev</h1>
          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <ThreeHeroSection />

      <div
        className="relative z-10 min-h-screen"
        style={{
          opacity: contentOpacity,
          filter: `blur(${contentBlur}px)`,
          transform: `translateY(${contentY}px)`,
        }}
      >
        <section id="projects" className="mx-auto max-w-6xl px-8 py-20">
          <h2 className="mb-8 text-3xl font-semibold">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur transition-transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-gray-300">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-8 py-20">
          <h2 className="mb-8 text-3xl font-semibold">Project Showcase</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <motion.div
                key={`showcase-${project.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
              >
                <div className="mb-6 flex h-48 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-gray-300">
                  Project Preview
                </div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 leading-7 text-gray-300">{project.desc}</p>
                <div className="mt-5 flex gap-3">
                  <button className="rounded-2xl bg-white px-5 py-2 font-medium text-black">
                    GitHub
                  </button>
                  <button className="rounded-2xl border border-white/20 px-5 py-2">
                    Live Demo
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-8 py-20 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
          >
            <h2 className="mb-6 text-3xl font-semibold">
              Achievements & GitHub
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Projects", "10+"],
                ["Technologies", "8+"],
                ["Collaborations", "5+"],
                ["Commits", "100+"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm text-gray-400">{label}</p>
                  <p className="mt-2 text-3xl font-bold">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
          >
            <h2 className="mb-6 text-3xl font-semibold">Contact Me</h2>
            <p className="mb-6 text-gray-300">
              Let’s build something amazing together.
            </p>
            <div className="space-y-4">
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none"
                placeholder="Your Name"
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none"
                placeholder="Your Email"
              />
              <textarea
                className="h-32 w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none"
                placeholder="Your Message"
              />
              <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-black">
                Send Message
              </button>
            </div>
          </motion.div>
        </section>

        <footer className="mt-16 border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-8 py-8 text-sm text-gray-400 md:flex-row">
            <p>© 2026 Safeer. Built with React.</p>
            <a href="#home">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
