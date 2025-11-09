import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import aboutRoutes from "./routes/about.js";
import departmentRoutes from "./routes/departments.js";
import admissionRoutes from "./routes/admissions.js";
import placementRoutes from "./routes/placements.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB error:", err));

// Routes
app.use("/api/about", aboutRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/placements", placementRoutes);
app.use("/api/contact", contactRoutes);

// Default route
app.get("/", (req, res) => res.send("College Website API is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
