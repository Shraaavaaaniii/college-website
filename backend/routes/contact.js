import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// Get all messages (optional admin use)
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// Submit a contact message
router.post("/", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json({ message: "Message received successfully!" });
});

export default router;
