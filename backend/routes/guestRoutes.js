import express from "express";
import {
  loginGuest,
  registerGuest,
  deleteGuest,
  getGuest,
  updateGuest,
  getAllGuests,
} from "../controllers/guestController.js";
import { protect as authGuest } from "../middleware/authGuestMiddleware.js";
import { protect as authAdmin } from "../middleware/authAdminMiddleware.js";
const router = express.Router();

router.post("/login", loginGuest);
router.post("/", registerGuest).get("/", authAdmin, getAllGuests);
router
  .route("/:id")
  .get(authGuest, getGuest)
  .patch(authGuest, updateGuest)
  .delete(authGuest, deleteGuest);

export default router;
