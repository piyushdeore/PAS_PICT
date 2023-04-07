import express from "express";
import {
  createCompany,
  deleteCompany,
  getCompany,
  updateCompany,
} from "../controllers/companyController.js";
import { protect as authAdmin } from "../middleware/authAdminMiddleware.js";
import { protect as authStudent } from "../middleware/authStudentMiddleware.js";
const router = express.Router();

router.post("/", authAdmin, createCompany);
router
  .route("/:id")
  .get(authStudent, getCompany)
  .patch(authAdmin, updateCompany)
  .delete(authAdmin, deleteCompany);

export default router;
