import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardLink } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="relative mb-16 section-hover">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-emerald-700/5 dark:from-emerald-800/10 dark:to-emerald-600/5 rounded-2xl"></div>
        <div className="absolute inset-0 opacity-30 dark:opacity-20 bg-[radial-gradient(#155e3b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none rounded-2xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto py-12 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
            About <span className="text-emerald-600 dark:text-emerald-500">WallStreet Parrots</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            WallStreet Parrots is a student-run investment club at Baltimore Polytechnic Institute dedicated to educating students about financial markets and investment strategies.
          </p>
          <ButtonLink 
            href="/contact" 
            variant="primary" 
            size="lg" 
            effect="shine"
            className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
          >
            Get in Touch
          </ButtonLink>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
        <Card className="overflow-hidden" hover hoverEffect="glow">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-700 dark:text-gray-300">
                  Our mission is to educate and apply real-world financial market analysis, particularly focused on the stock market. We aim to help students develop the skills necessary to make sound investment decisions and learn the discipline required to know when to enter and exit the market.
                </p>
              </CardContent>
            </div>
            <div className="relative h-64 md:h-auto bg-emerald-100 dark:bg-emerald-900/20 image-hover-zoom group">
              <Image 
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Students analyzing financial data"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* What We Do Section */}
      <section className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-450">
        <Card className="overflow-hidden" hover hoverEffect="scale">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
              What We Do
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-4">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              At our weekly meetings, we engage in various activities, including:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Analyzing current market trends and developments",
                "Learning fundamental and technical analysis techniques",
                "Discussing investment strategies and risk management",
                "Conducting stock market simulations",
                "Hearing from guest speakers in the finance industry",
                "Building a community of like-minded students interested in finance"
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 animate-in fade-in slide-in-from-left-4 list-item-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mr-4 text-emerald-600 dark:text-emerald-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Why Join Us Section */}
      <section className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Why Join Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Financial Literacy",
              description: "Develop valuable financial literacy skills that will benefit you throughout your life",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Practical Knowledge",
              description: "Learn practical investment knowledge from peers and experienced advisors",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              href: "/resources"
            },
            {
              title: "Network Building",
              description: "Build a network of connections with others interested in finance and investing",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              href: "/meetings"
            },
            {
              title: "College Applications",
              description: "Enhance your college applications by demonstrating interest in finance and economics",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              )
            },
            {
              title: "Supportive Environment",
              description: "Have fun while learning important life skills in a supportive environment",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              href: "/blog"
            }
          ].map((benefit, index) => (
            benefit.href ? (
              <CardLink 
                key={index}
                href={benefit.href}
                className="overflow-hidden" 
                hoverEffect="border"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
                </CardContent>
              </CardLink>
            ) : (
              <Card 
                key={index} 
                className="overflow-hidden" 
                hover
                hoverEffect="scale"
                interactive
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          ))}
        </div>
      </section>

      {/* Leadership & Join Us Sections */}
      <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-750">
        <Card className="overflow-hidden" hover hoverEffect="glow">
          <CardHeader className="p-6 pb-4">
            <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
              Club Leadership
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-2">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mr-4 text-emerald-600 dark:text-emerald-400">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-lg text-gray-900 dark:text-white">Ms. Hayek</p>
                <p className="text-emerald-600 dark:text-emerald-400">Faculty Advisor</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Our student leadership team is elected annually and works closely with our faculty advisor to plan and execute club activities.
            </p>
            <div className="mt-6">
              <ButtonLink 
                href="/contact" 
                variant="outline" 
                effect="pulse"
              >
                Contact Our Team
              </ButtonLink>
            </div>
          </CardContent>
        </Card>

        <CardLink 
          href="/meetings" 
          className="overflow-hidden bg-gradient-to-br from-emerald-700 to-emerald-900 text-white" 
          hoverEffect="scale"
        >
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Join Us</h3>
            <p className="mb-6">
              We welcome all Baltimore Polytechnic Institute students who are interested in learning about investing and financial markets. No prior knowledge or experience is required - just a willingness to learn and participate!
            </p>
            <div className="bg-white/20 rounded-lg p-4 inline-block">
              <p className="font-medium">Weekly Meetings</p>
              <p>Room 306</p>
            </div>
          </CardContent>
        </CardLink>
      </div>
    </div>
  );
} 