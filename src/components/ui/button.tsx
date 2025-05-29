"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  effect?: "none" | "ripple" | "pulse" | "shine";
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  effect = "none",
  onClick,
  ...props
}: ButtonProps) {
  const [rippleEffect, setRippleEffect] = useState({ active: false, x: 0, y: 0 });
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (effect === "ripple") {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setRippleEffect({ active: true, x, y });
      setTimeout(() => setRippleEffect({ active: false, x: 0, y: 0 }), 600);
    }
    
    onClick?.(e);
  };
  
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variantStyles = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 shadow-sm",
    secondary: "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 shadow-sm",
    outline: "border border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-950/20",
    ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100",
    link: "text-emerald-600 hover:text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-500 dark:hover:text-emerald-400 p-0",
  };
  
  const sizeStyles = {
    sm: "text-xs rounded-md px-3 py-1.5",
    md: "text-sm rounded-md px-4 py-2",
    lg: "text-base rounded-md px-5 py-2.5",
    icon: "h-9 w-9 rounded-full",
  };
  
  const effectStyles = {
    none: "",
    ripple: "relative overflow-hidden",
    pulse: "button-pulse",
    shine: "relative overflow-hidden shine-effect",
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        effectStyles[effect],
        variant !== "link" && (size === "icon" ? "p-0" : ""),
        className
      )}
      disabled={disabled || isLoading}
      onClick={handleClick}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      
      {effect === "ripple" && rippleEffect.active && (
        <span 
          className="absolute rounded-full bg-white/30 animate-ripple"
          style={{
            top: rippleEffect.y,
            left: rippleEffect.x,
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
      
      {effect === "shine" && (
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span className="absolute top-0 left-0 right-0 h-full w-1/3 -translate-x-full animate-[shine_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></span>
        </span>
      )}
    </button>
  );
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  effect?: "none" | "pulse" | "shine";
}

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  isExternal = false,
  leftIcon,
  rightIcon,
  effect = "none",
  ...props
}: ButtonLinkProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 shadow-sm",
    secondary: "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 shadow-sm",
    outline: "border border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-950/20",
    ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100",
    link: "text-emerald-600 hover:text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-500 dark:hover:text-emerald-400 p-0",
  };
  
  const sizeStyles = {
    sm: "text-xs rounded-md px-3 py-1.5",
    md: "text-sm rounded-md px-4 py-2",
    lg: "text-base rounded-md px-5 py-2.5",
    icon: "h-9 w-9 rounded-full",
  };
  
  const effectStyles = {
    none: "",
    pulse: "button-pulse",
    shine: "relative overflow-hidden shine-effect",
  };
  
  const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
  
  return (
    <Link
      href={href}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        effectStyles[effect],
        variant !== "link" && (size === "icon" ? "p-0" : ""),
        className
      )}
      {...linkProps}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
      
      {effect === "shine" && (
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span className="absolute top-0 left-0 right-0 h-full w-1/3 -translate-x-full animate-[shine_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></span>
        </span>
      )}
    </Link>
  );
} 