"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      aria-label="Scroll to Top"
      className="fixed bottom-6 right-6 z-50 bg-white/20 dark:bg-black/20 text-emerald-500 border border-emerald-400 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-emerald-600 hover:text-white transition"
    >
      <FaArrowUp />
    </motion.button>
  );
}
