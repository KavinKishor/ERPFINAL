const express = require("express");
const { registerLog, logIn, getAllUsers } = require("../cruds/crud");

const{protect}= require("../productRoute");

const router = express.Router();
// new router - auth

router.post("/register", registerLog);
router.post("/login", logIn);
router.route("/").get(protect,getAllUsers);

module.exports = router;
