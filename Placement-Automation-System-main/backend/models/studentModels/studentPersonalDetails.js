import mongoose from "mongoose";

const studentPersonalDetailsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Student",
    },
    alternateEmail: {
      type: String,
      required: true,
      unique: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    aadharNo: {
      type: Number,
    },
    pancardNo: {
      type: Number,
    },
    prnNo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const StudentPersonalDetails = mongoose.model(
  "StudentDetails",
  studentPersonalDetailsSchema
);
export default StudentPersonalDetails;
