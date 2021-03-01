import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    questionnaire1Complete: {
      type: Boolean,
      required: true,
      default: false,
    },
    questionnaire2Complete: {
      type: Boolean,
      required: true,
      default: false,
    },
    quez1: [
      {
        score: { type: Number, default: 0 },
        hasAccess: { type: Boolean, required: true, default: true },
      },
    ],
    quez2: [
      {
        score: { type: Number, required: true, default: 0 },
        hasAccess: { type: Boolean, required: true, default: false },
      },
    ],
    quez3: [
      {
        score: { type: Number, required: true, default: 0 },
        hasAccess: { type: Boolean, required: true, default: false },
      },
    ],
  },
  {
    timesstamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
