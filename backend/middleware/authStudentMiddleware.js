import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Student from "../models/studentModels/studentModel.js";
import Admin from "../models/adminModel.js";

const protect = asyncHandler(async (req, res, next) => {
  //   const token = req.header("Authorization").replace("Bearer ", "");
  const token = req.header("Authorization").substring(7);
  if (token) {
    // Checks for legality of the token and if legal extracts the payload
    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the id in payload does actually exists in collection
    const isStudent = await Student.findById(jwtPayload.id).select(
      "collegeRegistrationNumber email name mobileNumber"
    );
    if (isStudent) {
      req.student = isStudent;
      return next();
    }

    // If the token is of admin we need to allow him to pass as admin has all the privileges
    const isAdmin = await Admin.findById(jwtPayload.id).select("-password");

    if (isAdmin) {
      req.admin = isAdmin;
      return next();
    } else {
      res.status(401);
      throw new Error("Token that user belongs to does not exist");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
