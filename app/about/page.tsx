"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Database, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillCard from "@/components/ui/skill-card";
import { Navigation } from "@/components/navigation";

import { PageHeader } from "@/components/page-header";

export default function AboutPage() {
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
        title="About Me"
        description="Applied NLP Researcher & Full-Stack Developer"
      />

      <div className="container mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold font-space mb-6">
              Hi, I'm <span className="text-emerald-400">Grace Aliko</span>
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>
                Over the past four years, I’ve worn many hats, growing from a
                curious computer science student into a full-stack developer and
                an applied NLP researcher, with a few detours through UI/UX
                design and cloud systems along the way.
              </p>

              <p>
                Right now, I’m a Teaching and Research Assistant at Kwame
                Nkrumah University of Science and Technology, where I blend my
                passion for teaching with hands-on research in natural language
                processing and large language models (LLMs). I hold a BSc in
                Computer Science and spend most of my time building useful
                things, asking too many questions, or trying to make AI systems
                that are a little smarter, a lot more helpful, and much more
                transparent.
              </p>

              <p>
                When I’m not working, I’m probably cooking or eating what I just
                cooked.If you're working on NLP, LLMs, or applied AI research,
                I’d be excited to learn more and explore how I can contribute.
              </p>
              <p>Need a full-stack web application? I build those too.</p>
            </div>

            <div className="mt-8">
              <Button asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative">
            <div className="relative w-full max-w-md mx-auto h-[480px] overflow-hidden rounded-2xl border-2 border-emerald-400/20">
              <Image
                src="/myprofile.jpg?height=600&width=600"
                alt="Grace Aliko"
                width={600}
                height={600}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex gap-2 mb-0">
                  <span className="px-3 py-1 bg-emerald-400/20 text-emerald-400 rounded-full text-xs font-medium">
                    NLP Research
                  </span>
                  <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-xs font-medium">
                    Software Developer
                  </span>
                </div>
                {/* <h3 className="text-xl font-bold font-space">Grace Aliko</h3>
                <p className="text-sm text-gray-300">Based in Accra, Ghana</p> */}
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl" />
          </motion.div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-bold font-space mb-8 text-center">
            What I <span className="text-emerald-400">Do</span>
          </h2>

          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="skills">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              </div>
            </TabsContent>

            <TabsContent value="experience">
              <div className="space-y-8">
                <ExperienceItem
                  title="Teaching and Research Assistant"
                  company="Kwame Nkrumah University of Science and Technology"
                  period="2021 - Present"
                  description="Assisting in teaching undergraduate courses in computer science and conducting research in NLP and machine learning. Mentoring students on projects and research."
                />

                <ExperienceItem
                  title="Full-Stack Developer Intern"
                  company="Zap Technologies"
                  period="2022 - 2023"
                  description="Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to design and implement new features."
                />

                <ExperienceItem
                  title="Data Science Intern"
                  company="Ghana Highways Authority"
                  period="2021 - 2022"
                  description="Worked on data analysis and visualization projects using Python and SQL. Assisted in the development of predictive models for traffic patterns."
                />
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="space-y-8">
                {/* <ExperienceItem
                  title="MSc in Cybersecurity"
                  company="Kwame Nkrumah University of Science and Technology"
                  period="2025 - present"
                  description="Focused on NLP techniques for low-resource languages. Thesis: 'Improving Neural Machine Translation for Ghanaian Languages'."
                /> */}

                <ExperienceItem
                  title="BSc in Computer Science"
                  company="Kwame Nkrumah University of Science and Technology"
                  period="2020 - 2024"
                  description="Graduated with First Class Honors. Specialized in software engineering and artificial intelligence."
                />

                <ExperienceItem
                  title="Certifications & Courses"
                  company="Various Institutions"
                  period="2018 - Present"
                  description="Deep Learning Specialization (Coursera), Full Stack Web Development (Udacity), Advanced NLP with Hugging Face (Hugging Face)."
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({
  title,
  company,
  period,
  description,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg hover:bg-gray-900/30 transition-colors">
      <div>
        <span className="text-sm text-gray-400">{period}</span>
      </div>

      <div className="md:col-span-3">
        <h3 className="text-xl font-bold font-space">{title}</h3>
        <p className="text-emerald-400 mb-2">{company}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}
