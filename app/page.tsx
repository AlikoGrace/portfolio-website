"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code,
  FileText,
  BookOpen,
  Sparkles,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/glitch-text";
import SkillCard from "@/components/ui/skill-card";

import { RotatingWord } from "@/components/rotating-word";

import { cn } from "@/lib/utils";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSections = () => {
    sectionsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-black text-white">
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
      <section className="min-h-screen flex flex-col justify-center pt-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space leading-tight mb-6">
              <GlitchText>AI Researcher.</GlitchText> <br />
              <span className="text-white">I build </span>
              <span className="text-emerald-400">
                <RotatingWord
                  words={["systems.", "models.", "tools.", "pipelines."]}
                />
              </span>{" "}
              <br />
              <span className="inline-block relative">
                Lover of Clean Code & Curious Machines.
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-emerald-400"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-2xl">
              Making language intelligent and tech more human, one model, one
              commit, one question at a time.
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={scrollToSections}>
          <div className="flex flex-col items-center gap-2 text-gray-300">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="p-2 bg-gray-900/50 rounded-full">
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
          </div>
        </motion.div>
      </section>

      {/* Scrollable Sections */}
      <div ref={sectionsRef}>
        {/* Featured Projects Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold font-space mb-2">
                  Featured Projects
                </h2>
                <p className="text-gray-400">
                  Some of my recent work in web development and NLP research
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "LexAfriq",
                  description:
                    "A mobile-first dyslexia screening app for African classrooms, combining handwriting, eye tracking, and gamified tasks — powered by multimodal AI.",
                  image: "/dyslexia.jpg?height=400&width=600",
                  tags: [
                    "Machine Learning",
                    "Computer Vision",
                    "PyTorch",
                    "Android",
                    "Social Impact",
                  ],
                  icon: <Code className="h-5 w-5" />,
                  href: "/blog/building-lexafriq",
                },
                {
                  title: "Ghana Health Policy QA",
                  description:
                    "A retrieval-augmented question answering system built over 31 Ghanaian public health policy PDFs. Improved answer accuracy by 33% and eliminated hallucinations using a dense retriever + flan-T5 model.",
                  image: "/rag2.png?height=400&width=600",
                  tags: [
                    "NLP",
                    "RAG",
                    "Spacy",
                    "FAISS",
                    "Hugging Face",
                    "Low-Resource AI",
                  ],
                  icon: <Code className="h-5 w-5" />,
                  href: "/blog/rag",
                },
                {
                  title: "KNUST Expresso",
                  description:
                    "A full-stack web application for KNUST students and alumni to request for academic transcripts and certificates online. Built with React, Node.js, and MongoDB.",
                  image: "/expresso.png?height=400&width=600",
                  tags: ["REACT", "NODE.JS", "POSTMAN", "MONGODB"],
                  icon: <Code className="h-5 w-5" />,
                  href: "/blog/ghana-health-policy-qa",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Link href={project.href || "#"} className="block h-full">
                    <div className="border border-gray-800 rounded-lg overflow-hidden h-full flex flex-col group hover:border-gray-700 transition-colors">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-400">
                            {project.icon}
                          </div>
                        </div>
                      </div>

                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold font-space mb-2 group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 flex-grow">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Papers Section */}
        <section className="py-20">
          <div className="container">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold font-space mb-2">
                  Research Papers
                </h2>
                <p className="text-gray-400">
                  My published research and academic contributions
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/papers">
                  View All Papers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <BookOpen className="h-5 w-5" />,
                  title:
                    "Retrieval-Augmented Question Answering over Ghanaian Public Health Policies",

                  authors: ["Grace Aliko"],
                  date: "2025-05-20",
                  category: "technical-report",
                  links: {
                    pdf: "/papers/ghana-health-policy-rag-report.pdf",
                  },
                },
                ,
                {
                  title:
                    "Transfer Learning Approaches for Low-Resource African Languages",
                  authors: "Grace Aliko",
                  date: "2021",
                  journal: " ",
                  icon: <FileText className="h-5 w-5" />,
                },
              ].map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors group">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-emerald-400/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                        {paper.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-space mb-1 group-hover:text-emerald-400 transition-colors">
                          {paper.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                          {paper.authors}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {paper.date} • {paper.journal}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-space mb-2">
                Skills & Expertise
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A combination of technical skills in development and research
                that allows me to build innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}>
                <SkillCard
                  icon={<Sparkles className="h-6 w-6" />}
                  title="Applied NL and NLP Research"
                  description="Researching and engineering NLP and machine learning systems with a focus on model efficiency, deployment, and real-world impact."
                  skills={[
                    "PyTorch",
                    "Scikit-learn",
                    "Pandas",
                    "FastAPI",
                    "TensorRT",
                    "CUDA",
                    "LangChanin",
                    "LlamaIndex",
                    "Hugging Face",
                    "NLTK",
                    "spaCy",
                    "Transformers",
                  ]}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                <SkillCard
                  icon={<Code className="h-6 w-6" />}
                  title="Web & App Engineering"
                  description="Developing accessible, high-performance web applications using modern frameworks, robust APIs, and clean architecture."
                  skills={[
                    "React",
                    "Next.js",
                    "Node.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "FastAPI",
                    "Supabase",
                    "PostgreSQL",
                  ]}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <SkillCard
                  icon={<Database className="h-6 w-6" />}
                  title="Systems & Infrastructure"
                  description="Designing scalable systems and managing modern cloud/database infrastructure with performance and reliability in mind."
                  skills={[
                    "Python",
                    "PostgreSQL",
                    "MongoDB",
                    "Supabase",
                    "Redis",
                    "GraphQL",
                    "Docker",
                    "AWS",
                    "gRPC",
                  ]}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                <h2 className="text-3xl font-bold font-space mb-4">
                  Interested in working together?
                </h2>
                <p className="text-gray-400 mb-8">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Get in Touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/cv">View My CV</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
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
