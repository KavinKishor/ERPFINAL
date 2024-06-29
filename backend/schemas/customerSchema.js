const mongoose= require("mongoose")

const customerSchema=new mongoose.Schema({
    CustomerName:{
        type:String,
        required:true
    },
    CustomerAddress:{
        type:String,
        required:true
    },
    CustomerContact:{
        type:Number,
        required:true
    },
    CustomerGST:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("customer_coll",customerSchema)