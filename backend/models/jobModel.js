import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },

    eligibility: {
      tenth: {
        type: Number,
        default: 0,
      },
      twelth: {
        type: Number,
        default: 0,
      },

      cgpa: {
        type: Number,
        default: 0,
      },
      activeBacklogsAllowed: {
        type: Number,
        default: 0,
      },
      passiveBacklogsAllowed: {
        type: Number,
        default: 0,
      },
      yeardownAllowed: {
        type: Boolean,
        default: true,
      },

      branchesAllowed: [String],
    },

    jobId: {
      type: String,
    },

    jobRole: {
      type: String,
    },

    compensation: {
      type: Number,
    },

    totalRounds: {
      type: Number,
    },
    testDay: {
      type: Date,
    },
    rounds: [
      {
        // Tells whether the round in online or offline
        mode: {
          type: String,
        },
        // Venue when the mode of round in offline
        venue: {
          type: String,
        },
        // Round type
        // Possible values: CODING_ROUND, INTERVIEW, HR_INTERVIEW
        roundType: {
          type: String,
        },
        // Date when that round is scheduled
        roundDate: {
          type: Date,
        },
      },
    ],
    // Description for job
    jobDescription: {
      type: String,
    },
    offerType: {
      type: String,
    },
    testInstruction: {
      type: String,
    },
    bondDurationMonths: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;
