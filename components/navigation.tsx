"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

interface NavigationProps {
  scrollY?: number;
}

export function Navigation({ scrollY = 0 }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrollY > 50 ? "bg-background/80 backdrop-blur-md py-3" : "py-6"
        )}>
        <div className="container flex items-center justify-between">
          <Link
            href="/"
            className="font-space text-xl font-bold tracking-tighter hover:text-primary transition-colors">
            grace<span className="text-primary">.</span>aliko
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <SocialLinks className="flex gap-2" />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-background z-50 flex flex-col p-6"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}>
          <div className="flex justify-between items-center mb-12">
            <Link
              href="/"
              className="font-space text-xl font-bold tracking-tighter">
              grace<span className="text-primary">.</span>aliko
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
    </>
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
            "relative font-medium hover:text-primary transition-colors",
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
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <Link href="mailto:hello@gracealiko.com">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Link>
      </Button>
    </div>
  );
}
