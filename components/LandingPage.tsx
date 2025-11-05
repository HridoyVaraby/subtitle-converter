import React from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const Feature: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="bg-primary/10 text-primary rounded-full p-4 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24 text-center flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-6xl font-extrabold text-dark leading-tight mb-4">
        Translate Movie Subtitles <span className="text-primary">Naturally</span>.
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Preserve the emotion, tone, and meaning — not just the words.
        <br />
        Upload your <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded">.srt</code> file and get a beautifully translated subtitle that feels native to your audience. Powered by Google Gemini, tuned for cinematic flow.
      </p>
      <button
        onClick={onGetStarted}
        className="bg-primary hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30 animate-bounce hover:animate-none"
        style={{
          animationDuration: '3s',
          animationIterationCount: 'infinite'
        }}
      >
        Get Started
      </button>

      <div className="mt-20 md:mt-32 w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M3 11V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"/><path d="M4 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z"/><path d="M8 18v-2"/><path d="M16 18v-2"/></svg>}
            title="Meaning-First Translation"
          >
            Translates intent, emotion, and pacing — not just literal words.
          </Feature>
          <Feature
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>}
            title="Any Language to Any Language"
          >
            Default: English → Bengali. Customize your source and target languages.
          </Feature>
          <Feature
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
            title="Your API, Your Control"
          >
            Use your own Google Gemini API key for secure, personalized translation.
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;