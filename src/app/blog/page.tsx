import Link from 'next/link';
import Image from 'next/image';
import { getPublishedBlogPosts } from '@/lib/services/blog-service';
import { BlogPost } from '@/lib/models/blog';

export default async function BlogPage() {
  // Fetch blog posts from API
  const blogPosts = await getPublishedBlogPosts();

  // If no blog posts are available, show default content
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Investment Insights Blog
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Expert analysis, market updates, and investment strategies from the WallStreet Parrots community.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Coming Soon</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We're working on our first blog posts. Check back soon for investment insights, market analysis, and more!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Investment Insights Blog
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Expert analysis, market updates, and investment strategies from the WallStreet Parrots community.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
              <div className="flex flex-col lg:flex-row">
                <div className="relative lg:w-2/3 h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-800 opacity-90"></div>
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${blogPosts[0].imageSrc})` }}
                  ></div>
                  <div className="relative z-10 p-8 lg:p-12 flex flex-col justify-end h-full">
                    <div className="mb-4">
                      <span className="inline-block bg-white dark:bg-gray-900 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-xs font-medium rounded-full">
                        {blogPosts[0].category}
                      </span>
                      <span className="ml-2 text-white text-sm">{blogPosts[0].readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{blogPosts[0].title}</h2>
                    <p className="text-white/90 mb-4">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                        {blogPosts[0].author.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-white">{blogPosts[0].author}</p>
                        <p className="text-xs text-white/80">{blogPosts[0].date}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 p-8 flex items-center">
                  <Link 
                    href={`/blog/${blogPosts[0].slug}`}
                    className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 px-6 py-3 text-center text-white font-medium transition duration-150 ease-in-out"
                  >
                    Read Full Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post: BlogPost) => (
            <div key={post.id} className="flex flex-col h-full">
              <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.imageSrc})` }}
                  ></div>
                  <div className="absolute bottom-3 left-4 z-20">
                    <span className="inline-block bg-emerald-600 text-white px-3 py-1 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex-shrink-0 h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm">
                      {post.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{post.authorRole}</p>
                    </div>
                  </div>
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="block w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-4 text-center text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Stay Updated with Investment Insights
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Subscribe to our newsletter to receive the latest investment strategies, market analysis, and club updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 