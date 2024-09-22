import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("Server aa is running on http://localhost:3000");
});
