"use client";

import { FaYoutube, FaInstagram, FaFacebook, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-white/20 dark:bg-black/20 backdrop-blur-lg border-t border-emerald-500/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-neutral-700 dark:text-neutral-300"
        >
          © {new Date().getFullYear()} <a className=" text-emerald-600" target="_blank" href="https://devathlete-animesh.vercel.app/">Animesh Prakash</a>. All rights reserved.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex space-x-5 text-xl text-neutral-700 dark:text-neutral-300"
        >
          <a href="https://youtube.com/@parkour_by_animesh?si=ZTEpZ5oYgpz1AS70" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/active_animesh?utm_source=qr&igsh=bHE0aW5lemZzMGw0" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/animesh.prakash.16" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition">
            <FaFacebook />
          </a>
          <a href="https://t.me/who_am_i_geek" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition">
            <FaTelegramPlane />
          </a>
          <a href="https://wa.me/+916207039191" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition">
            <FaWhatsapp />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
