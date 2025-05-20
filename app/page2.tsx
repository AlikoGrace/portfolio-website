"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/glitch-text";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrollY > 50 ? "bg-black/80 backdrop-blur-md py-3" : "py-6"
        )}>
        <div className="container flex items-center justify-between">
          <Link
            href="/"
            className="font-space text-xl font-bold tracking-tighter hover:text-emerald-400 transition-colors">
            grace<span className="text-emerald-400">.</span>aliko
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
            <SocialLinks className="flex gap-4" />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex flex-col p-6"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}>
          <div className="flex justify-between items-center mb-12">
            <Link
              href="/"
              className="font-space text-xl font-bold tracking-tighter">
              grace<span className="text-emerald-400">.</span>aliko
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex flex-col gap-6 text-2xl font-space">
            <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
          </div>

          <div className="mt-auto">
            <SocialLinks className="flex justify-center gap-6" />
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space leading-tight mb-6">
              <GlitchText>Full Stack Dev.</GlitchText> <br />
              <span className="text-emerald-400">NLP Explorer.</span> <br />
              <span className="inline-block relative">
                Lover of African Languages & Clean Code.
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-emerald-400"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-2xl">
              Building bridges between technology and African languages through
              code, research, and a passion for linguistic diversity.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild className="group">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cusrsor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}>
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              className="h-10 w-1 bg-gray-700 rounded-full overflow-hidden"
              animate={{
                background: ["#064e3b", "#10b981", "#064e3b"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
              }}>
              <motion.div
                className="h-5 w-full bg-emerald-400 rounded-full"
                animate={{
                  y: ["-100%", "100%"],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function NavLinks({
  mobile = false,
  onClick,
}: {
  mobile?: boolean;
  onClick?: () => void;
}) {
  const links = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/papers", label: "Papers" },
    { href: "/blog", label: "Blog" },
    { href: "/cv", label: "CV" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "relative font-medium hover:text-emerald-400 transition-colors",
            mobile ? "text-2xl py-2" : "text-sm"
          )}
          onClick={onClick}>
          {link.label}
        </Link>
      ))}
    </>
  );
}

function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Button variant="ghost" size="icon" asChild>
        <Link
          href="https://github.com/AlikoGrace"
          target="_blank"
          rel="noopener noreferrer">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <Link
          href="https://www.linkedin.com/in/grace-aliko/"
          target="_blank"
          rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <Link href="mailto:gracealiko09@gmail.com">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Link>
      </Button>
    </div>
  );
}
