const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    order:{
        type:Array,
        default:[]
    },
    total:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('order',orderSchema)