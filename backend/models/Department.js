import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  programs: [String],
  faculty: Number,
  students: Number,
  achievements: [String],
});

const Department = mongoose.model("Department", DepartmentSchema, "departments");
export default Department;
