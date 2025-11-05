import React, { useState, useCallback } from 'react';
import { SubtitleBlock } from '../types';
import { LANGUAGES } from '../constants';
import { parseSrt, stringifySrt } from '../services/srtParser';
import { translateSubtitles } from '../services/geminiService';

interface TranslatorProps {
  apiKey: string;
  onClearApiKey: () => void;
}

const LanguageSelect: React.FC<{
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
}> = ({ id, value, onChange, label }) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-sm font-medium text-slate-400 mb-1">
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
    >
      {LANGUAGES.map((lang) => (
        <option key={lang.code} value={lang.name}>
          {lang.name}
        </option>
      ))}
    </select>
  </div>
);

const Translator: React.FC<TranslatorProps> = ({ apiKey, onClearApiKey }) => {
  const [sourceLang, setSourceLang] = useState('English');
  const [targetLang, setTargetLang] = useState('Bengali');
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (!selectedFile.name.endsWith('.srt')) {
        setError('Invalid file type. Please upload a .srt file.');
        setFile(null);
        setFileName('');
        return;
      }
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setError(null);
      setDownloadUrl(null);
    }
  };

  const handleTranslate = useCallback(async () => {
    if (!file) {
      setError('Please upload a subtitle file first.');
      return;
    }
     if (!apiKey) {
      setError('API Key is missing. Please clear the key and set it again.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setDownloadUrl(null);
    setProgress(0);

    try {
      const srtContent = await file.text();
      const subtitles = parseSrt(srtContent);
      if (subtitles.length === 0) {
        throw new Error("Could not parse the SRT file, or the file is empty.");
      }

      const translated = await translateSubtitles(subtitles, sourceLang, targetLang, setProgress, apiKey);
      const newSrtContent = stringifySrt(translated);
      const blob = new Blob([newSrtContent], { type: 'text/plain' });
      setDownloadUrl(URL.createObjectURL(blob));

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [file, sourceLang, targetLang, apiKey]);
  
  const getOutputFilename = () => {
    if (!fileName) return 'translated.srt';
    const nameWithoutExt = fileName.replace(/\.srt$/, '');
    const targetLangCode = LANGUAGES.find(l => l.name === targetLang)?.code || 'translated';
    return `${nameWithoutExt}.${targetLangCode}.srt`;
  }

  return (
    <div className="max-w-3xl mx-auto bg-slate-800/50 rounded-lg p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Translator Dashboard</h2>
        <button
          onClick={onClearApiKey}
          className="text-sm bg-slate-700 hover:bg-slate-600 text-slate-300 font-semibold py-1 px-3 rounded-md transition-colors"
        >
          Change API Key
        </button>
      </div>

      {/* File Upload */}
      <div>
        <label htmlFor="file-upload" className="block text-sm font-medium text-slate-400 mb-1">
          1. Upload Subtitle File
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-600 border-dashed rounded-md">
          <div className="space-y-1 text-center">
             <svg className="mx-auto h-12 w-12 text-slate-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <div className="flex text-sm text-slate-500">
              <label htmlFor="file-upload" className="relative cursor-pointer bg-slate-800 rounded-md font-medium text-sky-400 hover:text-sky-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-slate-800 focus-within:ring-sky-500">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".srt" onChange={handleFileChange} />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-slate-600">.SRT files only</p>
            {fileName && <p className="text-sm text-green-400 pt-2">{fileName}</p>}
          </div>
        </div>
      </div>
      
      {/* Language Selection */}
      <div>
         <p className="block text-sm font-medium text-slate-400 mb-2">
          2. Select Languages
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <LanguageSelect id="source-lang" value={sourceLang} onChange={e => setSourceLang(e.target.value)} label="From" />
           <div className="text-slate-400 pt-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
           </div>
          <LanguageSelect id="target-lang" value={targetLang} onChange={e => setTargetLang(e.target.value)} label="To" />
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-2">
         <p className="block text-sm font-medium text-slate-400 mb-2">
          3. Translate & Download
        </p>
        {!isLoading && !downloadUrl && (
          <button
            onClick={handleTranslate}
            disabled={!file || isLoading}
            className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
          >
            Translate Subtitles
          </button>
        )}
        
        {isLoading && (
           <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
             <div className="bg-sky-500 h-4 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
           </div>
        )}

        {downloadUrl && (
          <div className="text-center p-4 bg-green-900/50 border border-green-700 rounded-md">
            <p className="text-green-300 mb-4">Translation complete!</p>
            <a
              href={downloadUrl}
              download={getOutputFilename()}
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
            >
              Download Translated .SRT
            </a>
          </div>
        )}

      </div>

      {error && (
        <div className="bg-red-900/50 text-red-300 border border-red-700 p-3 rounded-md text-sm">
          <p className="font-bold">Error:</p>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
