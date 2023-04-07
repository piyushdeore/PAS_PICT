import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Guest from "../models/guestModel.js";
import Admin from "../models/adminModel.js";

const protect = asyncHandler(async (req, res, next) => {
  //   const token = req.header("Authorization").replace("Bearer ", "");
  const token = req.header("Authorization").substring(7);
  if (token) {
    try {
      // Checks for legality of the token and if legal extracts the payload
      const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);

      // Check if the id in payload does actually exists in collection
      const isGuest = await Guest.findById(jwtPayload.id);

      // If the token is of admin we need to allow him to pass as admin has all the privileges
      const isAdmin = await Admin.findById(jwtPayload.id);

      if (isGuest || isAdmin) {
        next();
      } else {
        res.status(401);
        throw new Error("Token that user belongs to does not exist");
      }
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
