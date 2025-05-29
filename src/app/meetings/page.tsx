export default function MeetingsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Club Meetings
        </h1>
        
        <div className="prose prose-emerald dark:prose-invert max-w-none mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Our club meets weekly to discuss market trends, analyze stocks, and develop investment strategies. All meetings are held in Room 306 at Baltimore Polytechnic Institute.
          </p>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Meeting Details
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="font-medium w-24">Location:</span>
                <span>Room 306, Baltimore Polytechnic Institute</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-24">Address:</span>
                <span>1400 W Cold Spring Ln, Baltimore, MD 21209</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-24">Advisor:</span>
                <span>Ms. Hayek</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-24">Day:</span>
                <span>Every Thursday</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-24">Time:</span>
                <span>3:15 PM - 4:30 PM</span>
              </li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white">
            Upcoming Meeting Topics
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Introduction to Stock Analysis</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">Nov 2, 2023</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Learn the basics of analyzing stocks, including how to read financial statements, understand key metrics, and evaluate a company's potential.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Market Trends & Technical Analysis</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">Nov 9, 2023</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Explore how to identify market trends using technical analysis tools and chart patterns to make more informed investment decisions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Risk Management Strategies</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">Nov 16, 2023</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Discover essential risk management techniques to protect your investments, including position sizing, diversification, and setting stop losses.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Investment Psychology</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">Nov 23, 2023</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Understand the psychological factors that influence investment decisions and learn strategies to overcome common cognitive biases.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white">
            What to Bring
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li>Notebook and pen for taking notes</li>
            <li>Laptop or tablet (optional but recommended)</li>
            <li>Questions and topics you'd like to discuss</li>
            <li>Your enthusiasm and curiosity about investing!</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white">
            Join Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            New members are always welcome! No prior knowledge or experience is required to join - just a willingness to learn and participate. If you have any questions about our meetings, please feel free to contact us or speak with Ms. Hayek in Room 306.
          </p>
        </div>
      </div>
    </div>
  );
} 