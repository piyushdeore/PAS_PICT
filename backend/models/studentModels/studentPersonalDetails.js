import mongoose from "mongoose";

const studentPersonalDetailsSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Student",
    },
    alternateEmail: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    aadharNumber: {
      type: Number,
    },
    pancardNumber: {
      type: Number,
    },
    prnNumber: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const StudentPersonalDetails = mongoose.model(
  "StudentPersonalDetails",
  studentPersonalDetailsSchema
);
export default StudentPersonalDetails;
