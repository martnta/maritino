import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2024 Maritino. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary"><FaInstagram className="h-6 w-6" /></a>
            <a href="#" className="hover:text-primary"><BsTwitterX className="h-6 w-6" /></a>
            <a href="#" className="hover:text-primary"><FaFacebookF className="h-6 w-6" /></a>
          </div>
        </div>
      </footer>
  )
}