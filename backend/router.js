const express=require("express")
const { registerLog, logIn} = require("./cruds/crud")
const { getStu, updateStu, deleteStu } = require("./cruds/crud_students")
const { PostCus, getCustomer, updateCus, delCus } = require("./cruds/curd_customer")
const {item} =require("./schemas/studentSchema")
const productRoute =require('./productRoute')



const router=express.Router()
//multer
const multer=require("multer")
const { getEpm, putEmp, deleteEmp } = require("./cruds/crud_employees")
const {empItems} = require("./schemas/employeesSchema")
const Loginschema = require("./schemas/Loginschema")

const mystr =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "../frontend/src/imgs")
    },
    filename: (req, file, cb)=> {
        cb(null, file.originalname)
    }

})
const upload =multer({storage:mystr})
//Auth
router.post("/register",registerLog)
router.post("/login",logIn)

router.get('/user', productRoute, async (req, res) => {
    try {
      const user = await Loginschema.findById(req.userEmail).select('-password');
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

//student

router.post("/create_students",upload.single("image"),async(req,res)=>{
    try{
        const {totalfee,result,FeePaid,GraduatedDate,InsitituteOFStudied,TotalMarks,GraduationDate,EducationInsititute,isUnMarried,isMarried,isFemale,isMale,ContactNumber,Address,EducationalQualification,BloodGroup,FatherName,StudentLastName,StudentFirstName}=req.body
        const imageUrl= req.file ? req.file.filename : null;

        const newItem= new item({totalfee,result,FeePaid,GraduatedDate,InsitituteOFStudied,TotalMarks,GraduationDate,EducationInsititute,isUnMarried,isMarried,isFemale,isMale,ContactNumber,Address,EducationalQualification,BloodGroup,FatherName,StudentLastName,StudentFirstName,imageUrl})
        await newItem.save()
        res.status(201).json(newItem)
    }catch(error){
     res.status(500)
    } 
})
router.get("/getstudents_info",getStu) 
router.put("/updatestudent_info/:id",updateStu)
router.delete("/deletestudent_info/:id",deleteStu)


//customer
router.post("/create_customer",PostCus)
router.get("/getcustomer_info",getCustomer)

router.put("/updatacustomer_info/:id",updateCus)
router.delete("/deletecustomer_info/:id",delCus)

//employee


router.post("/createemployee_info",upload.single("image"), async(req,res)=>{
    try{
const {Experience,Dateofrelieveing,Dateofjoining,Salary,isUnMarried,isMarried,isFemale,isMale,ContactNumber,Address,EducationalQualification,Emailid,Dateofbirth,BloodGroup,FatherName,EmployeeLastName,EmployeeFirstName}=req.body

const imageUrl= req.file ? req.file.filename : null;
const empnewItem= new empItems({Experience,Dateofrelieveing,Dateofjoining,Salary,isUnMarried,isMarried,isFemale,isMale,ContactNumber,Address,EducationalQualification,Emailid,Dateofbirth,BloodGroup,FatherName,EmployeeLastName,EmployeeFirstName,imageUrl})
await empnewItem.save()
        res.status(201).json(empnewItem)
    }catch(error){
        res.status(500)
    }
})

router.get("/getemployee_info",getEpm)
router.put("/updateemployee_info/:id",putEmp)
router.delete("/deleteemployee_info/:id",deleteEmp)

module.exports=router
