import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-emerald-700/10 dark:from-emerald-800/20 dark:to-emerald-600/5 z-0"></div>
        <div className="absolute inset-0 opacity-30 dark:opacity-20 bg-[radial-gradient(#155e3b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/50 px-4 py-1.5 text-sm font-medium text-emerald-800 dark:text-emerald-300">
              Baltimore Polytechnic Institute
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
              WallStreet{" "}
              <span className="text-emerald-600 dark:text-emerald-500">Parrots</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Learn to navigate the financial markets and develop investment strategies
              that will serve you for a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3.5 text-base font-medium text-white shadow-sm hover:bg-emerald-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-700 dark:hover:bg-emerald-600"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/meetings"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white/80 backdrop-blur-sm px-6 py-3.5 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-gray-800/80 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700/80"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-950 to-transparent"></div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-8 bg-white dark:bg-gray-950 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-500">50+</p>
                <p className="text-gray-700 dark:text-gray-400 mt-1">Active Members</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-500">35+</p>
                <p className="text-gray-700 dark:text-gray-400 mt-1">Weekly Sessions</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-500">20+</p>
                <p className="text-gray-700 dark:text-gray-400 mt-1">Guest Speakers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-500">4</p>
                <p className="text-gray-700 dark:text-gray-400 mt-1">Years Running</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our club provides comprehensive resources and opportunities for students interested in finance and investment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-2 bg-emerald-500 w-full"></div>
              <div className="p-8">
                <div className="h-14 w-14 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-emerald-600 dark:text-emerald-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  Investment Education
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Learn the fundamentals of investing, including stock analysis, portfolio management, and risk assessment through structured lessons and practical exercises.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-2 bg-emerald-500 w-full"></div>
              <div className="p-8">
                <div className="h-14 w-14 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-emerald-600 dark:text-emerald-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  Market Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Develop skills to analyze market trends, read financial statements, and make informed investment decisions using real-world data and simulations.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-2 bg-emerald-500 w-full"></div>
              <div className="p-8">
                <div className="h-14 w-14 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-emerald-600 dark:text-emerald-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  Community
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Connect with like-minded students who share your interest in financial markets and investment strategies through networking events and collaborative projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Latest Insights
              </h2>
              <Link href="/blog" className="text-emerald-600 dark:text-emerald-500 font-medium hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors flex items-center">
                View All
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000')] bg-cover bg-center opacity-90"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-emerald-600 text-white text-xs font-medium rounded-md">Education</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">March 15, 2024</p>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <Link href="/blog/understanding-stock-market-fundamentals">
                      Understanding Stock Market Fundamentals
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    Learn the basic principles that drive stock prices and how to analyze market trends effectively.
                  </p>
                  <Link href="/blog/understanding-stock-market-fundamentals" className="text-emerald-600 dark:text-emerald-500 font-medium hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors text-sm">
                    Read More
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000')] bg-cover bg-center opacity-90"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-emerald-600 text-white text-xs font-medium rounded-md">Strategy</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">March 8, 2024</p>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <Link href="/blog/how-to-build-diversified-portfolio">
                      How to Build a Diversified Portfolio
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    Discover strategies for creating a balanced investment portfolio that can weather market volatility.
                  </p>
                  <Link href="/blog/how-to-build-diversified-portfolio" className="text-emerald-600 dark:text-emerald-500 font-medium hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors text-sm">
                    Read More
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000')] bg-cover bg-center opacity-90"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-emerald-600 text-white text-xs font-medium rounded-md">Events</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">February 27, 2024</p>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <Link href="/blog/visit-to-nyse">
                      Our Visit to the New York Stock Exchange
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    Recap of our club&apos;s recent field trip to Wall Street and lessons learned from industry professionals.
                  </p>
                  <Link href="/blog/visit-to-nyse" className="text-emerald-600 dark:text-emerald-500 font-medium hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors text-sm">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Info Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute inset-0 opacity-30 dark:opacity-20 bg-[radial-gradient(#155e3b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/50 px-4 py-1.5 text-sm font-medium text-emerald-800 dark:text-emerald-300">
                  Weekly Meetings
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Join Our Community
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                  We meet weekly to discuss market trends, analyze stocks, and develop investment strategies. All students are welcome!
                </p>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-600 dark:text-emerald-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
                        <p className="text-gray-600 dark:text-gray-400">Room 306, Baltimore Polytechnic Institute</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-600 dark:text-emerald-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900 dark:text-white">Advisor</h3>
                        <p className="text-gray-600 dark:text-gray-400">Ms. Hayek</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-600 dark:text-emerald-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900 dark:text-white">Schedule</h3>
                        <p className="text-gray-600 dark:text-gray-400">Wednesdays, 3:30 PM - 4:30 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-600 dark:text-emerald-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900 dark:text-white">Address</h3>
                        <p className="text-gray-600 dark:text-gray-400">1400 W Cold Spring Ln, Baltimore, MD 21209</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Link
                    href="/meetings"
                    className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-700 dark:hover:bg-emerald-600"
                  >
                    View Schedule
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-xl">
          <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000"
                  alt="Students in a meeting"
                  width={600}
                  height={450}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/40 to-transparent mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 dark:bg-emerald-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to start your investment journey?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Join the WallStreet Parrots club and take the first step toward financial literacy and independence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-emerald-600 shadow-sm hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
            >
              Join Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
