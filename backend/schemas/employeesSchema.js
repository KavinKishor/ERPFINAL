const mongoose=require("mongoose")

const EmployeesSchema=new mongoose.Schema({
EmployeeFirstName:{ type:String,
        required:true},
EmployeeLastName:{ type:String,
            required:true},
FatherName:{ type:String,
        required:true},
BloodGroup:{ type:String,
        required:true},
Dateofbirth:{
    type:Date,
    required:true
 },
Emailid:{
    type:String,
    required:true
 },       
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
Salary:{
    type:Number,
    required:true
},
Dateofjoining:{
    type:Date,
    required:true
},
Dateofrelieveing:{
    type:Date,
    required:true
},
Experience:{
    type:Number,
    required:true
},
imageUrl:String   
})
const empItems=mongoose.model("employees_coll",EmployeesSchema)
module.exports={empItems}