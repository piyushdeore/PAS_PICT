// AsyncHandler handles express async code without need to use the try catch method
import asyncHandler from "express-async-handler";
import Admin from "../models/adminModel.js";
import Guest from "../models/guestModel.js";
import StudentAcademicDetails from "../models/studentModels/studentAcademicDetails.js";
import StudentAddressDetails from "../models/studentModels/studentAddressDetails.js";
import Student from "../models/studentModels/studentModel.js";
import StudentPersonalDetails from "../models/studentModels/studentPersonalDetails.js";
import generateToken from "../utils/generateToken.js";
import convertGuestToStudent from "../utils/convertGuestToStudent.js";
/*
@desc:      Auth the admin
@route:     POST /api/admin/login
@access:    Public
@tested:    Working 12 Feb 00:39
*/
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (admin) {
    const passwordMatched = admin.matchPassword(password);

    if (passwordMatched) {
      return res.status(200).json({
        token: generateToken(admin._id),
      });
    }
    res.status(401);
    throw new Error("Not authorised, no admin privileges granted");
  } else {
    res.status(401);
    throw new Error("Not authorised, no admin privileges granted");
  }
});

/*
@desc:      GET all the guest data for approval
@route:     GET /api/admin/guestsDetails
@access:    Admin
@tested:    Working 12 Feb 00:39
*/
const getGuestsDetails = asyncHandler(async (req, res) => {
  const guests = await Guest.find().select("name email phone reverted");
  res.status(200).json(guests);
});

/*
@desc:      GET a single guest data for approval
@route:     GET /api/admin/guestsDetails/:id
@access:    Admin
*/
const getIndividualGuestDetails = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const guest = await Guest.findById(id).select("-password");
  if (guest) return res.status(200).json(guest);
  res.status(404);
  throw new Error("No such guest exists");
});

/*
@desc:      Approve the guest and to student collection and delete from guest
@route:     PATCH /api/admin/approveGuest/:id
@access:    Admin
@tested:    Working 12 Feb 00:39
*/
const approveIndividualGuest = asyncHandler(async (req, res) => {
  const guest = await Guest.findById(req.params.id);

  if (!guest) {
    res.status(404);
    throw new Error("No such guest exists");
  }
  // Get all the keys for each student collection
  const studentAttributes = Object.keys(Student.schema.paths);
  const studentAddressAttributes = Object.keys(
    StudentAddressDetails.schema.paths
  );
  const studentAcademicAttributes = Object.keys(
    StudentAcademicDetails.schema.paths
  );
  const studentPersonalAttributes = Object.keys(
    StudentPersonalDetails.schema.paths
  );

  const studentDoc = convertGuestToStudent(studentAttributes, guest);
  const studentAddressDoc = convertGuestToStudent(
    studentAddressAttributes,
    guest
  );
  const studentAcademicDoc = convertGuestToStudent(
    studentAcademicAttributes,
    guest
  );
  const studentPersonalDoc = convertGuestToStudent(
    studentPersonalAttributes,
    guest
  );

  const student = await Student.create(studentDoc);
  // Assigning the user of that details
  studentAddressDoc.owner = student._id;
  studentAcademicDoc.owner = student._id;
  studentPersonalDoc.owner = student._id;

  await StudentAddressDetails.create(studentAddressDoc);
  await StudentAcademicDetails.create(studentAcademicDoc);
  await StudentPersonalDetails.create(studentPersonalDoc);

  await Guest.findByIdAndDelete(guest._id);

  res.sendStatus(200);
});

/*
@desc:      Revert the guest and give appropriate feedback if details given are wrong
@route:     PATCH /api/admin/revertGuest/:id
@access:    Admin
@tested:    Working 12 Feb 00:39
*/
const revertIndividualGuest = asyncHandler(async (req, res) => {
  const guest = await Guest.findById(req.params.id);
  if (guest) {
    guest.reverted = true;
    guest.feedback = req.body.feedback;
    await guest.save();
    return res.sendStatus(200);
  }
  res.status(404);
  throw new Error("Guest with given id does not exist");
});

export {
  loginAdmin,
  getGuestsDetails,
  getIndividualGuestDetails,
  approveIndividualGuest,
  revertIndividualGuest,
};
