// backend/routes/about.js
import express from "express";
import About from "../models/About.js";

const router = express.Router();

// ✅ Fetch About Data
router.get("/", async (req, res) => {
  try {
    const aboutData = await About.findOne(); // get first document
    if (!aboutData) return res.status(404).json({ message: "About data not found" });
    res.json(aboutData);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch data", error });
  }
});

// ✅ Add/Edit About Data (for setup/testing)
router.post("/", async (req, res) => {
  try {
    const about = new About(req.body);
    await about.save();
    res.status(201).json(about);
  } catch (error) {
    res.status(500).json({ message: "Failed to save About data", error });
  }
});

export default router;
