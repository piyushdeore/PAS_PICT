import express from "express";
import {
  loginStudent,
  getStudentProfile,
} from "../controllers/studentController.js";
import { protect } from "../middleware/authStudentMiddleware.js";
const router = express.Router();

router.post("/login", loginStudent);
router.route("/profile").get(protect, getStudentProfile);

export default router;
