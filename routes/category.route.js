/**
 * Module dependencies.
 */
import { Router } from "express";
import { index, store } from "../controllers/category.controller.js";

/*
 * Initialize router.
 */
const router = Router();

/* GET quiz listing. */
router.get("/", index);
router.post("/", store);

export default router;

// Path: routes\category.route.js
