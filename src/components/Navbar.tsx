/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./modeToggle"; // Make sure this component exists

export function NavbarDemo() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Contact", link: "/contact" },
  ];

  const isActive = (link: string) => pathname === link;

  return (
    <div className="sticky z-50 top-5 w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 ">
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className={`group relative text-lg font-medium transition-colors duration-300 -ml-4 ${
                  isActive(item.link)
                    ? "text-emerald-500 "
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full `}
                />
              </Link>
            ))}
          </div>

          {/* Desktop Mode Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`group relative  font-medium transition-colors duration-300 ${
                  isActive(item.link)
                    ? "text-emerald-600"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full ${
                    isActive(item.link) ? "w-full" : ""
                  }`}
                />
              </Link>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* 🔥 Floating Mode Toggle (Mobile Only) */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden rounded-md  border border-emerald-500 bg-background  shadow-lg">
        <ModeToggle />
      </div>
    </div>
  );
}
