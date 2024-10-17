const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const { protect } = require("../productRoute");
const { getemp, postEmp, putEmp, deleteEmp } = require("../cruds/crud_employees");

const mystr = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../../frontend/src/imgs"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: mystr });

router.route("/").get(protect, getemp);
router.route('/createnewemployeinfo').post(protect,upload.single('image'),postEmp)
router
  .route("/updateemployeeinfo/:id")
  .put(protect, upload.single("image"), putEmp);
router.route('/deleteemployeeinfo/:id').delete(protect,deleteEmp)
module.exports = router;
