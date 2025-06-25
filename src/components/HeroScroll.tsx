"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-emerald-600 dark:text-emerald-500">
             Make the flow with<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Animesh Parkour 
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/203e2082-d452-43cd-a0a9-aac4e94f008a.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
