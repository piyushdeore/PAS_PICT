// AsyncHandler handles express async code without need to use the try catch method
import asyncHandler from "express-async-handler";
import Company from "../models/companyModel.js";
import Job from "../models/jobModel.js";
import Student from "../models/studentModels/studentModel.js";
import StudentAcademicDetails from "../models/studentModels/studentAcademicDetails";
import JobApplication from "../models/jobApplicationModel.js";

/*
@desc:      Create a job application
@route:     POST /api/jobApplications/
@access:    Private
@tested:    Not tested
*/
const createJobApplication = asyncHandler(async (req, res) => {
  const studentId = req.body.studentId;
  const jobId = req.body.jobId;
  const studentAcademicDetails = await StudentAcademicDetails.findOne({
    owner: studentId,
  });
  const job = await Job.findById(jobId);
  if (!studentAcademicDetails || !job) {
    res.status(400);
    throw new Error("Student or job does not exist");
  }

  const eligibile =
    studentAcademicDetails.tenth >= job.eligibility.tenth &&
    studentAcademicDetails.twelth >= job.eligibility.twelth &&
    studentAcademicDetails.cgpa >= job.eligibility.cgpa;

  eligibile =
    eligibile &&
    job.eligibility.activeBacklogsAllowed >=
      studentAcademicDetails.activeBacklogs;

  eligibile =
    eligibile &&
    job.eligibility.passiveBacklogsAllowed >=
      studentAcademicDetails.passiveBacklogs;

  // Checks for yeardown eligibility
  eligibile =
    eligibile &&
    !(!job.eligibility.yeardownAllowed && studentAcademicDetails.yeardown);

  // Checking whether the company allows the student of a branch
  if (
    job.eligibility.branchesAllowed &&
    job.eligibility.branchesAllowed.length > 0
  ) {
    eligibile =
      eligibile &&
      job.eligibility.branchesAllowed.includes(studentAcademicDetails.branch);
  }

  if (eligibile) {
    const jobApplication = await JobApplication.create({
      student: studentId,
      job: jobId,
    });
    if (jobApplication) {
      res.sendStatus(201);
    }
  } else {
    res.status(400);
    throw new Error("Student not eligbile for the job");
  }
});

/*
@desc:      Get a jobApplication
@route:     GET /api/jobapplications/:id
@access:    Private
@tested:    Not tested
*/
const getJobApplication = asyncHandler(async (req, res) => {
  const jobApplication = await JobApplication.findById(req.params.id);

  if (jobApplication) {
    return res.status(200).json(jobApplication);
  } else {
    res.status(400);
    throw new Error("Job application not found with given id");
  }
});

/*
@desc:      Update a jobApplication
@route:     PATCH /api/jobapplications/:id
@access:    Admin
@tested:    Not tested
*/
const updateJobApplication = asyncHandler(async (req, res) => {
  const updates = req.body;
  const jobApplication = await JobApplication.findByIdAndUpdate(
    req.params.id,
    updates
  );

  if (jobApplication) {
    return res.sendStatus(200);
  } else {
    res.status(400);
    throw new Error("Job application not found with given id");
  }
});

/*
@desc:      Delete a jobApplication
@route:     DEL /api/jobapplications/:id
@access:    Private
@tested:    Not tested
*/
const deleteJobApplication = asyncHandler(async (req, res) => {
  const jobApplication = await JobApplication.findByIdAndDelete(req.params.id);

  if (jobApplication) {
    return res.sendStatus(200);
  } else {
    res.status(400);
    throw new Error("Job applicationnot found with given id");
  }
});

// Incomplete 17-FEB 23:26
const getAllApplicationsForStudent = async (studentId) => {
  try {
    const student = await Student.findById(studentId);
    if (!student) {
      return { success: false, data: "No student found with given ID" };
    }
    await student.populate("jobApplications");
    return { success: true, data: student.jobApplications };
  } catch (error) {
    return { success: false, data: error };
  }
};
// Incomplete 17-FEB 23:26
const getAllApplicationsForCompany = async (companyId) => {
  try {
    const company = await Company.findById(companyId);
    if (!company) {
      return { success: false, data: "No company found with given ID" };
    }
    await company.populate("jobOpenings");
    return { success: true, data: student.jobApplications };
  } catch (error) {
    return { success: false, data: error };
  }
};
/*
@desc:          Get all jobApplication for a student
@route:         GET /api/jobapplications
@access:        Private
@queryParams:   Get all applications for a student: 
                  ?studentid={id} :   getAllApplicationsForStudent
                  ?companyid={id} :   getAllApplicationsForCompany

@tested:        Not tested
*/

// Incomplete 17-FEB 23:26
const getJobApplicationByQuery = asyncHandler(async (req, res) => {
  const jobApplication = await JobApplication.findById(req.params.id);

  if (jobApplication) {
    return res.status(200).json(jobApplication);
  } else {
    res.status(400);
    throw new Error("Job application not found with given id");
  }
});
export {
  createJobApplication,
  getJobApplication,
  updateJobApplication,
  deleteJobApplication,
};
