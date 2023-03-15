const Order = require('../models/orders')
const express = require('express')
const fetchuser = require('../middleware/fetchuser')
const sendConfirmation = require('../mailController/sendConfirmation')
const User = require('../models/user')
const router = express.Router()

router.post('/confirm/order',fetchuser,async(req,res)=>{
    let success = false
    const userId = req.user._id
    const userEmail = req.user.email
    const user = await User.findById(userId)
    if(user){
        try {
            const {name,phone,address,order,total} = req.body
            const odr = await Order.create({name,phone,address,order,total})
            if(odr){
                success = true
                sendConfirmation(userEmail)
                res.json({"success":success,"order":odr})
            } 
            else{
                res.json({"success":success,"msg":"please authenticate using a valid token"})
            }
        } catch (error) {
            res.status(500).send("Internal server error" + error)
        }
    }
})

module.exports = router