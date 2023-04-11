/**
 * Module dependencies.
 */
import { Router } from "express";

import express from "express";
import cors from "cors";

import quiz from "./quiz.route.js";
import submit from "./submit.route.js";
import category from "./category.route.js";

const router = express();

// enable cors
router.use(cors());

// define routes
router.get("/", function (req, res, next) {
  res.status(200).send({
    status: "success",
    message: "Welcome to the API",
  });
});

router.use("/api/quiz", quiz);
router.use("/api/category", category);
router.use("/api/submit", submit);

export default router;

