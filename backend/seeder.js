import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import guests from "./data/guestsData.js";

import connectDB from "./config/db.js";
import Guest from "./models/guestModel.js";
import Company from "./models/companyModel.js";

import { readFile } from "fs/promises";
import Student from "./models/studentModels/studentModel.js";
import StudentAcademicDetails from "./models/studentModels/studentAcademicDetails.js";
import StudentAddressDetails from "./models/studentModels/studentAddressDetails.js";
import StudentPersonalDetails from "./models/studentModels/studentPersonalDetails.js";

const companiesJson = JSON.parse(
  await readFile(new URL("./data/companyData.json", import.meta.url))
);

const jobsJson = JSON.parse(
  await readFile(new URL("./data/jobsData.json", import.meta.url))
);

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

const deleteGuests = async () => {
  try {
    await Guest.deleteMany();
  } catch (error) {
    console.log(`Error ${error}`.red.inverse);
    process.exit(1);
  }
};

const importCompanies = async () => {
  try {
    await Company.deleteMany();
    const createdCompanies = await Company.insertMany(companiesJson);

    console.log("Companies imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error ${error}`.red.inverse);
    process.exit(1);
  }
};

const importJobs = async () => {
  try {
    await Company.deleteMany();
    const createdCompanies = await Company.insertMany(companiesJson);

    console.log("Companies imported!".green.inverse);
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

const deleteStudentTables = async () => {
  try {
    await Student.deleteMany();
    await StudentAcademicDetails.deleteMany();
    await StudentPersonalDetails.deleteMany();
    await StudentAddressDetails.deleteMany();
    process.exit();
  } catch (error) {
    console.log(`Error ${error}`.red.inverse);
    process.exit(1);
  }
};

const resource = process.argv[2];
switch (resource) {
  case "companies":
    importCompanies();
    break;
  case "jobs":
    importGuests();
    break;
  case "guests":
    importGuests();
    break;
  case "deleteStudentTables":
    deleteStudentTables();
    break;
  default:
    break;
}
// if (process.argv[2] === "-d") {
//   destroyData();
// } else {
//   importData();
// }
