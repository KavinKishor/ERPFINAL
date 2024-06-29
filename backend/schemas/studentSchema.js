const mongoose=require("mongoose")

const studentSchema= new mongoose.Schema({
    StudentFirstName:{ type:String,
                        required:true},
    StudentLastName:{ type:String,
                            required:true},
    FatherName:{ type:String,
                        required:true},
    BloodGroup:{ type:String,
                        required:true},
    EducationalQualification:{
      type:String,
      required:true
    },                    
    Address:{ type:String,
                        required:true},
    ContactNumber:{ type:Number,
                        required:true},
    isMale: { type: Boolean,
                 default: false},
    isFemale: { type: Boolean,
                default: false},
    isMarried: { type: Boolean,
                default: false},
    isUnMarried: { type: Boolean,
                 default: false},                                
    EducationInsititute:{ type:String,
                       },
    GraduationDate:{ type:Date,
                       },
    TotalMarks:{ type:Number,
                       required:true},
    InsitituteOFStudied:{ type:String,
                },
    GraduatedDate:{ type:String,
                   }, 
     FeePaid:{ type:Number,
                    required:true},
     result:{
        type:Number,
     },
     totalfee:{
        type:Number
     },
     imageUrl:String
})
const item=mongoose.model("stuents_collection",studentSchema)
module.exports={item}