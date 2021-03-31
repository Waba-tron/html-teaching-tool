import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import questionnaireRoutes from "./routes/questionnaireRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/quiz", quizRoutes);
app.use("/api/questionnaire", questionnaireRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
