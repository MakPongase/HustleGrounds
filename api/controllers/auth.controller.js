import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    if (error.name === "ValidationError") {
      return next(errorHandler(400, "Validation error occurred"));
    }

    if (error.code === 11000) {
      return next(errorHandler(400, "User already exists"));
    }

    next(errorHandler(500, "User creation failed"));
  }
};

export const signin = (req, res) => {
  res.send("Signin");
};
