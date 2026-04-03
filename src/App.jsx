import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";
import ThreeHeroSection from "./components/ThreeHeroSection";

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TelegramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.89 8.22l-2 9.4c-.15.68-.56.86-1.13.54l-3.13-2.31-1.51 1.46c-.17.17-.31.31-.63.31l.22-3.19 5.81-5.25c.25-.23-.05-.36-.4-.12l-7.18 4.52-3.09-.97c-.67-.21-.68-.67.14-.99l12.09-4.66c.56-.22 1.05.12.81 1.26z" />
  </svg>
);

export default function PortfolioApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Habitster",
      github: "https://github.com/safeersifarat/habitster",
      desc: "Habitster is an AI-powered habit-building mobile app that helps users develop positive routines through gamification and personalized guidance. It uses engaging game elements such as XP points, energy levels, and an upgradable personal island that users can improve using coins earned from completing habits. The AI Habit Coach analyzes user behavior and goals to suggest customized habits and provide adaptive feedback, making habit-building more motivating, enjoyable, and sustainable.",
      tech: ["Flutter", "Node.js", "AI", "Appwrite"],
    },
    {
      title: "Fit-Sync",
      github: "https://github.com/safeersifarat/fit-sync",
      desc: "FitSync is a smart fitness app that uses real-time computer vision to monitor exercises through a mobile camera. It tracks body posture, counts repetitions automatically, and gives instant feedback to correct form and prevent injuries. The system also provides personalized workout suggestions and tracks calories burned and consumed using both manual input and camera-based food recognition, making fitness management more easy and convenient.",
      tech: ["Flutter", "Node.js", "AI", "Appwrite"],
    },
    {
      title: "Dvoting",
      github: "https://github.com/safeersifarat/dvoting",
      desc: "Dvoting is a decentralized blockchain-based voting system built on Ethereum that enables secure, transparent, and tamper-proof online elections. It allows admins to create and manage elections, verify voters, and publish real-time results, while voters can securely register and cast their votes through the blockchain, ensuring one-person-one-vote integrity and transparency.",
      tech: ["React", "Solidity", "Ganache", "MetaMask"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-linear-to-br from-purple-500/20 to-cyan-500/20 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
      </div>

      {/* Floating Header Actions (Menu + Socials) */}
      <div
        className={`fixed top-4 left-4 md:top-6 md:left-6 z-60 flex items-center gap-2 md:gap-3 transition-opacity duration-500 ease-in-out ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center p-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors shadow-2xl"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Menu className="w-5 h-5 text-white" />
          )}
        </button>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/safeersifarath"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-black/40 border border-white/10 backdrop-blur-xl rounded-full hover:bg-white/10 transition-all text-gray-300 hover:text-white shadow-2xl"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/safeersifarat"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-black/40 border border-white/10 backdrop-blur-xl rounded-full hover:bg-white/10 transition-all text-gray-300 hover:text-white shadow-2xl"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/safsifarath"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-black/40 border border-white/10 backdrop-blur-xl rounded-full hover:bg-white/10 transition-all text-gray-300 hover:text-white shadow-2xl"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-[85vw] max-w-72 bg-[#0a0a0f]/95 border-r border-white/10 p-6 md:p-8 pt-20 md:pt-24 shadow-2xl flex flex-col"
            >
              <div className="flex flex-col gap-6 text-lg font-medium text-gray-300">
                <a
                  href="#home"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 hover:text-white transition-colors"
                >
                  <Home className="w-5 h-5 text-cyan-400" /> Home
                </a>
                <a
                  href="#aboutMe"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 hover:text-white transition-colors"
                >
                  <User className="w-5 h-5 text-purple-400" /> About
                </a>
                <a
                  href="#projects"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 hover:text-white transition-colors"
                >
                  <Briefcase className="w-5 h-5 text-pink-400" /> Projects
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-blue-400" /> Contact
                </a>
              </div>

              <div className="mt-auto">
                <p className="text-sm text-gray-500">© 2026 Safeer Sifarath</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ThreeHeroSection />

      <div className="relative z-10 min-h-screen pt-[50vh]">
        <section
          id="aboutMe"
          className="mx-auto max-w-4xl px-6 md:px-8 py-16 md:py-20 text-left flex flex-col justify-center min-h-[50vh] md:min-h-[60vh]"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-10 tracking-tight text-center">
            <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Hi there!
            </span>
          </h1>
          <div className="space-y-4 md:space-y-6 text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed">
            <p>
              My name is Safeer Sifarath, and I'm a Computer Science Engineering
              graduate. I have a passion for all things technology from software
              engineering, machine learning to building modern websites and
              mobile applications integrated with AI agents.
            </p>
            <p>
              In addition to my love of technology, I am also interested in
              continuously learning new things, including fitness, travel,
              psychology, and any subject that sparks my curiosity.
            </p>
            <p>
              I would love to work for anyone, it doesn't matter whether they
              are from organizations, individuals, or students. I would try my
              best to deliver what they request within the given time frame.
            </p>
            <p className="pt-6 md:pt-8 text-xl md:text-2xl font-medium text-purple-400">
              Below are some of the projects I have developed throughout my
              coding journey.
            </p>
          </div>
        </section>
        <section
          id="projects"
          className="mx-auto max-w-5xl px-6 md:px-8 py-16 md:py-20 flex flex-col gap-16 md:gap-24"
        >
          <h2 className="mb-2 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center">
            Projects
          </h2>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-6 md:gap-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-white/5 p-6 md:p-12 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex flex-col gap-5 md:gap-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3 md:mb-4">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                      {project.tech.map((tool) => (
                        <span
                          key={tool}
                          className="px-4 py-1.5 rounded-xl border border-white/20 bg-white/5 text-sm font-medium text-gray-200 backdrop-blur-md shadow-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full md:w-auto justify-center items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shrink-0"
                  >
                    <GithubIcon className="w-5 h-5" /> Source Code
                  </a>
                </div>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 font-light leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Demo Video Section */}
              <div className="w-full aspect-video rounded-3xl border border-white/10 bg-linear-to-br from-black/60 to-purple-900/20 flex flex-col items-center justify-center shadow-inner overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="relative z-10 flex flex-col items-center gap-4 opacity-50">
                  <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                  <span className="text-sm md:text-lg font-medium tracking-widest uppercase text-center px-4">
                    Video Demo Coming Soon
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <section
          id="contact"
          className="mx-auto max-w-3xl px-6 md:px-8 py-16 md:py-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-white/5 p-6 md:p-12 shadow-2xl backdrop-blur-xl flex flex-col items-center text-center"
          >
            <h2 className="mb-3 md:mb-4 text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="mb-8 md:mb-10 text-base md:text-lg text-gray-300">
              Have a project in mind or want to collaborate? Let's build
              something amazing together!
            </p>
            <form
              className="w-full space-y-6 text-left"
              action="https://formsubmit.co/safeersifarath@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Contact from Portfolio!"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  name="name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none transition-all placeholder:text-gray-500 focus:border-cyan-400 focus:bg-white/10"
                  placeholder="Your Name"
                />
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none transition-all placeholder:text-gray-500 focus:border-cyan-400 focus:bg-white/10"
                  placeholder="Your Email"
                />
              </div>
              <textarea
                name="message"
                required
                className="h-40 w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none transition-all placeholder:text-gray-500 focus:border-cyan-400 focus:bg-white/10"
                placeholder="Your Message..."
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-linear-to-r from-cyan-500 to-purple-500 p-[2px] transition-transform hover:scale-[1.02] active:scale-95"
              >
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-black/50 px-8 py-4 font-bold text-white backdrop-blur-sm transition-colors hover:bg-black/0">
                  Send Message
                </div>
              </button>
            </form>
          </motion.div>
          <div className="flex items-center justify-center gap-4 my-8 opacity-60">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-white/20"></div>
            <span className="text-gray-500 uppercase tracking-widest text-sm font-medium">
              or
            </span>
            <div className="h-px w-24 bg-linear-to-l from-transparent to-white/20"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <a
              href="tg://resolve?domain=Safeersifarath"
              target="_blank"
              rel="noreferrer"
              className="group flex w-full md:w-auto justify-center items-center gap-3 rounded-full bg-[#24A1DE]/10 border border-[#24A1DE]/30 px-6 py-4 text-[#24A1DE] transition-all hover:bg-[#24A1DE] hover:text-white hover:shadow-[0_0_20px_rgba(36,161,222,0.4)]"
            >
              <TelegramIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
              <span className="font-medium text-lg">
                Message me on Telegram
              </span>
            </a>
          </motion.div>
        </section>

        <footer className="mt-16 border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:px-8 py-8 text-sm text-gray-400 md:flex-row text-center">
            <p>© 2026 Safeer. Built with React.</p>
            <a href="#home">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
