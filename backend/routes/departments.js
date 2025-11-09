import express from "express";
import Department from "../models/Department.js";

const router = express.Router();

// ✅ GET all departments
router.get("/", async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch departments", error });
  }
});

// ✅ GET one department by ID
router.get("/:id", async (req, res) => {
  try {
    const dept = await Department.findById(req.params.id);
    if (!dept) return res.status(404).json({ message: "Department not found" });
    res.json(dept);
  } catch (error) {
    res.status(500).json({ message: "Error fetching department", error });
  }
});

// ✅ POST create a new department
router.post("/", async (req, res) => {
  try {
    const newDept = new Department(req.body);
    await newDept.save();
    res.status(201).json(newDept);
  } catch (error) {
    res.status(400).json({ message: "Failed to create department", error });
  }
});

// ✅ PUT update existing department
router.put("/:id", async (req, res) => {
  try {
    const updatedDept = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDept)
      return res.status(404).json({ message: "Department not found" });
    res.json(updatedDept);
  } catch (error) {
    res.status(500).json({ message: "Failed to update department", error });
  }
});

// ✅ DELETE a department
router.delete("/:id", async (req, res) => {
  try {
    const deletedDept = await Department.findByIdAndDelete(req.params.id);
    if (!deletedDept)
      return res.status(404).json({ message: "Department not found" });
    res.json({ message: "Department deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete department", error });
  }
});

export default router;
