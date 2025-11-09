import axios from "axios";

// Backend base URL
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ===== About API =====
export const getAbout = () => API.get("/about");

// ===== Departments API =====
export const getDepartments = () => API.get("/departments");

// ===== Admissions API =====
export const getAdmissions = () => API.get("/admissions");

// ===== Placements API =====
export const getPlacements = () => API.get("/placements");

// ===== Contact API =====
export const submitContact = (formData) => API.post("/contact", formData);
