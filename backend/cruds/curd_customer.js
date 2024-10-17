const Customer = require('../schemas/customerSchema')
const asyncHandler = require("express-async-handler");

const getCustomer = asyncHandler(async (req, res) => {
  const finds = await Customer.find({});
  res.json(finds);
});

const PostCus = asyncHandler(async (req, res) => {
  const createCus = await Customer({ ...req.body });
  const saveCus = await createCus.save();
  res.json(saveCus);
}); 

const updateCus = asyncHandler(async (req, res) => {
  const putCus = await Customer.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.json({ putData: putCus, msg: "updated" });
}); 

const delCus = asyncHandler(async (req, res) => {
  const deleteCust = await Customer.findByIdAndDelete(req.params.id);
  res.json({ deleteData: deleteCust, msg: "Deleted" });
}); 
module.exports={getCustomer,PostCus,updateCus,delCus}