const express = require('express')
const { protect } = require('../productRoute')
const { getStu, createstudent, updateStu, deleteStu } = require('../cruds/crud_students')
const multer = require("multer");
const router = express.Router()
const path = require("path");

const mystr = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../../frontend/src/imgs"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: mystr });

router.route('/getstudentsinfo').get(protect,getStu)
router
  .route("/createstudentinfo")
  .post(protect,upload.single("image"), createstudent);
router.route('/updatestudentinfo/:id').put(protect,upload.single('image'),updateStu)
router.route('/deletestudentinfo/:id').delete(protect,deleteStu)

module.exports = router