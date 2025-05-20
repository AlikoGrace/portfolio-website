"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

// Sample responses for the bot
const botResponses: Record<string, string> = {
  greeting: "Hello! I'm GraceBot, Grace Aliko's virtual assistant. How can I help you today?",
  fallback:
    "I don't have specific information about that yet. Grace is constantly updating me with new information. Feel free to ask something else!",
  skills:
    "Grace is skilled in full stack development (React, Next.js, Node.js, TypeScript) and NLP research (PyTorch, Hugging Face, NLTK). She's passionate about building accessible web applications and developing language technology for low-resource African languages.",
  experience:
    "Grace has worked as a Senior Full Stack Developer at TechInnovate Ghana (2021-present), an NLP Research Assistant at African Languages Institute (2020-2021), and a Frontend Developer at Global Solutions Ltd (2018-2020).",
  education:
    "Grace holds an MSc in Computational Linguistics from the University of Ghana (2019-2021) and a BSc in Computer Science from Kwame Nkrumah University of Science and Technology (2014-2018).",
  projects:
    "Grace has worked on several projects including an African Languages Translator, Twi NLP Toolkit, E-commerce Platform, and Language Learning App. You can check them out in the Projects section!",
  languages:
    "Grace is fluent in English and Twi. She also has programming experience with JavaScript/TypeScript, Python, SQL, and HTML/CSS.",
  contact:
    "You can reach Grace at hello@gracealiko.com or connect with her on LinkedIn and GitHub. There's also a contact form in the Contact section of this website.",
  location: "Grace is based in Accra, Ghana.",
  research:
    "Grace's research focuses on improving NLP for low-resource African languages, particularly Ghanaian languages like Twi, Ewe, and Ga. She's interested in transfer learning approaches and building better datasets for these languages.",
  hobbies:
    "When not coding or researching, Grace enjoys exploring linguistic patterns, contributing to open source, and reading books on language evolution.",
}

// Keywords to match in user queries
const keywordMap: Record<string, string[]> = {
  greeting: ["hi", "hello", "hey", "greetings", "howdy"],
  skills: ["skills", "abilities", "good at", "expertise", "tech stack", "technologies", "stack", "framework"],
  experience: ["experience", "work", "job", "career", "professional", "employment"],
  education: ["education", "degree", "university", "school", "study", "studied", "qualification"],
  projects: ["projects", "portfolio", "work", "built", "created", "developed", "applications"],
  languages: ["languages", "speak", "programming languages", "coding languages"],
  contact: ["contact", "email", "reach", "message", "connect"],
  location: ["location", "live", "based", "country", "city", "where", "ghana", "accra"],
  research: ["research", "nlp", "language", "african languages", "low-resource", "papers", "publications"],
  hobbies: ["hobbies", "interests", "free time", "fun", "enjoy", "passion", "outside work"],
}

export function GraceBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Hi there! I'm GraceBot, Grace's virtual assistant. Ask me anything about Grace's skills, experience, or projects!",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot typing
    setIsTyping(true)
    setTimeout(
      () => {
        const botResponse = generateBotResponse(input)
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: botResponse,
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    // Check for keyword matches
    for (const [responseKey, keywords] of Object.entries(keywordMap)) {
      for (const keyword of keywords) {
        if (input.includes(keyword)) {
          return botResponses[responseKey]
        }
      }
    }

    // Check for specific questions
    if (input.includes("who are you") || input.includes("what are you")) {
      return "I'm GraceBot, a virtual assistant for Grace Aliko's portfolio website. I can answer questions about Grace's background, skills, and projects!"
    }

    if (input.includes("who is grace") || input.includes("about grace")) {
      return "Grace Aliko is a Ghanaian full stack developer and aspiring NLP researcher with a passion for building bridges between technology and African languages. She creates elegant, functional applications while researching ways to improve natural language processing for low-resource African languages."
    }

    if (input.includes("thank")) {
      return "You're welcome! Feel free to ask if you have any other questions about Grace."
    }

    // Fallback response
    return botResponses.fallback
  }

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden bg-black/30">
      <div className="h-[500px] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex items-start gap-2 max-w-[80%] ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === "user"
                        ? "bg-emerald-400/20 text-emerald-400"
                        : "bg-purple-400/20 text-purple-400"
                    }`}
                  >
                    {message.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === "user" ? "bg-emerald-400/10 text-white" : "bg-gray-800/50 text-gray-200"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs mt-1 opacity-50">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                <div className="flex items-start gap-2 max-w-[80%]">
                  <div className="h-8 w-8 rounded-full bg-purple-400/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="p-3 rounded-lg bg-gray-800/50 text-gray-200">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-gray-800 p-4">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input
              type="text"
              placeholder="Ask GraceBot a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-gray-900/50 border-gray-800"
            />
            <Button type="submit" size="icon" disabled={!input.trim() || isTyping}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
