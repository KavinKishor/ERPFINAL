const Students  = require("../schemas/studentSchema");
const asyncHandler = require("express-async-handler");


//get
let getStu = asyncHandler(async (req, res) => {
  const studatas = await Students.find({});
  if (!studatas) return console.log("no student data found");

  res.status(200).json(studatas);
}); 

//post
const createstudent = asyncHandler(async (req, res) => {
    console.log(req.body);

  const {
    totalfee,
    result,
    FeePaid,
    GraduatedDate,
    InsitituteOFStudied,
    TotalMarks,
    GraduationDate,
    EducationInsititute,
    isUnMarried,
    isMarried,
    isFemale,
    isMale,
    ContactNumber,
    Address,
    EducationalQualification,
    BloodGroup,
    FatherName,
    StudentLastName,
    StudentFirstName,
  } = req.body;

  const imageUrl = req.file ? req.file.filename : null;

  try {
    const newStudentsinfo = await Students.create({
      totalfee,
      result,
      FeePaid,
      GraduatedDate,
      InsitituteOFStudied,
      TotalMarks,
      GraduationDate,
      EducationInsititute,
      isUnMarried,
      isMarried,
      isFemale,
      isMale,
      ContactNumber,
      Address,
      EducationalQualification,
      BloodGroup,
      FatherName,
      StudentLastName,
      StudentFirstName,
      imageUrl,
    });

    res.status(201).json(newStudentsinfo);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Student creation failed", error });
  }
});

//update

let updateStu = asyncHandler(async (req, res) => {

 const {
   totalfee,
   result,
   FeePaid,
   GraduatedDate,
   InsitituteOFStudied,
   TotalMarks,
   GraduationDate,
   EducationInsititute,
   isUnMarried,
   isMarried,
   isFemale,
   isMale,
   ContactNumber,
   Address,
   EducationalQualification,
   BloodGroup,
   FatherName,
   StudentLastName,
   StudentFirstName,
 } = req.body;

 const imageUrl = req.file ? req.file.filename : null;


try {
    const updatestudentinfo = await Students.findByIdAndUpdate(
      req.params.id,
      {
        totalfee,
        result,
        FeePaid,
        GraduatedDate,
        InsitituteOFStudied,
        TotalMarks,
        GraduationDate,
        EducationInsititute,
        isUnMarried,
        isMarried,
        isFemale,
        isMale,
        ContactNumber,
        Address,
        EducationalQualification,
        BloodGroup,
        FatherName,
        StudentLastName,
        StudentFirstName,
        imageUrl,
      },
      { new: true }
    )
    if (!updatestudentinfo) {
      return res.status(404).json({ message: "update error" });
    }
    res.json(updatestudentinfo);
} catch (error) {
    console.log(error);
    res.status(401).json(error)
    
}
});

//delete
let deleteStu = asyncHandler(async (req, res) => {
  const delData = await Students.findByIdAndDelete(req.params.id);
  res.json({ deleted: delData, msg: "deleted successfull" });
});
module.exports = { createstudent, getStu, updateStu, deleteStu };