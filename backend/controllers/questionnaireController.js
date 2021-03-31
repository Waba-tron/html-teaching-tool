import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import questionnaireResponse from "../models/questionnaireResponseModel.js";

const addQuestionResponse = asyncHandler(async (req, res) => {
  const { email, response, questionaireId } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    if (questionaireId == 1) {
      if (user.questionnaire1Complete) {
        res.send("looks like you already completed this questionnaire");
      } else {
        user.questionnaire1Complete = true;

        let updatedUser = await user.save();
        console.log(updatedUser);
        res.json({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          response: req.body.response,
          questionaireId: questionaireId,
          questionnaire1Complete: user.questionnaire1Complete,
        });

        questionnaireResponse.create({
          userId: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          response: response,
          questionnaireId: questionaireId,
        });
      }
    } else if (questionaireId == 2) {
      if (user.questionnaire2Complete) {
        res.send("looks like you already completed this questionnaire");
      } else {
        user.questionnaire2Complete = true;

        let updatedUser = await user.save();
        console.log(updatedUser);
        res.json({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          response: response,
          questionaireId: questionaireId,
          questionnaire2Complete: user.questionnaire2Complete,
        });

        questionnaireResponse.create({
          userId: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          response: response,
          questionnaireId: questionaireId,
        });
      }
    }
  } else {
    res.send(400);
  }
});

const getQuestionResponses = asyncHandler(async (req, res) => {
  const responses = await questionnaireResponse.find({
    questionnaireId: req.params.id,
  });

  res.send(responses);
});

export { addQuestionResponse, getQuestionResponses };
