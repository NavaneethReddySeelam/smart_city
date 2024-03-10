import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String,
        minlength:6
    }
})
export default mongoose.model("User",UserSchema)