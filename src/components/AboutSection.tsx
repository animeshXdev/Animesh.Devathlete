"use client";

import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen bg-neutral-950 text-white overflow-hidden">
      {/* Background Light Effect */}
      <Spotlight className="top-40 left-10 md:left-60" fill="white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Hi, I’m Animesh
          </h1>

          <p className="text-neutral-300 text-lg md:text-xl">
            I’m a <strong>Parkour athlete</strong> and <strong>Frontend Developer</strong> who turns ideas into beautiful, animated web experiences.
            <br />
            With a passion for clean code and motion UI, I build responsive, performant websites using React, Next.js, Tailwind, and more.
            <br />
            When I’m not coding, I’m training flips, vaults, and movement flow in the urban jungle. 🌀
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <Button className="bg-emerald-700 hover:bg-emerald-600 text-white">
              View Resume
            </Button>
            <Button variant="secondary" className="text-white border border-emerald-500 hover:bg-emerald-800">
              Contact Me
            </Button>
          </div>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500 shadow-2xl">
            <Image
              src="/public/profile.jpg" // 🔁 Make sure this is in /public folder
              alt="Animesh Profile"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
