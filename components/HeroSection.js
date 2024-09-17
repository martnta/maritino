'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MdPlayCircleFilled } from 'react-icons/md'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-32 sm:pt-40 pb-12 px-4">
      <div className="container mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src="/martin.jpg" 
            alt="Maritino" 
            width={300}
            height={300}
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover mb-8"
          />
        </motion.div>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Maritino
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg sm:text-xl mb-8"
        >
          Malawian Artist
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button size="lg" className="group">
            <MdPlayCircleFilled className="mr-2 h-4 w-4 group-hover:animate-pulse" /> Listen Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}