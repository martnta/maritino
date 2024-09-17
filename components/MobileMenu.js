"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-purple-900">
        <nav className="flex flex-col gap-4">
          <Button variant="ghost" asChild onClick={() => setIsOpen(false)}><Link href="/">Home</Link></Button>
          <Button variant="ghost" asChild onClick={() => setIsOpen(false)}><Link href="/music">Music</Link></Button>
          <Button variant="ghost" asChild onClick={() => setIsOpen(false)}><Link href="/tour">Tour</Link></Button>
          <Button variant="ghost" asChild onClick={() => setIsOpen(false)}><Link href="/contact">Contact</Link></Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
