const express = require('express')
const populardish = require('../models/popularDish')
const menu = require('../models/allDishes')

const router = express.Router()

router.get('/populardishes',async(req,res)=>{
    try{
        let success = false
        const list = await populardish.find()
        if(list){
            success = true
            res.json({"success":success,"list":list})
        }
        else{
            res.json({"success":success})
        }
    }
    catch{
        console.log("Internal server error")
    }
})

router.get('/menudishes',async(req,res)=>{
    try{
        let success = false
        const list = await menu.find()
        if(list){
            success = true
            res.json({"success":success,"list":list})
        }
        else{
            res.json({"success":success})
        }
    }
    catch{
        console.log("Internal server error")
    }
})

module.exports =  router