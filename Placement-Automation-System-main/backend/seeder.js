import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import guests from "./data/guestsData.js";

import connectDB from "./config/db.js";
import Guest from "./models/guestModel.js";

dotenv.config();

connectDB();

const importGuests = async () => {
  try {
    await Guest.deleteMany();

    const createdGuests = await Guest.insertMany(guests);

    console.log("Guests imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error ${error}`.red.inverse);
    process.exit(1);
  }
};

// const destroyData = async () => {
//   try {
//     await Order.deleteMany();
//     await User.deleteMany();
//     await Product.deleteMany();

//     console.log("Data desroyed!".red.inverse);
//     process.exit();
//   } catch (error) {
//     console.log(`Error ${error}`.red.inverse);
//     process.exit(1);
//   }
// };

importGuests();
// if (process.argv[2] === "-d") {
//   destroyData();
// } else {
//   importData();
// }
