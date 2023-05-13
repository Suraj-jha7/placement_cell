const mongoose=require("mongoose");

//creating schema (of model,of table,of document)
const studentSchema= new mongoose.Schema({
    name:{
        type:String, 
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    college:{
        type:String,
        required:true, 
    },
    batch:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true  
    },
    company:{
        type:String,
    },
    status:{
        type:String 
    },
    interview:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Interview",
        }
    ]
},
{
    timestamps:true, //this give time of creating user
})

const Student= mongoose.model("Student",studentSchema);  // defining model setting name of model and its schema 
module.exports=Student; //exports Student model