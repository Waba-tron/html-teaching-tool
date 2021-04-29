import express from "express";
const router = express.Router();
import { submitQuiz, getQuiz } from "../controllers/quizController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", protect, submitQuiz);
router.get("/:id", protect, getQuiz);

export default router;
