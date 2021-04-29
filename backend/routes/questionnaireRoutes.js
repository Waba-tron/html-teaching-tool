import express from "express";
const router = express.Router();
import {
  addQuestionResponse,
  getQuestionResponses,
} from "../controllers/questionnaireController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

router.post("/", protect, addQuestionResponse);
router.get("/:id", protect, isAdmin, getQuestionResponses);

export default router;
