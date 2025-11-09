// backend/models/About.js
import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
  mission: { type: String, required: true },
  vision: { type: String, required: true },
  values: [
    {
      icon: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  milestones: [
    {
      year: { type: String, required: true },
      event: { type: String, required: true },
    },
  ],
});

export default mongoose.model("About", AboutSchema, "about");