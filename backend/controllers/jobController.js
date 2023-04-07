// AsyncHandler handles express async code without need to use the try catch method
import asyncHandler from "express-async-handler";
import Company from "../models/companyModel.js";
import Job from "../models/jobModel.js";

/*
@desc:      Create a job
@route:     POST /api/jobs/
@access:    Admin
@tested:    Not tested
*/
const createJob = asyncHandler(async (req, res) => {
  // const companyExists = await Company.findOne({ name: req.body.company });
  // if (!companyExists) {
  //   res.status(400);
  //   throw new Error("Given company does not exist! Register the company first");
  // }
  const body = req.body;
  console.log("back", body);
  const job = await Job.create(body);

  if (job) {
    return res.sendStatus(201);
  } else {
  }
});

/*
@desc:      Get a job
@route:     GET /api/jobs/:id
@access:    Private
@tested:    Not tested
*/
const getJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  await Job.populate(job, { path: "company" });

  if (job) {
    return res.status(200).json(job);
  } else {
    res.status(400);
    throw new Error("Job not found with given id");
  }
});

/*
@desc:      Update a job
@route:     PATCH /api/jobs/:id
@access:    Admin
@tested:    Not tested
*/
const updateJob = asyncHandler(async (req, res) => {
  const updates = req.body;
  const job = await Job.findByIdAndUpdate(req.params.id, updates);

  if (job) {
    return res.sendStatus(200);
  } else {
    res.status(400);
    throw new Error("Job not found with given id");
  }
});

/*
@desc:      Delete a job
@route:     DEL /api/jobs/:id
@access:    Admin
@tested:    Not tested
*/
const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);

  if (job) {
    return res.sendStatus(200);
  } else {
    res.status(400);
    throw new Error("Job not found with given id");
  }
});

/*
@desc:      Get all jobs
@route:     GET /api/jobs/
@access:    Private
@tested:    Not tested
*/
const getJobs = asyncHandler(async (req, res) => {
  const activeJobs = req.query.active;
  let filter = {};

  // Filter for active jobs
  if (activeJobs) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    filter = {
      testDay: { $gte: today },
    };
  }
  const jobs = await Job.find(filter);
  await Job.populate(jobs, { path: "company" });

  if (jobs) {
    return res.status(200).json(jobs);
  } else {
    res.status(400);
    throw new Error("No jobs exist in collection");
  }
});

export { createJob, getJob, updateJob, deleteJob, getJobs };
