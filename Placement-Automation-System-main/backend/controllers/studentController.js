// AsyncHandler handles express async code without need to use the try catch method
import asyncHandler from "express-async-handler";
import Student from "../models/studentModels/studentModel.js";
import generateToken from "../utils/generateToken.js";

/*
@desc:      Auth the guest and get token
@route:     POST /api/guest/login
@access:    Public
*/
const loginStudent = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const student = await Student.findOne({ email });
  if (student) {
    const passwordMatched = await student.matchPassword(password);
    if (passwordMatched) {
      res.json({
        token: generateToken(student._id),
      });
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
@desc:      Get student profile
@route:     GET /api/students/profile
@access:    Private
*/
const getStudentProfile = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.guest._id).select("-password");
  if (student) {
    return res.status(200).json(student);
  } else {
    res.status(404);
    throw new Error("Invalid email or password");
  }
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
export { loginStudent, getStudentProfile };
