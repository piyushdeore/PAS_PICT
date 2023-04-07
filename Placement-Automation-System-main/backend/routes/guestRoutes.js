import express from "express";
import {
  loginGuest,
  registerGuest,
  getGuestProfile,
} from "../controllers/guestController.js";
import { protect } from "../middleware/authGuestMiddleware.js";
const router = express.Router();

/*
@desc:      Fetch all products
@route:     GET /api/products
@access:    Public
*/
router.route("/").post(registerGuest);
router.post("/login", loginGuest);
router.route("/profile").get(protect, getGuestProfile);

export default router;
