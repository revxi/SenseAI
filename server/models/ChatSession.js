import mongoose from "mongoose";

const chatSessionSchema = new mongoose.Schema(
  {
    userMessage: String,
    aiResponse: String
  },
  { timestamps: true }
);

export default mongoose.model("ChatSession", chatSessionSchema);
