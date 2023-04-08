const express = require('express');
const router = express.Router();
const videoController=require('../controller/videoUpload')
//const upload=require('../middleware/upload')
const multer = require("multer");
const fs = require("fs");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }

    if (!fs.existsSync("public/videos")) {
      fs.mkdirSync("public/videos");
    }

    cb(null, "public/videos");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname +"-"+Math.round(Math.random() * 1E9));
  },
});

const upload = multer({
  storage: storage,
});


router.get('/all',videoController.getAll)
router.post('/create',upload.fields([
    {
      name: "videos",
      maxCount: 10,
    },
  ]),videoController.create)




module.exports=router