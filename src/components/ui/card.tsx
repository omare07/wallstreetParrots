import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  interactive?: boolean;
  variant?: "default" | "outline" | "ghost";
  hoverEffect?: "lift" | "glow" | "scale" | "border" | "none";
}

export function Card({
  children,
  className,
  hover = false,
  interactive = false,
  variant = "default",
  hoverEffect = "lift",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-300",
        variant === "default" && "bg-white dark:bg-gray-800 shadow-md",
        variant === "outline" && "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
        variant === "ghost" && "bg-gray-50 dark:bg-gray-900",
        hover && hoverEffect === "lift" && "hover:shadow-lg hover:-translate-y-1",
        hover && hoverEffect === "glow" && "hover:shadow-[0_0_15px_rgba(20,184,116,0.5)] dark:hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]",
        hover && hoverEffect === "scale" && "hover:scale-[1.02] hover:shadow-md",
        hover && hoverEffect === "border" && "hover:border-emerald-500 dark:hover:border-emerald-400 border border-transparent",
        interactive && "cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function CardHeader({
  children,
  className,
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={cn("p-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export function CardTitle({
  children,
  className,
  ...props
}: CardTitleProps) {
  return (
    <h3
      className={cn("text-xl font-semibold text-gray-900 dark:text-white", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export function CardDescription({
  children,
  className,
  ...props
}: CardDescriptionProps) {
  return (
    <p
      className={cn("text-gray-600 dark:text-gray-400 mt-2", className)}
      {...props}
    >
      {children}
    </p>
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function CardContent({
  children,
  className,
  ...props
}: CardContentProps) {
  return (
    <div
      className={cn("p-6 pt-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function CardFooter({
  children,
  className,
  ...props
}: CardFooterProps) {
  return (
    <div
      className={cn("px-6 py-4 bg-gray-50 dark:bg-gray-900/50", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  src: string;
  alt: string;
  aspectRatio?: "auto" | "square" | "video" | "wide";
  overlay?: boolean;
}

export function CardImage({
  className,
  src,
  alt,
  aspectRatio = "auto",
  overlay = false,
  ...props
}: CardImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        aspectRatio === "square" && "aspect-square",
        aspectRatio === "video" && "aspect-video",
        aspectRatio === "wide" && "aspect-[21/9]",
        className
      )}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      )}
    </div>
  );
}

// Add this new component for interactive card links
interface CardLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  href: string;
  variant?: "default" | "outline" | "ghost";
  hoverEffect?: "lift" | "glow" | "scale" | "border" | "none";
}

export function CardLink({
  children,
  className,
  href,
  variant = "default",
  hoverEffect = "lift",
  ...props
}: CardLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "block rounded-xl overflow-hidden transition-all duration-300",
        variant === "default" && "bg-white dark:bg-gray-800 shadow-md",
        variant === "outline" && "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
        variant === "ghost" && "bg-gray-50 dark:bg-gray-900",
        hoverEffect === "lift" && "hover:shadow-lg hover:-translate-y-1",
        hoverEffect === "glow" && "hover:shadow-[0_0_15px_rgba(20,184,116,0.5)] dark:hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]",
        hoverEffect === "scale" && "hover:scale-[1.02] hover:shadow-md",
        hoverEffect === "border" && "hover:border-emerald-500 dark:hover:border-emerald-400 border border-transparent",
        "cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
} 