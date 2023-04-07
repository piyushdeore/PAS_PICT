// AsyncHandler handles express async code without need to use the try catch method
import asyncHandler from "express-async-handler";
import Guest from "../models/guestModel.js";
import generateToken from "../utils/generateToken.js";

/*
@desc:      Auth the guest and get token
@route:     POST /api/guest/login
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
    throw new Error("Invalid email or password");
  }
});

/*
@desc:      Register/Create a new guest
@route:     POST /api/guests
@access:    Public
*/
const registerGuest = asyncHandler(async (req, res) => {
  const { collegeRegistrationNo, email, password } = req.body;
  const userExists = await Guest.findOne({ email });
  const anotherUserExists = await Guest.findOne({ collegeRegistrationNo });

  if (userExists || anotherUserExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const guest = await Guest.create({ collegeRegistrationNo, email, password });

  if (guest) {
    return res.status(201).json({ token: generateToken(guest._id) });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

/*
@desc:      Get guest profile
@route:     GET /api/guests/profile/
@access:    Private
*/
const getGuestProfile = asyncHandler(async (req, res) => {
  const guestFromReq = req.guest;
  const guest = await Guest.findById(guestFromReq._id).select("-password");
  if (guest) {
    return res.status(200).json(guest);
  } else {
    res.status(404);
    throw new Error("Invalid email or password");
  }
});

/*
@desc:      PATCH guest details to backend
@route:     PATCH /api/guests/
@access:    Private
*/
const setGuestDetails = asyncHandler(async (req, res) => {
  const guestToBeUpdated = req.body;
  guestToBeUpdated.reverted = false;
  guestToBeUpdated.feedback = "";
  const guest = await new Guest.findByIdAndUpdate(
    req.guest._id,
    guestToBeUpdated
  );
  if (guest) {
    return res.sendStatus(200);
  }
  return res.sendStatus(400);
});

// /*
// @desc:      Update user profile
// @route:     PUT /api/users/profile
// @access:    Private
// */
// const updateUserProfile = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id);
//   if (user) {
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     if (req.body.password) {
//       user.password = req.body.password;
//     }

//     const updatedUser = await user.save();
//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       isAdmin: updatedUser.isAdmin,
//       token: generateToken(updatedUser._id),
//     });
//   } else {
//     res.status(404);
//     throw new Error("Invalid email or password");
//   }
// });
export { loginGuest, registerGuest, getGuestProfile, setGuestDetails };
