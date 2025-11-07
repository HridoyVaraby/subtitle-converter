import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import PolicyPage from './components/PolicyPage';

type PolicyType = 'terms' | 'privacy' | 'cookie' | 'acceptable-use';

const GithubIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPolicy, setCurrentPolicy] = useState<PolicyType | null>(null);

  // In a real app, this would be a more complex auth check.
  // For this simulation, we'll use a simple state flip.
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleShowPolicy = (policy: PolicyType) => {
    setCurrentPolicy(policy);
  };

  const handleClosePolicy = () => {
    setCurrentPolicy(null);
  };

  return (
    <div className="min-h-screen bg-white text-dark font-sans flex flex-col">
      <header className="py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-200" role="banner">
        <button
          onClick={handleClosePolicy}
          className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="text-primary">Varabit</span> Subtitle Translator
        </button>
        <a
          href="https://github.com/HridoyVaraby/subtitle-translator"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark hover:text-accent transition-colors"
          aria-label="View on GitHub"
        >
          {GithubIcon}
        </a>
      </header>

      <main className="flex-grow" role="main">
        {currentPolicy ? (
          <PolicyPage policyType={currentPolicy} onBack={handleClosePolicy} />
        ) : (
          <>
            {!isLoggedIn ? (
              <LandingPage onGetStarted={handleLogin} />
            ) : (
              <Dashboard />
            )}
          </>
        )}
      </main>

      <footer className="text-center py-6 sm:py-8 px-4 sm:px-6 text-sm text-gray-500 border-t border-gray-200 bg-gray-50" role="contentinfo">
        <div className="max-w-6xl mx-auto">
          <div className="mb-5 sm:mb-6">
            <p className="text-gray-600 mb-3 px-2 text-sm sm:text-base leading-relaxed">
              Developed by <a href="https://varabit.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-medium transition-colors">Varabit Web Design & Development</a>
            </p>
            <p className="text-xs sm:text-sm text-gray-500">© 2025 Varabit Web Design & Development. All rights reserved.</p>
          </div>

          <div className="border-t border-gray-200 pt-4 sm:pt-5">
            <p className="text-xs text-gray-400 mb-3 sm:mb-4 font-medium tracking-wide uppercase">
              Legal
            </p>
            <div className="grid grid-cols-2 xs:grid-cols-4 gap-2 sm:gap-3 max-w-md sm:max-w-none mx-auto px-2">
              <button
                onClick={() => handleShowPolicy('privacy')}
                className="text-gray-500 hover:text-primary hover:bg-gray-100 transition-all duration-200 py-3 px-2 min-h-[48px] sm:min-h-[44px] rounded-lg text-xs sm:text-sm font-medium touch-manipulation"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleShowPolicy('terms')}
                className="text-gray-500 hover:text-primary hover:bg-gray-100 transition-all duration-200 py-3 px-2 min-h-[48px] sm:min-h-[44px] rounded-lg text-xs sm:text-sm font-medium touch-manipulation"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleShowPolicy('cookie')}
                className="text-gray-500 hover:text-primary hover:bg-gray-100 transition-all duration-200 py-3 px-2 min-h-[48px] sm:min-h-[44px] rounded-lg text-xs sm:text-sm font-medium touch-manipulation"
              >
                Cookie Policy
              </button>
              <button
                onClick={() => handleShowPolicy('acceptable-use')}
                className="text-gray-500 hover:text-primary hover:bg-gray-100 transition-all duration-200 py-3 px-2 min-h-[48px] sm:min-h-[44px] rounded-lg text-xs sm:text-sm font-medium touch-manipulation"
              >
                Acceptable Use
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;