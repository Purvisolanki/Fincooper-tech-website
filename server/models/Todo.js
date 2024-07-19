const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxLength:50,
        },
        email: {
            type:String,
            required:true,
            maxLength:50,
        },
        number: {
            type:Number,
            required:true,
            maxLength:50,
        },
        
        company: {
            type:String,
            required:true,
            maxLength:50,
        },
        message: {
            type:String,
            required:true,
            maxLength:50,
        },
        reference: {
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Todo", todoSchema);