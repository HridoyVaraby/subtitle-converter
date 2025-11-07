import React, { useState } from 'react';

interface ApiKeyInputProps {
  onSave: (apiKey: string) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onSave }) => {
  const [key, setKey] = useState('');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key.trim()) {
      onSave(key.trim());
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getTempApiKey = () => {
    // This is a demo key - users should use their own
    return 'AIzaSyA0K19LXD62-ovyNMK4t97NBxGkMOfjVe4';
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card-hover border border-gray-100">
      <h3 className="text-xl sm:text-2xl font-bold text-center text-dark mb-2">Enter Your Gemini API Key</h3>
      <p className="text-center text-sm sm:text-base text-gray-600 mb-6 px-2">
        To use the translator, you need a Google Gemini API key. Your key is stored securely in your browser's local storage.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="api-key" className="block text-sm font-medium text-gray-700 mb-2">
            API Key
          </label>
          <input
            id="api-key"
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 sm:py-3 text-base text-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 shadow-sm min-h-[48px] touch-manipulation"
            placeholder="Enter your Gemini API key..."
            required
            aria-required="true"
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 sm:py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl min-h-[48px] text-base touch-manipulation"
        >
          Save and Continue
        </button>
      </form>
      <div className="mt-6 text-center space-y-4">
        <a
          href="https://aistudio.google.com/u/0/api-keys"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:text-primary underline inline-block py-2 px-3 min-h-[44px] touch-manipulation"
        >
          Don't have a key? Get one here.
        </a>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div className="text-left">
              <p className="text-sm text-amber-800 font-semibold mb-3">
                For testing purposes, you can use this temporary API key:
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <code className="bg-white px-3 sm:px-4 py-3 rounded-lg border text-xs sm:text-sm font-mono text-gray-800 flex-1 break-all shadow-sm">
                  {getTempApiKey()}
                </code>
                <button
                  onClick={() => copyToClipboard(getTempApiKey())}
                  aria-label="Copy API key to clipboard"
                  className={`flex-shrink-0 px-3 sm:px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 min-h-[48px] sm:min-h-[44px] touch-manipulation ${
                    copyStatus === 'copied'
                      ? 'bg-success text-white'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                  type="button"
                >
                  {copyStatus === 'copied' ? (
                    <div className="flex items-center justify-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Copied!</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copy</span>
                    </div>
                  )}
                </button>
              </div>
              <p className="text-xs text-amber-700 mt-3">
                <strong>Note:</strong> This key is for beta testing only and may have rate limits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyInput;