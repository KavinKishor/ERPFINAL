const asyncHandler = require("express-async-handler");
const Employee = require("../schemas/employeesSchema");

//get employee

const getemp = asyncHandler(async (req, res) => {
  const getemployees = await Employee.find({});
  res.json(getemployees);
});

//create employee
const postEmp = asyncHandler(async (req, res) => {
const {
  Experience,
  Dateofrelieveing,
  Dateofjoining,
  Salary,
  isUnMarried,
  isMarried,
  isFemale,
  isMale,
  ContactNumber,
  Address,
  EducationalQualification,
  Emailid,
  Dateofbirth,
  BloodGroup,
  FatherName,
  EmployeeLastName,
  EmployeeFirstName,
} = req.body;

const imageUrl = req.file ? req.file.filename : null;

try {
    const createnewemployeeinfo = await Employee.create({
      Experience,
      Dateofrelieveing,
      Dateofjoining,
      Salary,
      isUnMarried,
      isMarried,
      isFemale,
      isMale,
      ContactNumber,
      Address,
      EducationalQualification,
      Emailid,
      Dateofbirth,
      BloodGroup,
      FatherName,
      EmployeeLastName,
      EmployeeFirstName,
      imageUrl
    });
    await createnewemployeeinfo.save()
    res.status(200).json(createnewemployeeinfo)
} catch (error) {
    console.log(error);
    res.status(401).json(error)
    
}}); 



const putEmp = asyncHandler(async (req, res) => {

const {
  Experience,
  Dateofrelieveing,
  Dateofjoining,
  Salary,
  isUnMarried,
  isMarried,
  isFemale,
  isMale,
  ContactNumber,
  Address,
  EducationalQualification,
  Emailid,
  Dateofbirth,
  BloodGroup,
  FatherName,
  EmployeeLastName,
  EmployeeFirstName,
} = req.body;

const imageUrl = req.file ? req.file.filename : null;
try {
    const updateemployeeinfo = await Employee.findByIdAndUpdate(req.params.id, {
      Experience,
      Dateofrelieveing,
      Dateofjoining,
      Salary,
      isUnMarried,
      isMarried,
      isFemale,
      isMale,
      ContactNumber,
      Address,
      EducationalQualification,
      Emailid,
      Dateofbirth,
      BloodGroup,
      FatherName,
      EmployeeLastName,
      EmployeeFirstName,
      imageUrl
    },{new:true});
     if (!updateemployeeinfo) {
       return res.status(404).json({ message: "update error" });
     }
     res.json(updateemployeeinfo);
} catch (error) {
    console.log(error);
    res.status(401).json(error)
    
}});

const deleteEmp=async(req,res)=>{
    const deleteemployee=await Employee.findByIdAndDelete(req.params.id)
    res.json({delete:deleteemployee,msg:'deleted'})
}
module.exports = { postEmp, getemp, putEmp, deleteEmp };