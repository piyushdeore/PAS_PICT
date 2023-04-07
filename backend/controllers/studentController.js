// AsyncHandler handles express async code without need to use the try catch method
import asyncHandler from "express-async-handler";
import Student from "../models/studentModels/studentModel.js";
import generateToken from "../utils/generateToken.js";

/*
@desc:      Auth the guest and get token
@route:     POST /api/student/login
@access:    Public
*/
const loginStudent = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const student = await Student.findOne({ email });
  if (student) {
    const passwordMatched = await student.matchPassword(password);
    if (passwordMatched) {
      await Student.populate(student, { path: "academicDetails" });
      res.json({
        student,
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
@desc:      Auth the guest and get token
@route:     POST /api/students/
@access:    Admin
@tested:    Working: 11 Feb 11:43
*/
const createStudent = asyncHandler(async (req, res) => {
  const student = req.body;
  const success = await Student.create(student);
  if (success) {
    res.status(201).json(success);
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

/*
@desc:      Get student profile
@route:     GET /api/students/:id
@access:    Private
@tested:    Working: 11 Feb 18:25
*/
const getStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id).select("-password");
  if (student) {
    await Student.populate(student, { path: "academicDetails" });
    return res.status(200).json(student);
  } else {
    res.status(404);
    throw new Error("Student does not exist");
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

/*
@desc:      Get all students
@route:     GET /api/students/
@access:    Private
@tested:    Working: 11 Feb 18:25
*/
const getAllStudents = asyncHandler(async (req, res) => {
  const students = await Student.find().select("-password");
  if (students) {
    return res.status(200).json(students);
  } else {
    res.status(404);
    throw new Error("No student exists in collection");
  }
});

/*
@desc:      Upload resume
@route:     POST /api/students/resume
@access:    Private
@tested:    Working 24 Feb 00:59
*/
const postResume = asyncHandler(async (req, res) => {
  const filePath = req.file.path;
  const student = await Student.findOneAndUpdate(req.student.id, {
    resume: filePath,
  });

  res.sendStatus(200);
});

export { loginStudent, createStudent, getStudent, getAllStudents, postResume };
