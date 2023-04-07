import express from "express";
import {
  loginStudent,
  createStudent,
  getStudent,
  postResume,
  getAllStudents,
} from "../controllers/studentController.js";
import { protect as authStudent } from "../middleware/authStudentMiddleware.js";
import { protect as authAdmin } from "../middleware/authAdminMiddleware.js";
import { resumeUploader } from "../utils/fileUploader.js";
const router = express.Router();

router.route("/").post(authAdmin, createStudent).get(authAdmin, getAllStudents);
router.post("/login", loginStudent);
router.route("/:id").get(authStudent, getStudent);
router
  .route("/resume")
  .post(authStudent, resumeUploader.single("resume"), postResume);

export default router;
