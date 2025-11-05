
import React from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24 text-center flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
        Translate Movie Subtitles, <span className="text-sky-400">Naturally</span>.
      </h2>
      <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8">
        Go beyond literal translations. Our AI-powered tool preserves the original emotional tone, pacing, and intent of the dialogue, delivering subtitles that feel authentic and engaging for any audience.
      </p>
      <button
        onClick={onGetStarted}
        className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/20"
      >
        Sign Up to Get Started
      </button>
    </div>
  );
};

export default LandingPage;
