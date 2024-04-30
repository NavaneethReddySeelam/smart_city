import Express  from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./model/authmodel.js"

const app = Express()
app.use(cors())
app.use(Express.json())
mongoose.connect("mongodb+srv://NikileshReddyT:Nikki%402005@cluster0.en4mm4h.mongodb.net/sdp")

app.post("/signup",async(req,res)=>{
    const {name,email,password} = req.body
    const result = await User.findOne({email})
    if(result){
        res.json({message:"User already exist"})
    }
    else{
        const data = await User.create({name,email,password})
        res.json({message:"User created succesfully",data:result})
    }
})

app.post("/login",async(req,res)=>{
    const {email,password} = req.body
    const data = await User.findOne({email})
    if(!data){
        res.json({message:"Incorrect Email"})
    }
    else{
        if(data.password === password){
            res.json({message:"User Logged in succesfully"})

        }
        else{
            res.json({message:"Incorrect Password"})
        }
    }
})

app.listen(8080,(
    console.log(`server running at http://localhost:8080`)
))
