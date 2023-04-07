import mongoose from "mongoose";

const studentAcademicDetailsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    // Used to store whether a student has done 12th or Diploma or both
    higherSecondayEducation: {
      type: String,
      required: true,
    },
    // To know whether the third year is completed or not
    thirdYearCompleted: {
      type: Boolean,
      required: true,
    },
    // Details for 10th examination
    tenth: {
      startYear: {
        type: Number,
        required: true,
      },
      passingYear: {
        type: Number,
        required: true,
      },
      board: {
        type: String,
        required: true,
      },
      markingScheme: {
        type: String,
        required: true,
      },
      marks: {
        type: Number,
        required: true,
      },
      required: true,
    },
    // Details for 12th examination
    twelth: {
      startYear: {
        type: Number,
        required: true,
      },
      passingYear: {
        type: Number,
        required: true,
      },
      board: {
        type: String,
        required: true,
      },
      markingScheme: {
        type: String,
        required: true,
      },
      marks: {
        type: Number,
        required: true,
      },
    },
    // Details for diploma examination
    diploma: {
      startYear: {
        type: Number,
        required: true,
      },
      passingYear: {
        type: Number,
        required: true,
      },
      board: {
        type: String,
        required: true,
      },
      markingScheme: {
        type: String,
        required: true,
      },
      marks: {
        type: Number,
        required: true,
      },
    },
    firstYear: {
      cgpaSem1: {
        type: Number,
        required: true,
      },
      cgpaSem2: {
        type: Number,
        required: true,
      },
      activeBacklog: {
        type: Boolean,
        required: true,
        default: false,
      },
      passiveBacklog: {
        type: Boolean,
        required: true,
        default: false,
      },
      startYear: {
        type: Number,
        required: true,
      },
      endYear: {
        type: Number,
        required: true,
      },
    },
    secondYear: {
      cgpaSem1: {
        type: Number,
        required: true,
      },
      cgpaSem2: {
        type: Number,
        required: true,
      },
      activeBacklog: {
        type: Boolean,
        required: true,
        default: false,
      },
      passiveBacklog: {
        type: Boolean,
        required: true,
        default: false,
      },
      startYear: {
        type: Number,
        required: true,
      },
      endYear: {
        type: Number,
        required: true,
      },
    },
    thirdYear: {
      cgpaSem1: {
        type: Number,
        required: true,
      },
      cgpaSem2: {
        type: Number,
        required: true,
      },
      activeBacklog: {
        type: Boolean,
        required: true,
        default: false,
      },
      passiveBacklog: {
        type: Boolean,
        required: true,
        default: false,
      },
      startYear: {
        type: Number,
        required: true,
      },
      endYear: {
        type: Number,
        required: true,
      },
    },
    fourthYear: {
      cgpaSem1: {
        type: Number,
        required: true,
      },
      cgpaSem2: {
        type: Number,
        required: true,
      },
      activeBacklog: {
        type: Boolean,
        required: true,
        default: false,
      },
      passiveBacklog: {
        type: Boolean,
        required: true,
        default: false,
      },
      startYear: {
        type: Number,
        required: true,
      },
      endYear: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const StudentAcademicDetails = mongoose.model(
  "StudentAcademicDetails",
  studentAcademicDetailsSchema
);
export default StudentAcademicDetails;
