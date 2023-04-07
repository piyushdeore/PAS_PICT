// AsyncHandler handles express async code without need to use the try catch method
import asyncHandler from "express-async-handler";
import Guest from "../models/guestModel.js";
import Student from "../models/studentModels/studentModel.js";
import generateToken from "../utils/generateToken.js";

/*
@desc:      Auth the guest and get token
@route:     POST /api/guests/login
@access:    Public
*/
const loginGuest = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const guest = await Guest.findOne({ email });
  if (guest) {
    const passwordMatched = await guest.matchPassword(password);
    if (passwordMatched) {
      return res.status(200).json({ token: generateToken(guest._id) });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } else {
    res.status(401);
    throw new Error("Invalid email or User not signed up");
  }
});

/*
@desc:      Register/Create a new guest
@route:     POST /api/guests
@access:    Public
*/
const registerGuest = asyncHandler(async (req, res) => {
  const { collegeRegistrationNumber, email, password } = req.body;
  const userExists = await Student.findOne({
    $or: [{ email }, { collegeRegistrationNumber }],
  });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const guest = await Guest.create({
    collegeRegistrationNumber,
    email,
    password,
  });

  if (guest) {
    return res.status(201).json({ token: generateToken(guest._id) });
  } else {
    res.status(400);
    throw new Error(
      "Student already exists with email or College Registration Number"
    );
  }
});

/*
@desc:      Get guest profile
@route:     GET /api/guests/:id
@access:    Private
*/
const getGuest = asyncHandler(async (req, res) => {
  const guestId = req.params.id;
  const guest = await Guest.findById(guestId).select("-password");
  if (guest) {
    return res.status(200).json(guest);
  } else {
    res.status(404);
    throw new Error("Guest does not exists");
  }
});

/*
@desc:      PATCH guest details to backend
@route:     PATCH /api/guests/:id
@access:    Private
*/
const updateGuest = asyncHandler(async (req, res) => {
  const guestId = req.params.id;
  const guestToBeUpdated = req.body;
  guestToBeUpdated.reverted = false;
  guestToBeUpdated.feedback = "";
  const guest = await Guest.findByIdAndUpdate(guestId, guestToBeUpdated);
  if (guest) {
    return res.sendStatus(200);
  }
  return res.sendStatus(400);
});

/*
@desc:      Delete a new guest
@route:     DELETE /api/guests/:id
@access:    Private
*/
const deleteGuest = asyncHandler(async (req, res) => {
  const guestId = req.params.id;
  const success = await Guest.findByIdAndDelete(guestId);

  if (success) {
    return res.sendStatus(200);
  }
  res.status(400);
  throw new Error("No guest with such id found");
});

/*
@desc:      Get all guests
@route:     GET /api/guests/
@access:    Admin
*/
const getAllGuests = asyncHandler(async (req, res) => {
  const guests = await Guest.find().select(
    "name email reverted feedback mobileNumber collegeRegistrationNumber division rollNumber gender branch"
  );

  if (guests) {
    return res.status(200).json(guests);
  }
  res.status(400);
  throw new Error("No guest with such id found");
});

// });
export {
  loginGuest,
  registerGuest,
  deleteGuest,
  getGuest,
  updateGuest,
  getAllGuests,
};
