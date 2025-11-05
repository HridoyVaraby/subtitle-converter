import React from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const Feature: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; delay?: string }> = ({ icon, title, children, delay }) => (
  <div className={`bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:border-primary/20 animate-fade-in-up ${delay || ''}`}>
    <div className="bg-gradient-to-br from-primary/10 to-accent/10 text-primary rounded-2xl p-4 mb-6 inline-block">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-dark">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen hero-gradient">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 md:py-32 text-center flex flex-col items-center justify-center relative">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-6 py-2 mb-6 text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              AI-Powered Translation
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-dark leading-tight mb-6 animate-fade-in-up stagger-1">
            Translate Movie Subtitles{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Naturally</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-2">
            Preserve the <strong className="text-primary">emotion, tone, and meaning</strong> — not just the words.
            <br />
            Upload your <code className="bg-gray-100 text-primary px-3 py-1 rounded-lg font-semibold">.srt</code> file and get a beautifully translated subtitle that feels native to your audience.
          </p>
          
          <div className="animate-fade-in-up stagger-3">
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-12 rounded-full text-xl shadow-2xl glow-primary eye-catching-button"
            >
              Get Started
            </button>
          </div>
          
          <div className="mt-16 animate-fade-in-up stagger-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Powered by Google Gemini
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cinematic Flow Preservation
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Multiple Language Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">
            Why Choose <span className="text-primary">Varabit</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of subtitle translation with AI that understands context, emotion, and cultural nuances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Feature
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M3 11V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"/><path d="M4 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z"/><path d="M8 18v-2"/><path d="M16 18v-2"/></svg>}
            title="Meaning-First Translation"
            delay="stagger-1"
          >
            Our AI doesn't just translate words—it captures the essence, emotion, and pacing of dialogue to create subtitles that feel natural and authentic.
          </Feature>
          <Feature
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>}
            title="Any Language to Any Language"
            delay="stagger-2"
          >
            Break down language barriers with support for 100+ languages. Default setup for English → Bengali, but customize for any language pair.
          </Feature>
          <Feature
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
            title="Your API, Your Control"
            delay="stagger-3"
          >
            Maintain full privacy and control with your own Google Gemini API key. No data stored on our servers—everything stays with you.
          </Feature>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 max-w-4xl mx-auto border border-primary/10">
          <h3 className="text-3xl md:text-4xl font-black text-dark mb-4">
            Ready to Transform Your Subtitles?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of content creators who trust Varabit for professional-quality subtitle translation.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-all duration-300"
          >
            Start Translating Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;