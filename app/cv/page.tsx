"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Download, FileText, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { Navigation } from "@/components/navigation";

export default function CVPage() {
  const [activeView, setActiveView] = useState<"normal" | "terminal">("normal");
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
        title="Curriculum Vitae"
        description="My professional background, skills, and experience"
      />

      <div className="container mt-12">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant={activeView === "normal" ? "default" : "outline"}
              onClick={() => setActiveView("normal")}
              className="gap-2">
              <FileText className="h-4 w-4" />
              Standard View
            </Button>

            <Button
              variant={activeView === "terminal" ? "default" : "outline"}
              onClick={() => setActiveView("terminal")}
              className="gap-2">
              <Terminal className="h-4 w-4" />
              Terminal View
            </Button>
          </div>

          <Button asChild className="gap-2">
            <Link href="/grace-aliko-cv.pdf" download>
              <Download className="h-4 w-4" />
              Download PDF
            </Link>
          </Button>
        </div>

        {activeView === "normal" ? <StandardCV /> : <TerminalCV />}
      </div>
    </div>
  );
}

function StandardCV() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/30 border border-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
      <div className="mb-8 pb-8 border-b border-gray-800">
        <h2 className="text-3xl font-bold font-space mb-2">Grace Aliko</h2>
        <p className="text-emerald-400 text-lg mb-4">
          Full Stack Developer & NLP Researcher
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          <div>
            <p>Kumasi, Ghana</p>
            <p>gracealiko09@gmail.com</p>
          </div>
          <div className="md:text-right">
            <p>github.com/AlikoGrace</p>
            <p>linkedin.com/in/gracealiko</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold font-space mb-4 flex items-center">
          <Code className="h-5 w-5 mr-2 text-emerald-400" />
          Professional Summary
        </h3>
        <p className="text-gray-300">
          Full stack developer with 5+ years of experience and a passion for NLP
          research, specializing in building accessible web applications and
          developing language technology solutions for low-resource African
          languages. Committed to creating technology that bridges linguistic
          divides and empowers African language speakers.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold font-space mb-4 flex items-center">
          <Code className="h-5 w-5 mr-2 text-emerald-400" />
          Work Experience
        </h3>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-lg font-bold"> Full Stack Developer</h4>
              <span className="text-gray-400 text-sm">2021 - Present</span>
            </div>
            <p className="text-emerald-400 mb-2">ZapTek Ghana</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>
                Lead development of web applications with a focus on
                accessibility and performance
              </li>
              <li>
                Mentor junior developers and implement best practices across
                projects
              </li>
              <li>
                Architect scalable solutions using Next.js, TypeScript, and
                PostgreSQL
              </li>
              <li>
                Collaborate with UX designers to create intuitive user
                experiences
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-lg font-bold">Teaching Assistant</h4>
              <span className="text-gray-400 text-sm">2020 - 2021</span>
            </div>
            <p className="text-emerald-400 mb-2">African Languages Institute</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Assisted in research on NLP for low-resource languages</li>
              <li>
                Developed data collection methodologies and annotation
                guidelines
              </li>
              <li>
                Implemented and evaluated neural models for various NLP tasks
              </li>
              <li>
                Assisted in teaching undergraduate courses on NLP and machine
                learning
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold font-space mb-4 flex items-center">
          <Code className="h-5 w-5 mr-2 text-emerald-400" />
          Education
        </h3>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-lg font-bold">
                BSc in Computer Science (Honors)
              </h4>
              <span className="text-gray-400 text-sm">2019 - 2021</span>
            </div>
            <p className="text-emerald-400 mb-2">
              Kwame Nkrumah UNiversity of Science and Technology
            </p>
            <p className="text-gray-300">
              Focused on NLP techniques for low-resource languages. <br />
              Thesis: "LeqAfriQ: Dyslexia Detection in African Languages using
              Machine Learning"
            </p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-lg font-bold">BSc in Computer Science</h4>
              <span className="text-gray-400 text-sm">2014 - 2018</span>
            </div>
            <p className="text-emerald-400 mb-2">
              Kwame Nkrumah University of Science and Technology
            </p>
            <p className="text-gray-300">
              Graduated with First Class Honors. <br />
              Specialized in software engineering and artificial intelligence.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold font-space mb-4 flex items-center">
          <Code className="h-5 w-5 mr-2 text-emerald-400" />
          Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold mb-2">Frontend Development</h4>
            <p className="text-gray-300">
              React, Next.js, TypeScript, Tailwind CSS, Framer Motion,
              Accessibility (WCAG)
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-2">Backend Development</h4>
            <p className="text-gray-300">
              Node.js, Express, GraphQL, REST APIs, PostgreSQL, MongoDB
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-2">NLP & Machine Learning</h4>
            <p className="text-gray-300">
              PyTorch, Hugging Face Transformers, spaCy, NLTK, TensorFlow
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-2">Languages</h4>
            <p className="text-gray-300">
              JavaScript/TypeScript, Python, SQL, HTML/CSS, Twi (native),
              English (fluent)
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold font-space mb-4 flex items-center">
          <Code className="h-5 w-5 mr-2 text-emerald-400" />
          Publications & Projects
        </h3>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <span className="font-medium">African Languages Translator</span> -
            A neural machine translation system for low-resource African
            languages
          </li>
          <li>
            <span className="font-medium">Twi NLP Toolkit</span> - An
            open-source NLP toolkit for processing and analyzing text in Twi
            language
          </li>
          <li>
            <span className="font-medium">
              "Improving Named Entity Recognition for Ghanaian Languages"
            </span>{" "}
            - Published in the Journal of African NLP, 2022
          </li>
          <li>
            <span className="font-medium">
              "Transfer Learning Approaches for Low-Resource African Languages"
            </span>{" "}
            - Conference paper, AfricaNLP Workshop, 2021
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

