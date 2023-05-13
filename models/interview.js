const mongoose=require("mongoose");

//creating schema (of model,of table,of document)
const interviewSchema= new mongoose.Schema({
    student:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
    }],
    company:{
        type:String,
        required:true, 
    },
    address:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true  
    },
    profile:{
        type:String,
    },
},
{
    timestamps:true, //this give time of creating user
})

const Interview= mongoose.model("Interview",interviewSchema);  // defining model setting name of model and its schema 
module.exports=Interview; //exports Student model