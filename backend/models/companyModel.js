import mongoose from "mongoose";

const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    overview: {
      type: String,
    },
    feedback: {
      type: String,
    },
    logo: {
      type: String,
    },
    // Possible locations for that job
    jobLocation: [String],
  },
  {
    timestamps: true,
  }
);
companySchema.virtual("jobOpenings", {
  ref: "Job",
  localField: "_id",
  foreignField: "company",
});
const Company = mongoose.model("Company", companySchema);
export default Company;
