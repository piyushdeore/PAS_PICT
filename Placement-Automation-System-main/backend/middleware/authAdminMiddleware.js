import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import Admin from "../models/adminModel";

const protect = asyncHandler(async (req, res, next) => {
  //   const token = req.header("Authorization").replace("Bearer ", "");
  const token = req.header("Authorization").substring(7);
  if (token) {
    try {
      const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);

      // select method removes the password field from the user
      const admin = await Admin.findById(jwtPayload.id);
      if (admin) {
        next();
      } else {
        res.status(401);
        throw new Error("Not authorised, illegal token");
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
