<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 📺 Varabit Subtitle Translator

A web-based subtitle translator that uses Google Gemini AI to translate `.srt` movie subtitle files from one language to another while preserving emotional tone, pacing, and natural flow.

## ✨ Features

- **Meaning-First Translation**: Translates intent, emotion, and pacing — not just literal words
- **Any Language Pair**: Support for translating from any language to any language
- **User-Controlled API**: Use your own Google Gemini API key for secure, personalized translation
- **Natural Flow**: Preserves emotional tone, pacing, and cultural nuance
- **Clean UI**: Modern, responsive interface with smooth animations
- **Batch Processing**: Efficient subtitle processing with batching logic

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **AI Integration**: Google Gemini API
- **File Handling**: Native `.srt` parsing and generation
- **Storage**: Local storage for API key management

## 📋 Prerequisites

- Node.js (version 16 or higher)
- Google Gemini API key

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/HridoyVaraby/subtitle-translator.git
cd subtitle-translator
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory:
```bash
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 4. Run the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 5. Build for production
```bash
npm run build
```

## 📖 Usage

1. **Landing Page**: Click "Sign Up to Get Started" to begin
2. **API Key Setup**: Enter your Google Gemini API key (your key is stored locally)
3. **Upload Subtitle File**: Drag and drop or select a `.srt` file
4. **Select Languages**: Choose source and target languages
5. **Translate**: Click translate to process your subtitles
6. **Download**: Save your translated `.srt` file

## 🎨 Design

The app features a clean, modern design with:
- **Primary Color**: Deep Indigo (#3F51B5)
- **Accent Color**: Soft Coral (#FF6F61)
- **Typography**: Inter font family
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

## 📁 Project Structure

```
subtitle-translator/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── LandingPage.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Translator.tsx
│   │   └── ApiKeyInput.tsx
│   ├── services/         # Business logic
│   │   ├── geminiService.ts
│   │   └── srtParser.ts
│   ├── App.tsx          # Main app component
│   ├── index.tsx        # App entry point
│   └── constants.ts     # App constants
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🔑 API Key Setup

1. Visit the [Google AI Studio](https://aistudio.google.com)
2. Create a new API key
3. Copy the key and paste it into the app's API key input field
4. Your key is stored securely in your browser's local storage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is developed by Varabit web Design & Development. All rights reserved.

## 🌐 Links

- **Repository**: [https://github.com/HridoyVaraby/subtitle-translator](https://github.com/HridoyVaraby/subtitle-translator)
- **Varabit Website**: [https://varabit.com](https://varabit.com)
- **Google Gemini API**: [https://ai.google.dev/gemini-api](https://ai.google.dev/gemini-api)

---

Built with ❤️ by Varabit web Design & Development
