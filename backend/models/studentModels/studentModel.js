import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const studentSchema = mongoose.Schema(
  {
    // Name details
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    collegeRegistrationNumber: {
      type: String,
      required: true,
    },
    // Year of engineering
    currentYear: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0 || value > 4) {
          throw new Error("Value need to be between 1-4");
        }
      },
    },
    division: {
      type: Number,
      required: true,
    },
    rollNumber: {
      type: Number,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isPlaced: {
      type: Boolean,
      default: false,
    },
    isPlacedDream: {
      type: Boolean,
      default: false,
    },
    resume: {
      type: String,
    },
  },
  { toObject: { virtuals: true }, toJSON: { virtuals: true }, timestamps: true }
);
studentSchema.virtual("academicDetails", {
  ref: "StudentAcademicDetails",
  localField: "_id",
  foreignField: "owner",
});
studentSchema.virtual("personalDetails", {
  ref: "StudentPersonalDetails",
  localField: "_id",
  foreignField: "owner",
});
studentSchema.virtual("addressDetails", {
  ref: "StudentAddressDetails",
  localField: "_id",
  foreignField: "owner",
});
studentSchema.virtual("jobApplications", {
  ref: "JobApplication",
  localField: "_id",
  foreignField: "student",
});

// Methods which leave on the instance i.e Instance methods
// i.e. user.<method_name>
studentSchema.methods.matchPassword = async function (enteredPassword) {
  const user = this;
  return await bcrypt.compare(enteredPassword, user.password);
};

// studentSchema.pre("save", async function (next) {
//   const user = this;
//   if (user.isModified("password")) {
//     user.password = bcrypt.hashSync(user.password);
//   }
// });

const Student = mongoose.model("Student", studentSchema);
export default Student;
