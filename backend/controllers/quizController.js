import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const submitQuiz = asyncHandler(async (req, res) => {
  const { email, score, quizId } = req.body;
  const user = await User.findOne({ email });

  if (quizId == 1 && score >= user.quez1[0].score) {
    user.quez1[0].score = score;

    if (score >= 70) {
      user.quez2[0].hasAccess = true;
    }

    let updatedUser = await user.save();
    console.log(updatedUser);
    res.send(updatedUser);
  } else if (quizId == 2 && score >= user.quez2[0].score) {
    user.quez2[0].score = score;

    if (score >= 70) {
      user.quez3[0].hasAccess = true;
    }

    let updatedUser = await user.save();
    console.log(updatedUser);
    res.send(updatedUser);
  } else if (quizId == 3 && score >= user.quez3[0].score) {
    user.quez3[0].score = score;

    let updatedUser = await user.save();
    console.log(updatedUser);
    res.send(updatedUser);
  } else {
    res.send(400);
  }
});

export { submitQuiz };
