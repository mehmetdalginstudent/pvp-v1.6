const WORDS_PER_MINUTE = 200;

export const calculateReadingTime = (content: string): number => {
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);
  return minutes;
};