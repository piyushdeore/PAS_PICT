import jwt from "jsonwebtoken";
import Student from "../models/studentModels/studentModel.js";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
  //   const token = req.header("Authorization").replace("Bearer ", "");
  const token = req.header("Authorization").substring(7);
  if (token) {
    try {
      const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);

      // select method removes the password field from the user
      const user = await Student.findById(jwtPayload.id).select("-password");

      req.user = user;
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorised, illegal token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
