import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  addFavorite,
  getFavorites
} from "../controllers/favoriteController.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  addFavorite
);

router.get(
  "/",
  authMiddleware,
  getFavorites
);

export default router;