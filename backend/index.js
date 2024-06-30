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



