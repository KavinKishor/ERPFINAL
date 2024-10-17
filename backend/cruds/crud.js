const LoginSchema = require('../schemas/Loginschema');
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const asyncHandler = require("express-async-handler");




let registerLog = asyncHandler(async (req, res) => {
  const hass = await bcrypt.hash(req.body.password, 7);
  const logData = await LoginSchema({ ...req.body, password: hass });
  const saveData = await logData.save();
  res.json(saveData);
});


let logIn = asyncHandler(async (req, res) => {
  const userEmail = await LoginSchema.findOne({ email: req.body.email });
  if (!userEmail) return res.json("Email not same");

  const match = await bcrypt.compare(req.body.password, userEmail.password);
  if (match) {
    const token = jwt.sign({ id: userEmail._id }, process.env.TOKEN, {
      expiresIn: "30d",
    });
    res.json({ Token: token, msg: "token created" });
  }
  if (!match) return res.json("password wrong");
}); 


let getAllUsers = asyncHandler(async(req,res)=>{
    const getUsers = await LoginSchema.find({})
    res.json(getUsers)
})


module.exports={registerLog,logIn,getAllUsers}