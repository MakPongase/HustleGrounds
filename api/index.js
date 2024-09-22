import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
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

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use("/api/users", userRouter);
app.listen(3000, () => {
  console.log("Server aa is running on http://localhost:3000");
});
