import multer from "multer";
import * as fs from "fs-extra";

export const resumeUploader = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const path = "./uploads/resume/";
      fs.mkdirsSync(path);
      cb(null, path);
    },
    filename: function (req, file, cb) {
      cb(
        null,
        `${req.student.collegeRegistrationNumber}_${req.student.name.firstName}_resume.pdf`
      );
    },
  }),
  limits: {
    fieldSize: 1024 * 1024,
  },
  fileFilter: function (req, file, cb) {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      return cb(new Error("Please upload a pdf"));
    }
  },
});
