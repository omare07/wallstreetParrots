import React from "react";
import Link from "next/link";
import { Card, CardContent, CardImage, CardTitle, CardDescription } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  icon?: React.ReactNode;
  category?: string;
  date?: string;
}

export function FeatureCard({
  title,
  description,
  link,
  imageSrc,
  icon,
  category,
  date,
}: FeatureCardProps) {
  return (
    <Link href={link} className="group block">
      <Card hover className="h-full flex flex-col">
        <CardImage
          src={imageSrc}
          alt={title}
          aspectRatio="video"
          overlay
          className="group-hover:scale-105"
        >
          {category && (
            <div className="absolute bottom-4 left-4 z-10">
              <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-medium rounded-full">
                {category}
              </span>
            </div>
          )}
          {icon && (
            <div className="absolute top-4 right-4 h-10 w-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center z-10 transition duration-300 ease-in-out group-hover:scale-110">
              {icon}
            </div>
          )}
        </CardImage>
        <CardContent className="flex-grow flex flex-col">
          {date && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</p>
          )}
          <CardTitle className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="mt-2 line-clamp-2">
            {description}
          </CardDescription>
          <div className="flex items-center mt-4 text-emerald-600 dark:text-emerald-500 font-medium text-sm">
            <span className="mr-2">Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function FeatureCardHighlight({
  title,
  description,
  link,
  imageSrc,
  category,
  date,
}: FeatureCardProps) {
  return (
    <Link href={link} className="group block">
      <Card hover className="relative overflow-hidden rounded-2xl">
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-2/3 h-64 lg:h-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-800 opacity-90"></div>
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${imageSrc})` }}></div>
            <div className="relative z-10 p-8 lg:p-12 flex flex-col justify-end h-full">
              {category && (
                <div className="mb-4">
                  <span className="inline-block bg-white dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-xs font-medium rounded-full">
                    {category}
                  </span>
                  {date && <span className="ml-2 text-white text-sm">{date}</span>}
                </div>
              )}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
              <p className="text-white/90 mb-4">{description}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">Learn More</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-8 bg-white dark:bg-gray-800 flex items-center">
            <div className="w-full">
              <div className="mb-4 text-emerald-600 dark:text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Ready to start?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Join us and learn how to navigate the financial markets with confidence.</p>
              <button className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 px-4 py-3 text-center text-white font-medium transition-colors">
                Join Club
              </button>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
} 