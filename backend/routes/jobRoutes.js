import express from "express";
import {
  createJob,
  getJob,
  updateJob,
  deleteJob,
  getJobs,
} from "../controllers/jobController.js";
import { protect as authAdmin } from "../middleware/authAdminMiddleware.js";
import { protect as authStudent } from "../middleware/authStudentMiddleware.js";
const router = express.Router();

router.route("/").post(authAdmin, createJob).get(authStudent, getJobs);
router
  .route("/:id")
  .get(authStudent, getJob)
  .patch(authAdmin, updateJob)
  .delete(authAdmin, deleteJob);

export default router;
