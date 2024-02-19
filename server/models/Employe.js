const mongoose =require('mongoose')


const EmployeSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})



const Employemodel=mongoose.model("signup",EmployeSchema);

module.exports=Employemodel;