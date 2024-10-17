const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  StudentFirstName: { type: String, required: true },
  StudentLastName: { type: String, required: true },
  FatherName: { type: String, required: true },
  BloodGroup: { type: String, required: true },
  EducationalQualification: { type: String, required: true },
  Address: { type: String, required: true },
  ContactNumber: { type: Number, required: true },
  TotalMarks: { type: Number, required: true },
  FeePaid: { type: Number, required: true },
  // Optional fields
  isMale: { type: Boolean, default: false },
  isFemale: { type: Boolean, default: false },
  isMarried: { type: Boolean, default: false },
  isUnMarried: { type: Boolean, default: false },
  EducationInsititute: { type: String },
  GraduationDate: { type: Date },
  InsitituteOFStudied: { type: String },
  GraduatedDate: { type: String },
  result: { type: Number },
  totalfee: { type: Number },
  imageUrl: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});

const Students = mongoose.model("students_collection", studentSchema);
module.exports = Students;
