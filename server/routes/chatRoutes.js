import express from "express";
import { chatHandler } from "../controllers/chatController.js";
import analyze from "../middleware/analysis.js";

const router = express.Router();

router.post("/", analyze, chatHandler);

export default router;
