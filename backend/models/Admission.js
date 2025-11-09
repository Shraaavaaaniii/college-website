import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
  program: String,
  eligibility: String,
  intake: Number,
  fees: String,
  lastDate: String,
});

export default mongoose.model("Admission", admissionSchema);
