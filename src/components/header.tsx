"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"
import { Logo } from "./logo"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header 
      className={`sticky top-0 z-40 w-full border-b backdrop-blur-md transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 dark:bg-gray-950/90 shadow-md border-gray-200/70 dark:border-gray-800/70" 
          : "bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative overflow-hidden">
                <Logo className="h-10 w-10 transition-transform duration-500 ease-out group-hover:scale-110" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                WallStreet <span className="text-emerald-600 dark:text-emerald-500 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-300">Parrots</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/meetings", label: "Meetings" },
              { href: "/resources", label: "Resources" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" }
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isActive(link.href) 
                    ? "text-emerald-600 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20" 
                    : "text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 dark:bg-emerald-400 animate-in fade-in duration-300"></span>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="hidden md:flex items-center rounded-full bg-emerald-600 px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-700 dark:hover:bg-emerald-600"
            >
              Join Us
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            
            <ThemeToggle />
            
            <button
              onClick={toggleMenu}
              className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span 
                  className={`block w-5 h-0.5 rounded-full bg-current absolute transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></span>
                <span 
                  className={`block w-5 h-0.5 rounded-full bg-current absolute transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span 
                  className={`block w-5 h-0.5 rounded-full bg-current absolute transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="space-y-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/meetings", label: "Meetings" },
              { href: "/resources", label: "Resources" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" }
            ].map((link, index) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`block py-2.5 px-4 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.href) 
                    ? "text-emerald-600 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20" 
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-emerald-600 dark:hover:text-emerald-500"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
              <Link 
                href="/contact" 
                className="flex items-center justify-center w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-base font-medium text-white shadow-sm hover:bg-emerald-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-700 dark:hover:bg-emerald-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Our Club
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 