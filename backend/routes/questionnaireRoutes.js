import express from "express";
const router = express.Router();
import {
  addQuestionResponse,
  getQuestionResponses,
} from "../controllers/questionnaireController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", protect, addQuestionResponse);
router.get("/:id", getQuestionResponses);

export default router;
