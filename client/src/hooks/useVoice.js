export const useVoice = () => {
  return {
    start: () => console.log("🎙️ Voice start"),
    stop: () => console.log("🎙️ Voice stop")
  };
};
