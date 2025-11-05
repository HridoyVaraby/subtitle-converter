
import { SubtitleBlock } from '../types';

export const parseSrt = (srtContent: string): SubtitleBlock[] => {
  const blocks = srtContent.trim().split(/\r?\n\r?\n/);
  
  return blocks.map((block) => {
    const lines = block.split(/\r?\n/);
    if (lines.length < 3) {
      // Malformed block, skip
      return null;
    }
    
    const index = parseInt(lines[0], 10);
    const timestamp = lines[1];
    const text = lines.slice(2).join('\n');
    
    if (isNaN(index) || !timestamp.includes('-->') || !text) {
        return null;
    }

    return { index, timestamp, text };
  }).filter((block): block is SubtitleBlock => block !== null);
};

export const stringifySrt = (subtitles: SubtitleBlock[]): string => {
  return subtitles
    .map(({ index, timestamp, text }) => {
      return `${index}\n${timestamp}\n${text}`;
    })
    .join('\n\n');
};
