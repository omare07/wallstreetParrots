"use client"

import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const handleToggle = () => {
    setIsAnimating(true)
    toggleTheme()
    
    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 600)
  }

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <div className="h-4 w-4 rounded-full bg-gray-300 dark:bg-gray-600"></div>
      </div>
    )
  }

  return (
    <button
      onClick={handleToggle}
      className={`relative overflow-hidden flex items-center justify-center rounded-full p-2 shadow-sm border border-gray-200 dark:border-gray-800 transition-all duration-300 ${
        isAnimating ? "scale-90" : "hover:scale-110"
      } ${
        theme === "dark" 
          ? "bg-gray-800 hover:bg-gray-700" 
          : "bg-amber-50 hover:bg-amber-100"
      }`}
      aria-label="Toggle theme"
    >
      {/* Ripple effect */}
      {isAnimating && (
        <span 
          className={`absolute inset-0 rounded-full ${
            theme === "dark" ? "bg-yellow-400" : "bg-gray-800"
          } animate-ripple`}
        ></span>
      )}
      
      <div className="relative">
        {theme === "dark" ? (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className={`w-5 h-5 text-yellow-400 ${isAnimating ? "animate-spin" : ""}`}
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className={`w-5 h-5 text-gray-800 ${isAnimating ? "animate-spin" : ""}`}
          >
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
          </svg>
        )}
      </div>
      
      {/* Stars when in dark mode */}
      {theme === "dark" && (
        <>
          <span className="absolute top-1 right-2 h-1 w-1 bg-yellow-300 rounded-full animate-twinkle"></span>
          <span className="absolute bottom-2 left-1 h-0.5 w-0.5 bg-yellow-300 rounded-full animate-twinkle delay-300"></span>
          <span className="absolute top-2 left-2 h-0.5 w-0.5 bg-yellow-300 rounded-full animate-twinkle delay-500"></span>
        </>
      )}
    </button>
  )
} 