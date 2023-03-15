const populardish = require('../models/popularDish')
const menu = require('../models/allDishes')
const express = require('express')

const router = express.Router()

router.post('/popular/dishes',async(req,res)=>{
    try {
        const {name,desc,price,img} = req.body
        const dish = await populardish.create({name,desc,price,img})
        res.json(dish)
    } catch (error) {
        res.json({"error":error})
    }
})

router.post('/all/dishes',async(req,res)=>{
    try{
        const {name,desc,price,img} = req.body
        const dish = await menu.create({name,desc,price,img})
        res.json(dish)

    }
    catch(error){
        res.json({"error":error})
    }
})



module.exports = router

