const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authrouter = require("./Router/router");
const sturouter = require("./Router/studentRouter")
const emprouter = require("./Router/employeeRouter")
const cusrouter = require("./Router/customerRouter");
const app = express();
dotenv.config();

app.listen(process.env.PORT, () =>
  console.log(`server is connected:${process.env.PORT}`)
);
mongoose
  .connect(process.env.DB)
  .then(() => console.log("DB connected"))
  .catch(() => console.log("DB not connected"));
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/auth", authrouter);
app.use("/api/students",sturouter);
app.use("/api/employees", emprouter);
app.use("/api/customers", cusrouter);