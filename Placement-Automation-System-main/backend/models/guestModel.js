import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const guestSchema = mongoose.Schema(
  {
    // Basic details
    name: {
      firstName: {
        type: String,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // This shows whether the student-information is reverted back to student if incorrect
    reverted: {
      type: Boolean,
      default: false,
    },
    feedback: {
      type: String,
    },
    alternateEmail: {
      type: String,
      unique: true,
    },
    mobileNo: {
      type: Number,
      unique: true,
    },
    dateOfBirth: {
      type: Date,
    },
    collegeRegistrationNo: {
      type: String,
      required: true,
      unique: true,
    },
    branch: {
      type: String,
    },
    // Year of engineering
    currentYear: {
      type: Number,

      validate(value) {
        if (value < 0 || value > 4) {
          throw new Error("Value need to be between 1-4");
        }
      },
    },
    division: {
      type: Number,
    },
    rollNo: {
      type: Number,
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

    // Academic details

    // Used to store whether a student has done 12th or Diploma or both
    higherSecondayEducation: {
      type: String,
    },
    // To know whether the third year is completed or not
    thirdYearCompleted: {
      type: Boolean,
    },
    // Details for 10th examination
    tenth: {
      startYear: {
        type: Number,
      },
      passingYear: {
        type: Number,
      },
      board: {
        type: String,
      },
      markingScheme: {
        type: String,
      },
      scoredMarks: {
        type: Number,
      },
      totalMarks: {
        type: Number,
      },
    },
    // Details for 12th examination
    twelth: {
      startYear: {
        type: Number,
      },
      passingYear: {
        type: Number,
      },
      board: {
        type: String,
      },
      markingScheme: {
        type: String,
      },
      scoredMarks: {
        type: Number,
      },
      totalMarks: {
        type: Number,
      },
    },
    // Details for diploma examination
    diploma: {
      startYear: {
        type: Number,
      },
      passingYear: {
        type: Number,
      },
      board: {
        type: String,
      },
      markingScheme: {
        type: String,
      },
      scoredMarks: {
        type: Number,
      },
      totalMarks: {
        type: Number,
      },
    },
    firstYear: {
      cgpaSem1: {
        type: Number,
      },
      cgpaSem2: {
        type: Number,
      },
      activeBacklog: {
        type: Boolean,

        default: false,
      },
      passiveBacklog: {
        type: Boolean,

        default: false,
      },
      startYear: {
        type: Number,
      },
      endYear: {
        type: Number,
      },
    },
    secondYear: {
      cgpaSem1: {
        type: Number,
      },
      cgpaSem2: {
        type: Number,
      },
      activeBacklog: {
        type: Boolean,
        default: false,
      },
      passiveBacklog: {
        type: Boolean,
        default: false,
      },
      startYear: {
        type: Number,
      },
      endYear: {
        type: Number,
      },
    },
    thirdYear: {
      cgpaSem1: {
        type: Number,
      },
      cgpaSem2: {
        type: Number,
      },
      activeBacklog: {
        type: Boolean,
        default: false,
      },
      passiveBacklog: {
        type: Boolean,
        default: false,
      },
      startYear: {
        type: Number,
      },
      endYear: {
        type: Number,
      },
    },
    fourthYear: {
      cgpaSem1: {
        type: Number,
      },
      cgpaSem2: {
        type: Number,
      },
      activeBacklog: {
        type: Boolean,
        default: false,
      },
      passiveBacklog: {
        type: Boolean,
        default: false,
      },
      startYear: {
        type: Number,
      },
      endYear: {
        type: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

// Methods which leave on the instance i.e Instance methods
// i.e. user.<method_name>
guestSchema.methods.matchPassword = async function (enteredPassword) {
  const user = this;
  return await bcrypt.compare(enteredPassword, user.password);
};

guestSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

const Guest = mongoose.model("Guest", guestSchema);
export default Guest;
