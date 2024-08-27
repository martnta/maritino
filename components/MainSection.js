"use client"

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function MainSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center p-4">
      <motion.h2 
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to the Cosmic Experience
      </motion.h2>
      <motion.p 
        className="text-lg sm:text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Embark on a journey through sound and space
      </motion.p>
      <Button size="lg">Explore Music</Button>
    </section>
  )
}
