const mongoose=require("mongoose")
const express=require("express")
const dotenv=require("dotenv")
const cors=require("cors")
const multer=require("multer")
const cookieParser = require("cookie-parser");

const router = require("./router")
const app=express()
dotenv.config()

app.listen(process.env.PORT,()=>console.log(`server is connected:${process.env.PORT}`))
mongoose.connect(process.env.DB).then(()=>console.log("DB connected")).catch(()=>console.log("DB not connected"))
app.use(cors())
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use("/api",router)



// const mystorage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"./images")
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// })
// const upload=multer({storage:mystorage})



// const empImageschema=new mongoose.Schema({
//     imageUrl:String
// })
// const EmployeeImgSchema=mongoose.model("employeeImg_coll",empImageschema)

// app.post("/postemp_imgs",upload.single('image'),async (req,res)=>{
//     try {
//         const imageUrl = req.file ? req.file.filename: null;
//         const newImg=new EmployeeImgSchema({imageUrl}) 
//         await newImg.save()
//         res.json("file created")
//     } catch (error) {
//         res.json(error)
//     }
// })

// app.put("/updateemp_imgs",upload.single('image'),async(req,res)=>{
//     try {
//         const imgUrl=req.file?req.file.filename:null
//         const updateImg=await EmployeeImgSchema.findByIdAndUpdate(req.params.id,{imgUrl},{new:true})
//         res.json({update:updateImg,msg:"image updated"})
//     } catch (error) {
//         res.json(error)
//     }
// })

// app.delete("/deleteemp_img/:id",async(req,res)=>{
//     const deleteempimg=await EmployeeImgSchema.findByIdAndDelete(req.params.id)
//     res.json({delete:deleteempimg,msg:"deleted"})
// })
// app.get("/getemp_imgs",async(req,res)=>{
//     const findImg=await EmployeeImgSchema.find()
//     res.json(findImg)
// })

