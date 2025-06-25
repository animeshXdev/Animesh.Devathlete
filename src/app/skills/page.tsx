"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "motion/react";
import { FaReact, FaNodeJs, FaRunning, FaDumbbell, FaBolt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiHtml5, SiCss3 } from "react-icons/si";
import SkillPieChart from "./SkillPieChart"; // <-- make sure path is correct

const webSkills = [
  { name: "React", icon: <FaReact />, level: 90 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
  { name: "TypeScript", icon: <SiTypescript />, level: 80 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 88 },
  { name: "Node.js", icon: <FaNodeJs />, level: 75 },
  { name: "HTML5", icon: <SiHtml5 />, level: 95 },
  { name: "CSS3", icon: <SiCss3 />, level: 92 },
];

const parkourSkills = [
  { name: "Vaults", icon: <FaRunning />, level: 95 },
  { name: "Wall Runs", icon: <FaBolt />, level: 85 },
  { name: "Strength", icon: <FaDumbbell />, level: 80 },
  { name: "Agility", icon: <FaRunning />, level: 90 },
];

const allSkills = [...webSkills, ...parkourSkills];

export default function SkillsSection() {
  const [tab, setTab] = useState("all");

  const getSkills = () => {
    if (tab === "web") return webSkills;
    if (tab === "parkour") return parkourSkills;
    return allSkills;
  };

  return (
    <section className="w-full px-6 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-emerald-500 to-emerald-700 bg-clip-text text-transparent"
        >
          My Skills
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start w-full">
          {/* Tabs + Skills Cards */}
          <div className="flex-1 w-full">
            <Tabs defaultValue="all" value={tab} onValueChange={setTab} className="w-full">
              <TabsList className="flex justify-center gap-2 bg-transparent border-b border-emerald-400/20">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="parkour">Parkour</TabsTrigger>
              </TabsList>

              <TabsContent value={tab}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10"
                  >
                    {getSkills().map((skill, idx) => (
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        key={idx}
                        className="rounded-xl border border-emerald-400/30 bg-white dark:bg-neutral-900 p-4 text-left shadow transition-all"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-emerald-500 text-xl">{skill.icon}</div>
                          <h4 className="text-lg font-semibold">{skill.name}</h4>
                        </div>

                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-2 rounded bg-emerald-500"
                        />
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {skill.level}%
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            </Tabs>
          </div>

          {/* Pie Chart */}
          <div className="w-full sm:max-w-xs flex flex-col items-center justify-center sm:ml-5 sm:h-[50vh]">
            <h4 className="text-lg font-semibold mb-4 text-center lg:text-left">
              Skill Category Distribution
            </h4>
            <SkillPieChart />
          </div>
        </div>
      </div>
    </section>
  );
}
