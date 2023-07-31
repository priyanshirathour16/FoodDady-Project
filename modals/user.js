const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate(val){
            if( !validator.isEmail(val)){
                throw new Error("email is wrong") ;
            }
        }
    },
    number:{
        type:Number,
        require:true,
        unique:true,
    },

    location : {
        type:String,
        require:true
    },

    password : {
        type:String,
        require:true,
        min:5
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const userModel = new mongoose.model("userdb" , userSchema);


module.exports= userModel;