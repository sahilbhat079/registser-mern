const express = require('express')
const app = express()

const mongoose=require('mongoose');
const cors =require('cors')
const Employemodel =require('./models/Employe')
app.use(express.json())
app.use(cors(
{
origin:[""],
methods:["POST","GET"],
credentials:true
} ))


mongoose.connect("mongodb+srv://stephenjames079:leOOpIp4pYWQHd0i@cluster0.swsrryq.mongodb.net/register?retryWrites=true&w=majority")
.then(()=>console.log('connected to the database'))
.catch((err)=>
console.log(err))

app.get("/",(req,res)=>{
res.send("hello world");
});


app.post('/login',(req,res)=>{
    const {email,password} = req.body;
   Employemodel.findOne({email:email}).then((user)=>{
    if(user){
        if(user.password===password){
            res.json('success');

        }
        else{
            res.json('password is not correct');
        }
    }else{
        res.jsom("no such user")
    }
   }).catch(err=>res.json(err)); 
})


app.post('/register',(req,res)=>{
   Employemodel.create(req.body)
   .then((employe)=>res.json(employe))
   .catch((err)=>res.json(err))
});

app.listen(3000,()=>{console.log("server is running")});