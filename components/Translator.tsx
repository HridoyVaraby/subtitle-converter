import React, { useState, useCallback } from 'react';
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
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="w-full bg-white border border-gray-300 rounded-md px-3 py-3 sm:py-2 text-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none transition min-h-[48px] sm:min-h-[40px] text-base"
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
  const [isDragging, setIsDragging] = useState(false);

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

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // Only set isDragging to false if we're leaving the drop zone entirely
    // Check if the relatedTarget is outside the drop zone
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      if (!droppedFile.name.endsWith('.srt')) {
        setError('Invalid file type. Please upload a .srt file.');
        setFile(null);
        setFileName('');
        return;
      }
      setFile(droppedFile);
      setFileName(droppedFile.name);
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
    <div className="max-w-3xl mx-auto bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-card hover:shadow-card-hover transition-shadow duration-300 space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pb-4 border-b border-gray-100">
        <h2 className="text-xl sm:text-2xl font-bold text-dark">Translator Dashboard</h2>
        <button
          onClick={onClearApiKey}
          className="text-sm text-gray-600 hover:text-accent font-semibold py-2 px-3 sm:px-4 rounded-lg transition-colors duration-200 hover:bg-gray-50 w-full sm:w-auto touch-manipulation"
          aria-label="Change API Key"
        >
          Change API Key
        </button>
      </div>

      {/* File Upload */}
      <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
        <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-3">
          1. Upload Subtitle File
        </label>
        <div
          className={`flex justify-center px-4 sm:px-6 pt-4 sm:pt-5 pb-4 sm:pb-6 border-2 border-dashed rounded-xl transition-all duration-300 min-h-[200px] sm:min-h-[220px] ${
            isDragging ? 'border-primary bg-primary/5 scale-[1.02]' : 'border-gray-300 hover:border-primary/50'
          }`}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="space-y-1 text-center">
            <svg
              className={`mx-auto h-10 w-10 sm:h-12 sm:w-12 ${isDragging ? 'text-primary' : 'text-gray-400'}`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col sm:flex-row items-center justify-center text-sm text-gray-600 gap-1">
              <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-lg font-medium text-accent hover:text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary transition-colors px-3 py-2 min-h-[44px] flex items-center touch-manipulation">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".srt" onChange={handleFileChange} />
              </label>
              <span className="hidden sm:inline text-gray-400">or drag and drop</span>
            </div>
            <p className="text-xs text-gray-500">.SRT files only</p>
            {fileName && <p className="text-sm text-success pt-2 font-medium break-all">{fileName}</p>}
            {isDragging && <p className="text-sm text-primary font-medium pt-2">Drop your .srt file here</p>}
          </div>
        </div>
      </div>
      
      {/* Language Selection */}
      <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
         <p className="block text-sm font-medium text-gray-700 mb-3">
          2. Select Languages
        </p>
        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 items-stretch xs:items-center">
          <div className="flex-1 w-full">
            <LanguageSelect id="source-lang" value={sourceLang} onChange={e => setSourceLang(e.target.value)} label="From" />
          </div>
           <div className="text-gray-400 flex justify-center xs:pt-6 hidden xs:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
           </div>
           <div className="text-gray-400 flex justify-center xs:hidden rotate-90">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
           </div>
          <div className="flex-1 w-full">
            <LanguageSelect id="target-lang" value={targetLang} onChange={e => setTargetLang(e.target.value)} label="To" />
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-2">
         <p className="block text-sm font-medium text-gray-700 mb-3">
          3. Translate & Download
        </p>
        {!isLoading && !downloadUrl && (
          <button
            onClick={handleTranslate}
            disabled={!file || isLoading}
            className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 sm:py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl min-h-[56px] sm:min-h-[48px] text-lg sm:text-base touch-manipulation"
          >
            Translate Subtitles
          </button>
        )}

        {isLoading && (
          <div className="space-y-3">
            <div className="w-full bg-gray-200 rounded-full h-5 sm:h-4 overflow-hidden shadow-inner">
              <div className="bg-gradient-to-r from-primary to-accent h-5 sm:h-4 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}>
                <div className="h-full bg-white/20 animate-pulse"></div>
              </div>
            </div>
            <p className="text-sm text-center text-gray-600 font-medium">Translating... {progress}%</p>
          </div>
        )}

        {downloadUrl && (
          <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-50 to-emerald-50 border border-success/50 rounded-xl">
            <div className="mb-4">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-success mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-green-800 font-semibold text-base sm:text-lg">Translation complete!</p>
            </div>
            <a
              href={downloadUrl}
              download={getOutputFilename()}
              className="inline-block w-full sm:w-auto bg-success hover:bg-green-600 text-white font-bold py-4 px-6 sm:px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[56px] sm:min-h-[48px] flex items-center justify-center touch-manipulation"
            >
              Download Translated .SRT
            </a>
          </div>
        )}

      </div>

      {error && (
        <div className="bg-red-50 text-danger border border-danger/30 p-4 rounded-xl text-sm animate-fade-in">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-bold">Error:</p>
              <p>{error}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Translator;