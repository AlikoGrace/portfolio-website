"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GlitchTextProps {
  children: React.ReactNode
  interval?: number
  duration?: number
  className?: string
}

export function GlitchText({ children, interval = 3000, duration = 100, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsGlitching(true)

      setTimeout(() => {
        setIsGlitching(false)
      }, duration)
    }, interval)

    return () => clearInterval(intervalId)
  }, [interval, duration])

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={isGlitching ? "opacity-0" : "opacity-100"}>{children}</span>

      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-emerald-400"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
            animate={{
              x: [0, -2, 0, 2, 0],
            }}
            transition={{ duration: duration / 1000, times: [0, 0.25, 0.5, 0.75, 1] }}
          >
            {children}
          </motion.span>

          <motion.span
            className="absolute top-0 left-0"
            style={{ clipPath: "polygon(0 45%, 100% 45%, 100% 100%, 0 100%)" }}
            animate={{
              x: [0, 2, 0, -2, 0],
            }}
            transition={{ duration: duration / 1000, times: [0, 0.25, 0.5, 0.75, 1] }}
          >
            {children}
          </motion.span>
        </>
      )}
    </span>
  )
}
