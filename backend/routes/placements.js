import express from "express";
import Placement from "../models/Placement.js";

const router = express.Router();

// Get all placements
router.get("/", async (req, res) => {
  const placements = await Placement.find();
  res.json(placements);
});

// Add placement record
router.post("/", async (req, res) => {
  const newPlacement = new Placement(req.body);
  await newPlacement.save();
  res.json(newPlacement);
});

export default router;
