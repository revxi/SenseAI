import { generateAIResponse } from "../config/aiConfig.js";
import ChatSession from "../models/ChatSession.js";

export const chatHandler = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message required" });
    }

    const aiReply = await generateAIResponse({
      message,
      context: req.sense
    });

    const session = await ChatSession.create({
      userMessage: message,
      aiResponse: aiReply
    });

    res.json({
      reply: aiReply,
      meta: req.sense
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI failed" });
  }
};
