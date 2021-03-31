import mongoose from "mongoose";
/*
_id: updatedUser._id,
name: updatedUser.name,
email: updatedUser.email,
response: response,
questionaireId: questionaireId,
questionnaire2Complete: user.questionnaire2Complete,
*/
const questionnaireResponseSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    response: {
      type: String,
    },
    questionnaireId: {
      type: Number,
    },
  },
  {
    timesstamps: true,
  }
);

const questionnaireResponse = mongoose.model(
  "questionnaireResponse",
  questionnaireResponseSchema
);

export default questionnaireResponse;
