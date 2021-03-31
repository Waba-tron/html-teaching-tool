import express from "express";
const router = express.Router();
import { submitQuiz } from "../controllers/quizController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", submitQuiz);

export default router;
