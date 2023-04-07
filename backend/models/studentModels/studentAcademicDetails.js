import mongoose from "mongoose";

const studentAcademicDetailsSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Student",
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
      scoredMarks: {
        type: Number,
        required: true,
      },
      totalMarks: {
        type: Number,
        required: true,
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
        required: true,
      },
      cgpaSem2: {
        type: Number,
        required: true,
      },
      activeBacklog: {
        type: Number,
        required: true,
        default: 0,
      },
      passiveBacklog: {
        type: Number,
        required: true,
        default: 0,
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
        type: Number,
        required: true,
        default: 0,
      },
      passiveBacklog: {
        type: Number,
        required: true,
        default: 0,
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
        default: 0,
      },
      cgpaSem2: {
        type: Number,
        default: 0,
      },
      activeBacklog: {
        type: Number,
        default: 0,
      },
      passiveBacklog: {
        type: Number,
        default: 0,
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
        default: 0,
      },
      cgpaSem2: {
        type: Number,
        default: 0,
      },
      activeBacklog: {
        type: Number,
        default: 0,
      },
      passiveBacklog: {
        type: Number,
        default: 0,
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

// Virtual field to get tenth percentage
studentAcademicDetailsSchema.virtual("tenthPercentage").get(function () {
  return ((this.tenth.scoredMarks * 100) / this.tenth.totalMarks).toFixed(2);
});

// Virtual field to get twelth or diploma percentage
studentAcademicDetailsSchema.virtual("twelthPercentage").get(function () {
  if (this.higherSecondayEducation == "TWELTH")
    return ((this.twelth.scoredMarks * 100) / this.twelth.totalMarks).toFixed(
      2
    );
  else if (this.higherSecondayEducation == "DIPLOMA")
    return ((this.diploma.scoredMarks * 100) / this.diploma.totalMarks).toFixed(
      2
    );
  else if (this.higherSecondayEducation == "TWELTH_AND_DIPLOMA")
    return Math.max(
      ((this.twelth.scoredMarks * 100) / this.twelth.totalMarks).toFixed(2),
      ((this.diploma.scoredMarks * 100) / this.diploma.totalMarks).toFixed(2)
    );
});

// Virtual field to get aggregate cgpa
studentAcademicDetailsSchema.virtual("cgpa").get(function () {
  const total =
    this.firstYear.cgpaSem1 +
    this.firstYear.cgpaSem2 +
    this.secondYear.cgpaSem1 +
    this.secondYear.cgpaSem2 +
    this.thirdYear.cgpaSem1 +
    this.thirdYear.cgpaSem2 +
    this.fourthYear.cgpaSem1 +
    this.fourthYear.cgpaSem2;
  const totalSemestersCompleted = this.thirdYearCompleted ? 6 : 5;

  return (total / totalSemestersCompleted).toFixed(2);
});

// Virtual field to find whether student has backlog-active
studentAcademicDetailsSchema.virtual("activeBacklogs").get(function () {
  return (
    this.firstYear.activeBacklog +
    this.secondYear.activeBacklog +
    this.thirdYear.activeBacklog +
    this.fourthYear.activeBacklog
  );
});

// Virtual field to find whether student has backlog-passive
studentAcademicDetailsSchema.virtual("passiveBacklogs").get(function () {
  return (
    this.firstYear.passiveBacklog +
    this.secondYear.passiveBacklog +
    this.thirdYear.passiveBacklog +
    this.fourthYear.passiveBacklog
  );
});

// Virtual field to find whether student has yeardown
studentAcademicDetailsSchema.virtual("yeardown").get(function () {
  const res =
    this.secondYear.startYear != this.firstYear.endYear ||
    this.thirdYear.startYear != this.secondYear.endYear;
  if (this.thirdYearCompleted) {
    res = res || this.fourthYear.startYear != this.thirdYear.endYear;
  }
});

const StudentAcademicDetails = mongoose.model(
  "StudentAcademicDetails",
  studentAcademicDetailsSchema
);
export default StudentAcademicDetails;
