const express = require("express");
const { protect } = require("../productRoute");
const {
  getCustomer,
  PostCus,
  updateCus,
  delCus,
} = require("../cruds/curd_customer");

const router = express.Router();

router.route("/").get(protect, getCustomer);
router.route("/createnewcustomer").post(protect, PostCus);
router.route("/updatecustomerinfo/:id").put(protect, updateCus);
router.route("/deletecustomerinfo/:id").delete(protect, delCus);
module.exports = router;
