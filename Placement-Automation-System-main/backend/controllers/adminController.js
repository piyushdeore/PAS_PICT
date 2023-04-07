// AsyncHandler handles express async code without need to use the try catch method
import asyncHandler from "express-async-handler";
import Admin from "../models/adminModel.js";
import Guest from "../models/guestModel.js";
import generateToken from "../utils/generateToken.js";

/*
@desc:      Auth the admin
@route:     POST /api/admin/login
@access:    Public
*/
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (admin) {
    const passwordMatched = admin.matchPassword(password);

    if (passwordMatched) {
      return res.status(200).json({
        token: generateToken(admin._id),
      });
    }
    res.status(401);
    throw new Error("Not authorised, no admin privileges granted");
  } else {
    res.status(401);
    throw new Error("Not authorised, no admin privileges granted");
  }
});

/*
@desc:      GET all the guest data for approval
@route:     GET /api/admin/guestsDetails
@access:    Admin
*/
const getGuestsDetails = asyncHandler(async (req, res) => {
  const guests = await Guest.find().select("name email phone reverted");
  res.status(200).json(guests);
});

/*
@desc:      GET a single guest data for approval
@route:     GET /api/admin/guestsDetails/:id
@access:    Admin
*/
const getIndividualGuestDetails = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const guest = await Guest.findById(id).select("-password");
  if (guest) return res.status(200).json(guest);
  res.status(404);
  throw new Error("No such guest exists");
});

/*
@desc:      Approve the guest
@route:     PATCH /api/admin/guestsDetails/:id
@access:    Admin
*/
const approveIndividualGuest = asyncHandler(async (req, res) => {
  const guest = await Guest.findById(id);
  res.status(200).json(guest);
});

export {
  loginAdmin,
  getGuestsDetails,
  getIndividualGuestDetails,
  approveIndividualGuest,
};
