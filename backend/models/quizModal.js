import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const quizSchema = mongoose.Schema(
  {
    quizId: {
      type: "Number",
    },
    questions: {
      type: ["Mixed"],
    },
  },
  {
    timesstamps: true,
  }
);

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
