import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Investment Resources
        </h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Here are some helpful resources to help you learn more about investing, financial markets, and building sound investment strategies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Beginner Resources</h2>
            <ul className="space-y-3">
              <li>
                <a href="https://www.investopedia.com/investing-essentials-4689754" 
                   className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400" 
                   target="_blank" rel="noopener noreferrer">
                  Investopedia: Investing Essentials
                </a>
              </li>
              <li>
                <a href="https://www.khanacademy.org/economics-finance-domain/core-finance/stock-and-bonds" 
                   className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400" 
                   target="_blank" rel="noopener noreferrer">
                  Khan Academy: Stocks and Bonds
                </a>
              </li>
              <li>
                <a href="https://www.nerdwallet.com/article/investing/how-to-invest-money" 
                   className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400" 
                   target="_blank" rel="noopener noreferrer">
                  NerdWallet: How to Start Investing
                </a>
              </li>
              <li>
                <a href="https://www.fool.com/investing/how-to-invest/" 
                   className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400" 
                   target="_blank" rel="noopener noreferrer">
                  The Motley Fool: How to Invest
                </a>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Market News & Analysis</h2>
            <ul className="space-y-3">
              <li>
                <a href="https://www.bloomberg.com/" 
                   className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400" 
                   target="_blank" rel="noopener noreferrer">
                  Bloomberg
                </a>
              </li>
              <li>
                <a href="https://www.marketwatch.com/" 
                   className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400" 
                   target="_blank" rel="noopener noreferrer">
                  MarketWatch
                </a>
              </li>
              <li>
                <a href="https://www.cnbc.com/" 
                   className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400" 
                   target="_blank" rel="noopener noreferrer">
                  CNBC
                </a>
              </li>
              <li>
                <a href="https://finance.yahoo.com/" 
                   className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400" 
                   target="_blank" rel="noopener noreferrer">
                  Yahoo Finance
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Books for Investors</h2>
            <ul className="space-y-4">
              <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-medium text-gray-900 dark:text-white">The Intelligent Investor</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  By Benjamin Graham - A classic guide to value investing that has influenced generations of investors, including Warren Buffett.
                </p>
              </li>
              <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-medium text-gray-900 dark:text-white">A Random Walk Down Wall Street</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  By Burton G. Malkiel - An excellent introduction to investing that advocates for a passive, index-based approach.
                </p>
              </li>
              <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-medium text-gray-900 dark:text-white">One Up On Wall Street</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  By Peter Lynch - Shows how everyday investors can use their personal knowledge to gain an edge in the market.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-gray-900 dark:text-white">The Psychology of Money</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  By Morgan Housel - Explores the strange ways people think about money and teaches you how to make better sense of finances.
                </p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Investment Tools</h2>
            <ul className="space-y-4">
              <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-medium text-gray-900 dark:text-white">Stock Simulators</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">
                  Practice investing without risking real money:
                </p>
                <div className="ml-4 space-y-1">
                  <a href="https://www.investopedia.com/simulator/" 
                    className="block text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400" 
                    target="_blank" rel="noopener noreferrer">
                    Investopedia Stock Simulator
                  </a>
                  <a href="https://www.marketwatch.com/games" 
                    className="block text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400" 
                    target="_blank" rel="noopener noreferrer">
                    MarketWatch Virtual Stock Exchange
                  </a>
                </div>
              </li>
              <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-medium text-gray-900 dark:text-white">Financial Calculators</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">
                  Useful tools for investment planning:
                </p>
                <div className="ml-4 space-y-1">
                  <a href="https://www.calculator.net/investment-calculator.html" 
                    className="block text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400" 
                    target="_blank" rel="noopener noreferrer">
                    Investment Calculator
                  </a>
                  <a href="https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator" 
                    className="block text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400" 
                    target="_blank" rel="noopener noreferrer">
                    Compound Interest Calculator
                  </a>
                </div>
              </li>
              <li>
                <h3 className="font-medium text-gray-900 dark:text-white">Stock Screeners</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">
                  Find stocks that match specific criteria:
                </p>
                <div className="ml-4 space-y-1">
                  <a href="https://finviz.com/screener.ashx" 
                    className="block text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400" 
                    target="_blank" rel="noopener noreferrer">
                    Finviz Stock Screener
                  </a>
                  <a href="https://www.tradingview.com/screener/" 
                    className="block text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400" 
                    target="_blank" rel="noopener noreferrer">
                    TradingView Screener
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Club Resources</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            As a member of the WallStreet Parrots club, you&apos;ll also have access to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Meeting presentations and handouts</li>
            <li>Stock analysis templates</li>
            <li>Investment tracking spreadsheets</li>
            <li>Reading recommendations from our advisor</li>
            <li>Notes from guest speaker presentations</li>
          </ul>
          <div className="mt-6">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-700 dark:hover:bg-emerald-600"
            >
              Contact us for access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 