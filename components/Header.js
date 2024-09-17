'use client'
import Link from 'next/link'
import { useState } from 'react'
import {  MdMenu, MdClose } from 'react-icons/md'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <header className="fixed  top-0 w-full bg-background/80 backdrop-blur-sm z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Maritino</h1>
      <button onClick={toggleMenu} className="md:hidden">
        {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-background md:bg-transparent`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
          <li><Link href="#links" className="block hover:text-primary" onClick={toggleMenu}>Links</Link></li>
          <li><Link href="#about" className="block hover:text-primary" onClick={toggleMenu}>About</Link></li>
          <li><Link href="#music" className="block hover:text-primary" onClick={toggleMenu}>Music</Link></li>
          <li><Link href="#shows" className="block hover:text-primary" onClick={toggleMenu}>Shows</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}