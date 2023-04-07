import express from "express";
import dotenv from "dotenv";
import colors from "colors";
// when not working with react need to use .js extension for java-script files other than npm modules
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import guestRoutes from "./routes/guestRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";

dotenv.config();
connectDB();

const app = express();
// Enables us to use the json data sent through req body from client
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/guests", guestRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/companies", companyRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/orders", orderRoutes);

// app.get("/api/config/paypal", (req, res) =>
//   res.send(process.env.PAYPAL_CLIENT_ID)
// );

// Adding errorHandler middleware
// This middleware will run when express encounters any errors
// The following middlewares will run in sequence
// Refer: https://reflectoring.io/express-error-handling/

// Middleware error-handler for pages/routes not found
app.use(notFound);

app.use(errorHandler);

app.get("*", (req, res) => {
  return res.status(404).send("No such route exists");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Express listening on Port: ${PORT} in ${process.env.NODE_ENV} mode`.magenta
      .italic
  );
});
