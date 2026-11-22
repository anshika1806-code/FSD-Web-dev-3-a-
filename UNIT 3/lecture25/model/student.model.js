const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const studentsSchema=new Schema({
    rollno:{
        type:Number,
        requied:true
    },
     name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    course:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("students",studentsSchema)