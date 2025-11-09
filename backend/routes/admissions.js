import express from "express";
import Admission from "../models/Admission.js";

const router = express.Router();

// Get all admissions
router.get("/", async (req, res) => {
  const admissions = await Admission.find();
  res.json(admissions);
});

// Add admission record
router.post("/", async (req, res) => {
  const newAdmission = new Admission(req.body);
  await newAdmission.save();
  res.json(newAdmission);
});

export default router;
