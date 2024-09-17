import { FaSpotify, FaYoutube, FaInstagram, FaFacebookF, FaLink, FaShoppingBag, FaMusic } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";
export default function Linktree() {
  const links = [
    { name: "Spotify", icon: FaSpotify, url: "#", color: "hover:bg-green-500", iconColor: "text-white" },
    { name: "YouTube", icon: FaYoutube, url: "#", color: "hover:bg-red-500", iconColor: "text-white" },
    { name: "Instagram", icon: FaInstagram, url: "#", color: "hover:bg-pink-500", iconColor: "text-white" },
    { name: "Twitter", icon: BsTwitterX, url: "#", color: "hover:bg-blue-400", iconColor: "text-white" },
    { name: "Facebook", icon: FaFacebookF, url: "#", color: "hover:bg-blue-600", iconColor: "text-white" },
    
    { name: "Merch Store", icon: FaShoppingBag, url: "#", color: "hover:bg-purple-500", iconColor: "text-white" },
    { name: "Latest Release", icon: FaMusic, url: "#", color: "hover:bg-indigo-500", iconColor: "text-white" },
  ]

  return (
    <section id="links" className="py-16 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
    <div className="container mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Connect with Maritino</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className={`bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-lg rounded-lg p-4 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${link.color}`}
          >
            <link.icon className={`h-6 w-6 sm:h-8 sm:w-8 mb-2 ${link.iconColor}`} />
            <span className="font-medium text-sm sm:text-base">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
  )
}