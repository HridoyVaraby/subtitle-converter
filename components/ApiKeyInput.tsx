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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('AIzaSyA0K19LXD62-ovyNMK4t97NBxGkMOfjVe4');
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg p-8 shadow-md border border-gray-200">
      <h3 className="text-2xl font-bold text-center text-dark mb-2">Enter Your Gemini API Key</h3>
      <p className="text-center text-gray-600 mb-6">
        To use the translator, you need a Google Gemini API key. Your key is stored securely in your browser's local storage.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="api-key" className="block text-sm font-medium text-gray-700 mb-1">
            API Key
          </label>
          <input
            id="api-key"
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
            placeholder="Enter your Gemini API key..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Save and Continue
        </button>
      </form>
      <div className="mt-6 text-center space-y-4">
        <a
          href="https://aistudio.google.com/u/0/api-keys"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:text-primary underline inline-block"
        >
          Don't have a key? Get one here.
        </a>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div className="text-left">
              <p className="text-sm text-amber-800 font-medium mb-2">
                For testing purposes, you can use this temporary API key:
              </p>
              <div className="flex items-center space-x-2">
                <code className="bg-white px-3 py-2 rounded border text-sm font-mono text-gray-800 flex-1 break-all">
                  AIzaSyA0K19LXD62-ovyNMK4t97NBxGkMOfjVe4
                </code>
                <button
                  onClick={copyToClipboard}
                  className={`flex-shrink-0 px-3 py-2 rounded text-sm font-medium transition-colors duration-200 ${
                    copyStatus === 'copied'
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                  type="button"
                >
                  {copyStatus === 'copied' ? (
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Copied!</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copy</span>
                    </div>
                  )}
                </button>
              </div>
              <p className="text-xs text-amber-700 mt-2">
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