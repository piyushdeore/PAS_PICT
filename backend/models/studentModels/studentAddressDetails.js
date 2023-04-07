import mongoose from "mongoose";

const studentAddressDetailsSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Student",
    },

    permanentAddress: {
      flatNo: {
        type: String,
      },
      street: {
        type: String,
      },
      area: {
        type: String,
      },
      city: {
        type: String,
      },
      pincode: {
        type: String,
      },
      district: {
        type: String,
      },
      state: {
        type: String,
      },
    },
    temporaryAddress: {
      flatNo: {
        type: String,
      },
      street: {
        type: String,
      },
      area: {
        type: String,
      },
      city: {
        type: String,
      },
      pincode: {
        type: String,
      },
      district: {
        type: String,
      },
      state: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const StudentAddressDetails = mongoose.model(
  "StudentAddressDetails",
  studentAddressDetailsSchema
);
export default StudentAddressDetails;
