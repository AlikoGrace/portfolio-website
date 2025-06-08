"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Download,
  ExternalLink,
  FileText,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";

type PaperCategory =
  | "all"
  | "journal"
  | "conference"
  | "thesis"
  | "technical-report";

type Paper = {
  id: string;
  title: string;
  abstract: string;
  authors: string[];
  date: string;
  category: "journal" | "conference" | "thesis" | "technical-report";
  tags: string[];
  image: string;
  links: {
    pdf?: string;
    doi?: string;
    website?: string;
  };
};

const papers: Paper[] = [
  {
    id: "paper-1",
    title:
      "LexAfriq: A Multimodal AI System for Early Dyslexia Screening in African Classrooms",
    abstract:
      "We present LexAfriq, a mobile-first dyslexia screening system designed for low-resource African contexts. The tool leverages multimodal machine learning — combining handwriting analysis, eye tracking, and gamified cognitive tasks — to identify early signs of dyslexia in children without the need for expensive equipment or clinical supervision. Evaluated on simulated classroom data, LexAfriq achieves high accuracy while maintaining accessibility and child-friendly design. This work contributes a context-aware framework for equitable AI deployment in education.",
    authors: ["Grace Aliko", "Yaw Mensah", "Efua Osei"],
    date: "2024-05-17",
    category: "thesis",
    tags: [
      "Multimodal Learning",
      "Dyslexia",
      "Low-Resource NLP",
      "Education AI",
      "Social Impact",
    ],
    image: "/dyslexia.jpg?height=400&width=600",
    links: {
      pdf: "/papers/lexafriq-dyslexia-screening.pdf",
      doi: "https://doi.org/10.xxxx/lexafriq2024",
    },
  },

  {
    id: "paper-3",
    title:
      "Retrieval-Augmented Question Answering over Ghanaian Public Health Policies",
    abstract:
      "This report presents a Retrieval-Augmented Generation (RAG) pipeline for answering questions grounded in Ghana’s Ministry of Health policy documents. Using 31 real-world PDFs, we demonstrate that combining dense retrieval with a flan-T5 generator improves factual accuracy by 33% and eliminates hallucinations compared to baseline language models.",
    authors: ["Grace Aliko"],
    date: "2025-05-20",
    category: "technical-report",
    tags: ["RAG", "Information Retrieval", "Public Health", "Low-Resource NLP"],
    image: "/rag.png",
    links: {
      pdf: "/papers/ghana-health-policy-rag-report.pdf",
      doi: "https://github.com/AlikoGrace/ghana-health-policy-rag-qa",
    },
  },
];

export default function PapersPage() {
  const [activeCategory, setActiveCategory] = useState<PaperCategory>("all");
  const [hoveredPaper, setHoveredPaper] = useState<string | null>(null);

  const filteredPapers = papers.filter(
    (paper) => activeCategory === "all" || paper.category === activeCategory
  );

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <Navigation scrollY={scrollY} />
      <PageHeader
        title="Research Papers"
        description="My published research, conference papers, and academic work"
      />

      <div className="container mt-12">
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1 bg-gray-900/50 rounded-lg">
            {[
              { value: "all", label: "All Papers" },
              { value: "journal", label: "Journal Articles" },
              { value: "conference", label: "Conference Papers" },
              { value: "thesis", label: "Thesis" },
              { value: "technical-report", label: "Technical Reports" },
            ].map((category) => (
              <Button
                key={category.value}
                variant={
                  activeCategory === category.value ? "default" : "ghost"
                }
                size="sm"
                onClick={() =>
                  setActiveCategory(category.value as PaperCategory)
                }
                className="rounded-md">
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {filteredPapers.map((paper) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group"
              onMouseEnter={() => setHoveredPaper(paper.id)}
              onMouseLeave={() => setHoveredPaper(null)}>
              <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-black/50 transition-colors hover:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                  <div className="md:col-span-1 relative aspect-[3/2] overflow-hidden rounded-md">
                    <Image
                      src={paper.image || "/placeholder.svg"}
                      alt={paper.title}
                      width={600}
                      height={400}
                      className="object-cover h-full w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-2 left-2">
                      <Badge
                        variant="outline"
                        className="bg-black/50 backdrop-blur-sm border-gray-700">
                        {paper.category === "journal" && "Journal Article"}
                        {paper.category === "conference" && "Conference Paper"}
                        {paper.category === "thesis" && "Thesis"}
                      </Badge>
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <h3 className="text-xl font-bold font-space mb-2 group-hover:text-emerald-400 transition-colors">
                      {paper.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{paper.date}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{paper.authors.join(", ")}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4">
                      {paper.abstract}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {paper.links.pdf && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-2"
                          asChild>
                          <Link
                            href={paper.links.pdf}
                            target="_blank"
                            rel="noopener noreferrer">
                            <FileText className="h-4 w-4" />
                            PDF
                          </Link>
                        </Button>
                      )}
                      {paper.links.doi && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-2"
                          asChild>
                          <Link
                            href={paper.links.doi}
                            target="_blank"
                            rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            DOI
                          </Link>
                        </Button>
                      )}
                      {paper.links.website && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-2"
                          asChild>
                          <Link
                            href={paper.links.website}
                            target="_blank"
                            rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Website
                          </Link>
                        </Button>
                      )}
                      {paper.category === "thesis" && (
                        <Button size="sm" className="gap-2" asChild>
                          <Link href={paper.links.pdf || "#"} download>
                            <Download className="h-4 w-4" />
                            Download Thesis
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {filteredPapers.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No papers found</h3>
              <p className="text-gray-400">
                Try selecting a different category
              </p>

              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setActiveCategory("all")}>
                View all papers
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