function TerminalCV() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden max-w-4xl mx-auto font-mono">
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <span className="text-gray-400 text-sm ml-2">grace-aliko-cv.sh</span>
      </div>

      <div className="p-6 text-sm overflow-auto max-h-[70vh]">
        <div className="text-green-400 mb-4">
          <p>$ ./view-profile.sh grace_aliko</p>
        </div>

        <div className="mb-6">
          <p className="text-emerald-400 font-bold text-lg">GRACE ALIKO</p>
          <p className="text-gray-300">Full Stack Developer & NLP Researcher</p>
          <p className="text-gray-500">Location: Accra, Ghana</p>
          <p className="text-gray-500">Contact: hello@gracealiko.com</p>
          <p className="text-gray-500">Web: gracealiko.com</p>
        </div>

        <div className="mb-6">
          <p className="text-yellow-400 font-bold">$ cat about.txt</p>
          <p className="text-gray-300 mt-2">
            Full stack developer with 5+ years of experience and a passion for
            NLP research, specializing in building accessible web applications
            and developing language technology solutions for low-resource
            African languages.
          </p>
        </div>

        <div className="mb-6">
          <p className="text-yellow-400 font-bold">$ ls -la ./experience/</p>
          <div className="grid grid-cols-12 text-gray-300 mt-2">
            <div className="col-span-5">2021-present</div>
            <div className="col-span-7">
              Senior Full Stack Developer @ TechInnovate Ghana
            </div>
            <div className="col-span-5">2020-2021</div>
            <div className="col-span-7">
              NLP Research Assistant @ African Languages Institute
            </div>
            <div className="col-span-5">2018-2020</div>
            <div className="col-span-7">
              Frontend Developer @ Global Solutions Ltd
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-yellow-400 font-bold">$ ls -la ./education/</p>
          <div className="grid grid-cols-12 text-gray-300 mt-2">
            <div className="col-span-5">2019-2021</div>
            <div className="col-span-7">
              MSc in Computational Linguistics @ University of Ghana
            </div>
            <div className="col-span-5">2014-2018</div>
            <div className="col-span-7">BSc in Computer Science @ KNUST</div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-yellow-400 font-bold">$ cat skills.json | jq</p>
          <pre className="text-gray-300 mt-2 whitespace-pre-wrap">
            {`{
  "frontend": [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Accessibility (WCAG)"
  ],
  "backend": [
    "Node.js",
    "Express",
    "GraphQL",
    "REST APIs",
    "PostgreSQL",
    "MongoDB"
  ],
  "nlp": [
    "PyTorch",
    "Hugging Face Transformers",
    "spaCy",
    "NLTK",
    "TensorFlow"
  ],
  "languages": [
    "JavaScript/TypeScript",
    "Python",
    "SQL",
    "HTML/CSS",
    "Twi (native)",
    "English (fluent)"
  ]
}`}
          </pre>
        </div>

        <div className="mb-6">
          <p className="text-yellow-400 font-bold">$ ls -la ./projects/</p>
          <div className="text-gray-300 mt-2">
            <p>drwxr-xr-x african-languages-translator</p>
            <p>drwxr-xr-x twi-nlp-toolkit</p>
            <p>drwxr-xr-x e-commerce-platform</p>
            <p>drwxr-xr-x language-learning-app</p>
          </div>
        </div>

        <div>
          <p className="text-yellow-400 font-bold">$ ls -la ./publications/</p>
          <div className="text-gray-300 mt-2">
            <p>-rw-r--r-- improving-ner-for-ghanaian-languages.pdf</p>
            <p>-rw-r--r-- transfer-learning-for-low-resource-languages.pdf</p>
          </div>
        </div>

        <div className="mt-6 text-green-400">
          <p>$ _</p>
        </div>
      </div>
    </motion.div>
  );
}
