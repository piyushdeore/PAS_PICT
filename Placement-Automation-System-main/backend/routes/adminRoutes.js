import express from "express";
import {
  loginAdmin,
  approveIndividualGuest,
  getGuestsDetails,
  getIndividualGuestDetails,
} from "../controllers/adminController.js";
import Admin from "../models/adminModel.js";
const router = express.Router();

router.post("/login", loginAdmin);
router.get("/guestsDetails", getGuestsDetails);
router.get("/guestsDetails/:id", getIndividualGuestDetails);

export default router;
