import React, { useState, useEffect } from 'react';
import Translator from './Translator';
import ApiKeyInput from './ApiKeyInput';

const API_KEY_STORAGE_KEY = 'gemini-api-key';

const Dashboard: React.FC = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);

  useEffect(() => {
    const storedKey = localStorage.getItem(API_KEY_STORAGE_KEY);
    if (storedKey) {
      setApiKey(storedKey);
    }
  }, []);

  const handleSaveApiKey = (key: string) => {
    localStorage.setItem(API_KEY_STORAGE_KEY, key);
    setApiKey(key);
  };

  const handleClearApiKey = () => {
    localStorage.removeItem(API_KEY_STORAGE_KEY);
    setApiKey(null);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {!apiKey ? (
        <ApiKeyInput onSave={handleSaveApiKey} />
      ) : (
        <Translator apiKey={apiKey} onClearApiKey={handleClearApiKey} />
      )}
    </div>
  );
};

export default Dashboard;
