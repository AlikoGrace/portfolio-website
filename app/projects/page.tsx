"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/page-header";

type ProjectCategory = "all" | "web" | "nlp" | "open-source";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "web" | "nlp" | "open-source";
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
};

const projects: Project[] = [
  {
    id: "project-1",
    title: "African Languages Translator",
    description:
      "A neural machine translation system for low-resource African languages, focusing on Twi, Ewe, and Ga.",
    image: "/placeholder.svg?height=600&width=800",
    category: "nlp",
    tags: ["PyTorch", "Transformers", "React", "Flask"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    id: "project-2",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform for African artisans to sell their products globally.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    tags: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    id: "project-3",
    title: "Twi NLP Toolkit",
    description:
      "An open-source NLP toolkit for processing and analyzing text in Twi language.",
    image: "/placeholder.svg?height=600&width=800",
    category: "open-source",
    tags: ["Python", "spaCy", "NLTK", "Jupyter"],
    links: {
      github: "https://github.com",
    },
  },
  {
    id: "project-4",
    title: "Language Learning App",
    description:
      "An interactive app for learning African languages through gamification and AI-powered feedback.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    tags: ["React Native", "Firebase", "TensorFlow.js"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    id: "project-5",
    title: "African Named Entity Recognition",
    description:
      "A research project on improving named entity recognition for African languages and contexts.",
    image: "/placeholder.svg?height=600&width=800",
    category: "nlp",
    tags: ["Hugging Face", "PyTorch", "Transformers"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    id: "project-6",
    title: "Developer Portfolio Template",
    description:
      "An open-source, customizable portfolio template for developers with a focus on accessibility.",
    image: "/placeholder.svg?height=600&width=800",
    category: "open-source",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <PageHeader
        title="Projects"
        description="A showcase of my work in web development and NLP research"
      />

      <div className="container mt-12">
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1 bg-gray-900/50 rounded-lg">
            {[
              { value: "all", label: "All Projects" },
              { value: "web", label: "Web Development" },
              { value: "nlp", label: "NLP Research" },
              { value: "open-source", label: "Open Source" },
            ].map((category) => (
              <Button
                key={category.value}
                variant={
                  activeCategory === category.value ? "default" : "ghost"
                }
                size="sm"
                onClick={() =>
                  setActiveCategory(category.value as ProjectCategory)
                }
                className="rounded-md">
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}>
              <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-black/50 h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="outline"
                      className="bg-black/50 backdrop-blur-sm border-gray-700">
                      {project.category === "web" && "Web Development"}
                      {project.category === "nlp" && "NLP Research"}
                      {project.category === "open-source" && "Open Source"}
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.links.github && (
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 bg-black/50 backdrop-blur-sm border-gray-700"
                        asChild>
                        <Link
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 bg-black/50 backdrop-blur-sm border-gray-700"
                        asChild>
                        <Link
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">Live Demo</span>
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="flex flex-col flex-grow p-6">
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

                <div
                  className={`absolute inset-0 border-2 border-emerald-400 rounded-lg pointer-events-none transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
