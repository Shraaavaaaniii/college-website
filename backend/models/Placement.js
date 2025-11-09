import mongoose from "mongoose";

const placementSchema = new mongoose.Schema({
  companyName: String,
  studentsPlaced: Number,
  year: Number,
  logo: String,
});

export default mongoose.model("Placement", placementSchema);
