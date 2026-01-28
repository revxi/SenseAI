export const analyzeSentiment = (text) => {
  if (text.includes("sad")) return "sad";
  if (text.includes("happy")) return "happy";
  return "neutral";
};
