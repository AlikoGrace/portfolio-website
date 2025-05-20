"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-20" />
      </div>

      <div className="container relative z-10 py-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-bold tracking-tight font-space">{title}</h1>
          {description && <p className="mt-4 text-xl text-gray-400">{description}</p>}
        </motion.div>
      </div>
    </div>
  )
}
