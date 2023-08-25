const express = require("express");
const router = express.Router();
const {
  bookAppointment,
  editAppointment,
  deleteAppointment,
  getAllAppointments,
} = require("../controllers/appointments");
const verifyAdmin = require("../middleware/adminAuthentication");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,

  params: {
    folder: "appointmentUploads", // Optional: Specify a folder in Cloudinary to store the uploaded files
    // public_id: 'custom_filename', // Specify the custom filename or path here
  },
});

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './appointmentUploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now();
//       cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname )
//     }
//   })

const upload = multer({ storage: storage });

router
  .route("/bookappointment")
  .post(upload.single("petFile"),(req,res,next)=>{
    if(!req.file){
      console.log('No file uploaded');
      req.fileUrl = null;
    }
    else{
      console.log('File uploaded');
      req.fileUrl = req.file;
    }
    bookAppointment(req,res,next);
  });
router
  .route("/editappointment/:appointmentId")
  .patch(verifyAdmin, editAppointment)
  .delete(verifyAdmin, deleteAppointment);
router.route("/getappointments").get(verifyAdmin, getAllAppointments);

module.exports = router;
