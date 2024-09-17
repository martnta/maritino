'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FaSpotify, FaYoutube, FaInstagram, FaTwitter, FaFacebookF, FaLink, FaShoppingBag, FaMusic } from 'react-icons/fa'
import { MdMusicNote, MdPlayCircleFilled, MdMenu, MdClose } from 'react-icons/md'
import { IoCalendar } from 'react-icons/io5'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Maritino</h1>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-background md:bg-transparent`}>
            <ul className="flex flex-col md:flex-row   space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <li><Link href="#links" className="block hover:text-primary" onClick={toggleMenu}>Links</Link></li>
              <li><Link href="#about" className="block hover:text-primary" onClick={toggleMenu}>About</Link></li>
              <li><Link href="#music" className="block hover:text-primary" onClick={toggleMenu}>Music</Link></li>
              <li><Link href="#shows" className="block hover:text-primary" onClick={toggleMenu}>Shows</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 bg-gradient-to-r from-white via-gray-200 to-gray-200 pb-12 px-4">
        <div className="container mx-auto flex flex-col items-center text-center">
          <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <Image 
              src="/martin.jpg" 
              alt="Maritino" 
              width={300}
              height={300}
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover mb-8"
            />
          </motion.div>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold mb-4">Maritino</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-lg sm:text-xl mb-8">Malawian Artist</motion.p>
          <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <Button size="lg" className='bg-indigo-600'>
              <MdPlayCircleFilled className="mr-2 h-4 w-4" /> Listen Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Linktree Section */}
      <section id="links" className="py-16 px-4 bg-gradient-to-r from-indigo-400 via-pink-400 to-red-400 text-white">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Connect with Maritino</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Spotify", icon: FaSpotify, url: "#" },
              { name: "YouTube", icon: FaYoutube, url: "#" },
              { name: "Instagram", icon: FaInstagram, url: "#" },
              { name: "Twitter", icon: FaTwitter, url: "#" },
              { name: "Facebook", icon: FaFacebookF, url: "#" },
              { name: "Merch Store", icon: FaShoppingBag, url: "#" },
              { name: "Latest Release", icon: FaMusic, url: "#" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-lg rounded-lg p-4 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <link.icon className="h-6 w-6 sm:h-8 sm:w-8 mb-2" />
                <span className="font-medium text-sm sm:text-base">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">About Maritino</h2>
          <p className="text-base sm:text-lg mb-4">
            Maritino is a Malawian artist known for his soulful african melodies and heartfelt lyrics. 
            Drawing inspiration from nature and his interractions with all sorts of people, Maritino crafts songs that resonate 
            with listeners around the world.
          </p>
          <p className="text-base sm:text-lg">
            With a unique blend of acoustic guitar and haunting vocals, Maritino`s music 
            takes you on a journey through emotions and landscapes.
          </p>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Latest Tracks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {[1, 2, 3, 4].map((track) => (
              <div key={track} className="bg-card rounded-lg p-4 flex items-center space-x-4">
                <MdMusicNote className="h-10 w-10 sm:h-12 sm:w-12 text-primary" color='indigo' />
                <div>
                  <h3 className="font-semibold">Track {track}</h3>
                  <p className="text-sm text-muted-foreground">Album Name</p>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <MdPlayCircleFilled className="h-6 w-6" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows" className="py-12 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Upcoming Shows</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((show) => (
              <div key={show} className="bg-card rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <IoCalendar className="h-8 w-8 text-primary " color='orange' />
                  <div>
                    <h3 className="font-semibold">Show {show}</h3>
                    <p className="text-sm text-muted-foreground">Venue Name, City</p>
                  </div>
                </div>
                <Button className="w-full bg-indigo-600 sm:w-auto">Get Tickets</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="mb-4">Subscribe to our newsletter for the latest news and tour dates.</p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="mb-2 sm:mb-0 sm:rounded-r-none" />
            <Button type="submit" className="sm:rounded-l-none bg-indigo-600">Subscribe</Button>
          </form>
        </div>
      </section>

    </div>
  )
}