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

    collegeRegistrationNo: {
      type: Number,
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
    rollNo: {
      type: Number,
      required: true,
    },
    mobileNo: {
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
  },
  {
    timestamps: true,
  }
);

// Methods which leave on the instance i.e Instance methods
// i.e. user.<method_name>
studentSchema.methods.matchPassword = async function (enteredPassword) {
  const user = this;
  return await bcrypt.compare(enteredPassword, user.password);
};

studentSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
