import { GoogleGenAI, Type } from "@google/genai";
import { SubtitleBlock } from '../types';

// Let's set a batch size. This helps manage the API request size.
const BATCH_SIZE = 25;

export const translateSubtitles = async (
  subtitles: SubtitleBlock[],
  sourceLang: string,
  targetLang: string,
  onProgress: (progress: number) => void,
  apiKey: string
): Promise<SubtitleBlock[]> => {
  const ai = new GoogleGenAI({ apiKey });

  const translatedSubtitles: SubtitleBlock[] = [];
  const totalBatches = Math.ceil(subtitles.length / BATCH_SIZE);

  for (let i = 0; i < subtitles.length; i += BATCH_SIZE) {
    const batch = subtitles.slice(i, i + BATCH_SIZE);
    
    // Create a list of subtitles to translate, mapping original index to text
    const subtitlesToTranslate = batch.map(s => ({
        id: s.index,
        text: s.text.replace(/\n/g, ' ')
    }));

    const prompt = `You are an expert movie subtitle translator.
Translate the following movie subtitle dialogue from ${sourceLang} to ${targetLang}.
Preserve the natural tone, emotion, cultural nuances, and pacing of the original dialogue. Avoid literal, word-for-word translations.
The input is a JSON array containing subtitle objects, each with an 'id' and 'text'.
Your response must be a JSON object containing a single key "translations", which is an array of objects. Each object in the array must have the original 'id' and the 'translatedText'.

Input Subtitles:
${JSON.stringify(subtitlesToTranslate)}
`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        translations: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    id: {
                                        type: Type.NUMBER,
                                        description: "The original ID of the subtitle block."
                                    },
                                    translatedText: {
                                        type: Type.STRING,
                                        description: "The translated subtitle text."
                                    }
                                },
                                required: ['id', 'translatedText']
                            }
                        }
                    },
                    required: ['translations']
                }
            }
        });
      
      if (!response?.text) {
        throw new Error('Received an empty or invalid response from the API. This could be due to an invalid API key, network issues, or safety settings blocking the response.');
      }
      
      const translatedData = JSON.parse(response.text);

      if (!translatedData.translations || !Array.isArray(translatedData.translations)) {
        throw new Error('Invalid JSON response format from the API.');
      }
      
      // Create a map for quick lookup of translations by original index
      const translationMap = new Map<number, string>();
      for (const item of translatedData.translations) {
        if (typeof item.id === 'number' && typeof item.translatedText === 'string') {
          translationMap.set(item.id, item.translatedText);
        }
      }

      const translatedBatch = batch.map((originalSubtitle) => {
        const translatedText = translationMap.get(originalSubtitle.index);
        // If a translation is missing for any reason, gracefully fall back to the original text.
        if (translatedText === undefined) {
             console.warn(`Missing translation for subtitle index: ${originalSubtitle.index}. Using original text.`);
        }
        return {
          ...originalSubtitle,
          text: translatedText?.trim() ?? originalSubtitle.text,
        };
      });
      
      translatedSubtitles.push(...translatedBatch);
      const progress = Math.round(((i + BATCH_SIZE) / subtitles.length) * 100);
      onProgress(Math.min(progress, 100));

    } catch (error) {
      console.error('Error translating batch:', error);
      let details = error instanceof Error ? error.message : String(error);
      if (details.includes("JSON")) {
          details = "The API returned a response that could not be parsed as valid JSON. This might be due to content safety filters or an unexpected model output format."
      }
      throw new Error(`Failed to translate a batch of subtitles. Please check your API key and network connection. Details: ${details}`);
    }
  }

  return translatedSubtitles;
};