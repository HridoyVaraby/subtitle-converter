# 📄 Product Requirements Document (PRD)  
**App Name:** _(To be finalized: e.g., SubTranslate, SubTone, LinguaSubs)_  
**Purpose:** Translate `.srt` movie subtitle files from one language to another using Google Gemini API, preserving emotional tone, pacing, and natural flow.

---

## 🎯 Objective

Build a web-based subtitle translator app that:
- Accepts `.srt` subtitle files
- Translates subtitle text from a source language to a target language
- Prioritizes meaning and tone over literal translation
- Uses Google Gemini API for translation
- Outputs a new `.srt` file with preserved timestamps and natural-sounding dialogue
- Offers a clean, professional UI with user onboarding and API key management

---

## 🧱 Core Features

### 1. **Landing Page**
- White background with modern typography
- Headline: “Translate Movie Subtitles Naturally”
- Subheadline: “Preserve the emotion, tone, and meaning — not just the words”
- CTA button: “Sign Up to Get Started”
- 3-column feature section:
  - Meaning-first translation
  - Any language pair
  - User-controlled API key
- Subtle animations: fade-in on scroll, hover transitions

### 2. **User Authentication**
- Simple sign-up/login flow (email or OAuth)
- Redirect to dashboard after login

### 3. **API Key Management**
- Prompt user to input their Google Gemini API key
- Secure input field with masking
- Link to Gemini API key generation page
- Store key locally (session or encrypted storage)

### 4. **Subtitle Upload & Translation**
- Upload `.srt` file (validate format)
- Show file name and preview (optional)
- Dropdowns for:
  - Source language (default: English)
  - Target language (default: Bengali)
- “Translate” button triggers Gemini API calls
- Batch subtitles (5–10 lines per prompt)
- Use tone-aware prompts to preserve emotion and pacing
- Receive translated lines and reassemble `.srt` file
- Download button for translated file

### 5. **Translation Strategy**
- Prompt Gemini to translate meaning, not literal words
- Preserve emotional tone, pacing, and cultural nuance
- Optional toggle: “Natural” vs “Literal” translation style

---

## 🎨 Design Guidelines

- **Color Scheme**:
  - Background: White (`#FFFFFF`)
  - Primary: Deep Indigo (`#3F51B5`)
  - Accent: Soft Coral (`#FF6F61`)
  - Text: Dark Gray (`#333333`)
  - Success: Emerald Green (`#4CAF50`)
  - Error: Warm Red (`#F44336`)
- **Typography**: Inter, Roboto, or Open Sans
- **Layout**: Responsive (desktop, tablet, mobile)
- **Animations**: Fade-in, hover effects, smooth transitions

---

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **API Integration**: Google Gemini (user-provided key)
- **File Handling**: `.srt` parsing and generation
- **Storage**: Local/session storage for API key
- **Optional Backend**: For auth, logging, or file preview (can be added later)

---

## 📦 Deliverables

- Landing page with branding and animations
- Auth flow and dashboard
- API key input and validation
- Subtitle upload and translation interface
- Gemini prompt wrapper with batching logic
- Translated `.srt` file generation and download
- Responsive, polished UI

---