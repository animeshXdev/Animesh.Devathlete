"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { MovingButton } from "./Button";

export function HeroSection() {
  const words = [
    { text: "Leap", className: "text-emerald-500 dark:text-emerald-400" },
    { text: "into", className: "" },
    { text: "Creativity", className: "text-emerald-600 dark:text-emerald-500" },
    { text: "with", className: "" },
    { text: "Parkour", className: "font-bold text-emerald-500" },
    { text: "&", className: "" },
    { text: "Code.", className: "font-bold text-emerald-500" },
  ];

  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4">
      {/* Subheadline */}
      <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mb-2">
        Athlete by Passion. Developer by Mind.
      </p>

      {/* Typewriter Text */}
      <TypewriterEffectSmooth words={words} />

      {/* Main headline */}
      <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mt-4">
        Hi, I&apos;m Animesh — I build interfaces <br /> and conquer obstacles.
      </h1>

      {/* Supporting Text */}
      <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl">
        Combining the flow of parkour with the logic of programming, I design
        elegant digital experiences and move through code like I do rooftops — smooth and fearless.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        
        <MovingButton />
      </div>
    </section>
  );
}
