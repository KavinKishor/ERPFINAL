const customerSchema=require("../schemas/customerSchema.js")

const getCustomer=async(req,res)=>{
    const finds=await customerSchema.find({})
    res.json(finds)
}


const PostCus=async(req,res)=>{
    const createCus=await customerSchema({...req.body})
    const saveCus=await createCus.save()
    res.json(saveCus)
}

const updateCus=async(req,res)=>{
    const putCus=await customerSchema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.json({putData:putCus,msg:"updated"})
}

const delCus=async(req,res)=>{
    const deleteCust=await customerSchema.findByIdAndDelete(req.params.id)
    res.json({deleteData:deleteCust,msg:"Deleted"})
}
module.exports={getCustomer,PostCus,updateCus,delCus}