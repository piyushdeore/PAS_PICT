import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Guest from "../models/guestModel.js";

const protect = asyncHandler(async (req, res, next) => {
  //   const token = req.header("Authorization").replace("Bearer ", "");
  const token = req.header("Authorization").substring(7);
  if (token) {
    try {
      const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);

      // select method removes the password field from the user
      const guest = await Guest.findById(jwtPayload.id).select(
        "name email password reverted"
      );

      req.guest = guest;
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
