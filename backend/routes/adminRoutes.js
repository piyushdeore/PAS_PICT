import express from "express";
import {
  loginAdmin,
  approveIndividualGuest,
  revertIndividualGuest,
  getGuestsDetails,
  getIndividualGuestDetails,
} from "../controllers/adminController.js";
import { protect } from "../middleware/authAdminMiddleware.js";
const router = express.Router();

router.post("/login", loginAdmin);
router.get("/guestsDetails", getGuestsDetails);
router
  .route("/guestsDetails/:id")
  .get(protect, getIndividualGuestDetails)
  .post(protect, approveIndividualGuest)
  .patch(protect, revertIndividualGuest);
router.patch("/approveGuest/:id", protect, approveIndividualGuest);
router.patch("/revertGuest/:id", protect, revertIndividualGuest);

export default router;
