/// <reference types="vite/client" />

declare const __DEV__: boolean;

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly GEMINI_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
