import express from "express";
import { test } from "../controllers/user.controller.js";
import { noInput } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);
export default router;

router.get("/", noInput);
