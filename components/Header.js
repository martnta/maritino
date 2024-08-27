"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export default function Header() {
  const NavItems = () => (
    <>
      <Button variant="ghost">Home</Button>
      <Button variant="ghost">Music</Button>
      <Button variant="ghost">Tour</Button>
      <Button variant="ghost">Contact</Button>
    </>
  )

  return (
    <header className="p-4 flex justify-between items-center">
      <h1 className="text-xl sm:text-2xl font-bold">Cosmic Harmony</h1>
      <nav className="hidden md:block">
        <NavItems />
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-purple-900">
          <nav className="flex flex-col gap-4">
            <NavItems />
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
