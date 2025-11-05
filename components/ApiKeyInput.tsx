
import React, { useState } from 'react';

interface ApiKeyInputProps {
  onSave: (apiKey: string) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onSave }) => {
  const [key, setKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key.trim()) {
      onSave(key.trim());
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-slate-800/50 rounded-lg p-8 border border-slate-700 shadow-xl">
      <h3 className="text-2xl font-bold text-center text-white mb-2">Enter Your Gemini API Key</h3>
      <p className="text-center text-slate-400 mb-6">
        To use the translator, you need a Google Gemini API key. Your key is stored securely in your browser's local storage.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="api-key" className="block text-sm font-medium text-slate-300 mb-1">
            API Key
          </label>
          <input
            id="api-key"
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full bg-slate-900 border border-slate-600 rounded-md px-3 py-2 text-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
            placeholder="***************************************"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
        >
          Save and Continue
        </button>
      </form>
      <div className="mt-6 text-center">
        <a
          href="https://ai.google.dev/gemini-api/docs/api-key"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-sky-400 hover:text-sky-300 underline"
        >
          Don't have a key? Get one here.
        </a>
      </div>
    </div>
  );
};

export default ApiKeyInput;
