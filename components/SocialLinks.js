"use client"

import { Instagram, Twitter, Youtube } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function SocialLinks() {
  return (
    <section className="py-12 sm:py-16 px-4 text-center">
      <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Connect with Cosmic Harmony</h3>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" size="icon">
          <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
        <Button variant="outline" size="icon">
          <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
        <Button variant="outline" size="icon">
          <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </div>
    </section>
  )
}
