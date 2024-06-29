const { item } = require("../schemas/studentSchema")



let postStu=async(req,res)=>{
    const stuDatas=item({
     ...req.body
 })
 const saveStu=await stuDatas.save()
 res.json(saveStu)
}

let getStu=async(req,res)=>{
    const studatas=await item.find({})
    res.json(studatas)
}

let updateStu=async(req,res)=>{
    const putStu=await item.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.json({updatated:putStu,msg:"updated successfull"})
}
let deleteStu=async(req,res)=>{
    const delData=await item.findByIdAndDelete(req.params.id)
    res.json({deleted:delData,msg:"deleted successfull"})
}
module.exports={postStu,getStu,updateStu,deleteStu}