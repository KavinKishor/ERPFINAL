const EmployeesSchema=require("../schemas/employeesSchema")
const {empItems}=require("../schemas/employeesSchema")

const postEmp=async(req,res)=>{
    const createEmployee=EmployeesSchema({...req.body})
    const saveemployee=await createEmployee.save()
    res.json({create:saveemployee,msg:"employee record created"})
}

const getEpm=async(req,res)=>{
    const getemployees= await empItems.find({})
    res.json(getemployees)
}

const putEmp=async(req,res)=>{
    const updateemployee=await empItems.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    
    res.json(updateemployee)
}

const deleteEmp=async(req,res)=>{
    const deleteemployee=await empItems.findByIdAndDelete(req.params.id)
    res.json({delete:deleteemployee,msg:'deleted'})
}
module.exports={postEmp,getEpm,putEmp,deleteEmp}