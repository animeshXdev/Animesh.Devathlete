"use client";

import { TimelineAbout } from "@/components/TimelineAbout";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "motion/react";
import Image from "next/image";
import { FaRunning, FaLaptopCode, FaBrain, FaBolt } from "react-icons/fa";

const traits = [
  {
    icon: <FaRunning className="text-emerald-500 w-5 h-5" />,
    title: "Athlete Discipline",
    desc: "Parkour taught me control, flow, and resilience.",
  },
  {
    icon: <FaLaptopCode className="text-emerald-500 w-5 h-5" />,
    title: "Frontend Developer",
    desc: "Building interactive, animated UIs with React, Next.js, Tailwind.",
  },
  {
    icon: <FaBrain className="text-emerald-500 w-5 h-5" />,
    title: "Quick Learner",
    desc: "Eager to explore new stacks, tools, and tech every day.",
  },
  {
    icon: <FaBolt className="text-emerald-500 w-5 h-5" />,
    title: "Energetic Performer",
    desc: "From rooftops to IDEs — I bring speed and creativity.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative min-h-screen w-full bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      <Spotlight className="top-20 left-0 md:left-60" fill="white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Profile Image + Resume */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-center md:justify-center flex-1 space-y-4"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-emerald-500 shadow-md mx-auto">
            <Image
              src="/profile.jpg"
              alt="Animesh Profile"
              fill
              className="object-cover"
            />
          </div>

          <a
            href="/Animesh_CV_One Page.pdf"
            download
            className="mt-4 inline-block rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 text-sm font-medium shadow"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Description + Traits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
            I’m Animesh — Parkour Athlete & Frontend Developer
          </h2>

          <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
            I combine the agility of a parkour artist with the precision of a frontend engineer. From flips to frontend, I bring intensity, attention to detail, and performance.
          </p>

          {/* Trait Cards with Hover Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {traits.map((trait, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="group flex items-start gap-4 p-4 rounded-xl border border-emerald-400/30 bg-white/60 dark:bg-neutral-900 shadow-md transition-all duration-300 hover:shadow-lg hover:border-emerald-500 cursor-pointer"
              >
                <div className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-800 transition-all duration-300 group-hover:scale-110">
                  {trait.icon}
                </div>
                <div>
                  <h4 className="font-semibold">{trait.title}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {trait.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <TimelineAbout />
      
    </section>
  );
}
