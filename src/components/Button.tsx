"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export function MovingButton() {
  return (
    <div>
        <Link href={"/contact"}>
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-emerald-900 text-xl font-medium text-emerald-700  dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
      >
        Contact Me
      </Button>
        </Link>
      
    </div>
  );
}
