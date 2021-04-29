import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Quiz from "../models/quizModal.js";
const submitQuiz = asyncHandler(async (req, res) => {
  const { email, score, quizId } = req.body;
  const user = await User.findOne({ email });

  if (quizId == 1 && score >= user.quez1[0].score) {
    user.quez1[0].score = score;

    if (score >= 70) {
      user.quez2[0].hasAccess = true;
    }

    let updatedUser = await user.save();

    res.send(updatedUser);
  } else if (quizId == 2 && score >= user.quez2[0].score) {
    user.quez2[0].score = score;

    if (score >= 70) {
      user.quez3[0].hasAccess = true;
    }

    let updatedUser = await user.save();

    res.send(updatedUser);
  } else if (quizId == 3 && score >= user.quez3[0].score) {
    user.quez3[0].score = score;

    let updatedUser = await user.save();

    res.send(updatedUser);
  } else {
    res.send(400);
  }
});

const getQuiz = asyncHandler(async (req, res) => {
  const chosenQuiz = await Quiz.findOne({ quizId: req.params.id });

  if (chosenQuiz === null) {
    res.status(400);
    throw new Error("Quiz not yet available");
  }
  if (req.user.quez1[0].hasAccess && req.params.id == 1) {
    res.json(chosenQuiz.questions);
  } else if (req.user.quez2[0].hasAccess && req.params.id == 2) {
    res.json(chosenQuiz.questions);
  } else if (req.user.quez3[0].hasAccess && req.params.id == 3) {
    res.json(chosenQuiz.questions);
  } else {
    res.status(400);
    throw new Error("No access");
  }
});

export { submitQuiz, getQuiz };
