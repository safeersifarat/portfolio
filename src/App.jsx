import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profilePic from "./assets/safeerheadshot.png";

export default function PortfolioApp() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [4.5, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [0, 8]);
  const rotateY = useTransform(scrollYProgress, [0.4, 0.7], [0, -12]);
  const setupOpacity = useTransform(scrollYProgress, [0.75, 0.9], [1, 0]);
  const aboutOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0.85, 1], [50, 0]);

  const roles = [
    "Full Stack Developer",
    "Mobile App Developer",
    "AI Agent Builder",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = currentRole.slice(0, displayedRole.length + 1);
        setDisplayedRole(next);
        if (next === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        const next = currentRole.slice(0, displayedRole.length - 1);
        setDisplayedRole(next);
        if (next === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);
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
    <div className="relative min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
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

      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Cinematic Hero Section */}
      <section id="home" ref={heroRef} className="relative h-[450vh] bg-black">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <motion.div
            style={{
              scale,
              rotateX,
              rotateY,
              opacity: setupOpacity,
              perspective: 1200,
            }}
            className="relative flex items-center justify-center"
          >
            {/* Background Ambient Glows */}
            <div className="gaming-setup-glow -top-40 -left-60 h-[500px] w-[500px] bg-purple-600/30" />
            <div className="gaming-setup-glow -bottom-40 -right-60 h-[500px] w-[500px] bg-cyan-600/30" />

            {/* Left Desktop Tower */}
            <div className="gaming-tower absolute -left-72 h-[450px] w-48 hidden lg:flex items-center justify-center p-4">
              <div className="h-full w-full rounded-lg bg-gradient-to-t from-cyan-500/10 via-purple-500/10 to-transparent animate-pulse" />
            </div>

            {/* Main Monitor */}
            <div className="monitor-frame z-10 w-[900px] p-2">
              <div className="overflow-hidden rounded-[1.8rem] bg-black shadow-inner">
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-950 via-black to-gray-950 p-8">
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-cyan-500/20 blur-2xl" />
                      <div className="profile-blob relative h-48 w-44 border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-1">
                        <div className="profile-blob relative h-full w-full overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-sm">
                          <img
                            src={profilePic}
                            alt="Safeer profile"
                            className="h-full w-full object-cover grayscale-[0.2]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <p className="mb-2 text-xl tracking-widest text-cyan-400">HI THERE,</p>
                    <h1 className="text-7xl font-black tracking-tighter text-white">
                      I’M SAFEER
                    </h1>
                    <div className="mt-4 h-12 text-2xl font-light text-gray-400">
                      I am a{" "}
                      <span className="font-medium text-white">
                        {displayedRole}
                      </span>
                      <span className="ml-1 inline-block h-6 w-1 translate-y-1 bg-cyan-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Desktop Tower */}
            <div className="gaming-tower absolute -right-72 h-[450px] w-48 hidden lg:flex items-center justify-center p-4">
               <div className="h-full w-full rounded-lg bg-gradient-to-b from-purple-500/10 via-cyan-500/10 to-transparent animate-pulse" />
            </div>

            {/* Keyboard & Desk Surface */}
            <div className="absolute -bottom-64 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
               <div className="h-4 w-[800px] rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm" />
               <div className="h-40 w-[600px] rounded-xl border border-white/5 bg-white/5 backdrop-blur-md flex items-center justify-center">
                  <div className="grid grid-cols-12 gap-1 w-full px-4">
                    {[...Array(60)].map((_, i) => (
                      <div key={i} className="h-4 rounded-[2px] bg-white/5 border border-white/5" />
                    ))}
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section with Dynamic Reveal */}
      <section
        id="about"
        className="relative z-30 mx-auto grid max-w-6xl gap-12 px-8 py-32 md:grid-cols-2 items-center"
      >
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="mb-6 text-3xl font-semibold">About Me</h2>
          <p className="text-lg leading-8 text-gray-300">
            I’m a Computer Science student passionate about building mobile
            apps, modern websites, and intelligent systems. I enjoy turning
            ideas into beautiful products that solve real problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <h3 className="mb-4 text-xl font-semibold">Core Skills</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Flutter",
              "Node.js",
              "MongoDB",
              "Python",
              "Firebase",
            ].map((skill) => (
              <span key={skill} className="rounded-full bg-white/10 px-4 py-2">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

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
          <h2 className="mb-6 text-3xl font-semibold">Achievements & GitHub</h2>
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
  );
}
