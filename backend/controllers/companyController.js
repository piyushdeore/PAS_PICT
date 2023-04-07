// AsyncHandler handles express async code without need to use the try catch method
import asyncHandler from "express-async-handler";
import Company from "../models/companyModel.js";

/*
@desc:      Create a company
@route:     POST /api/company/
@access:    Admin
@tested:    Not tested
*/
const createCompany = asyncHandler(async (req, res) => {
  const company = await Company.create(req.body);

  if (company) {
    return res.status(201).json(company._id);
  }
});

/*
@desc:      Get a company
@route:     GET /api/companies/:id
@access:    Private
@tested:    Not tested
*/
const getCompany = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id);

  if (company) {
    return res.status(200).json(company);
  } else {
    res.status(400);
    throw new Error("Company not found with given id");
  }
});

/*
  @desc:      Update a company
  @route:     PATCH /api/companies/:id
  @access:    Admin
  @tested:    Not tested
  */
const updateCompany = asyncHandler(async (req, res) => {
  const updates = req.body;
  const company = await Company.findByIdAndUpdate(req.params.id, updates);

  if (company) {
    return res.sendStatus(200);
  } else {
    res.status(400);
    throw new Error("Company not found with given id");
  }
});

/*
  @desc:      Delete a company
  @route:     DEL /api/companies/:id
  @access:    Admin
  @tested:    Not tested
  */
const deleteCompany = asyncHandler(async (req, res) => {
  const company = await Company.findByIdAndDelete(req.params.id);

  if (company) {
    return res.sendStatus(200);
  } else {
    res.status(400);
    throw new Error("Company not found with given id");
  }
});
export { createCompany, getCompany, updateCompany, deleteCompany };
