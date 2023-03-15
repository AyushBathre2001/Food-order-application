const User = require('../models/user')
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fetchuser = require('../middleware/fetchuser')


router.post('/signup',
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
    , async (req, res) => {
        let success = false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        try {
            const {name,email,phone,password} = req.body
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password,salt)
            const user = await User.create({name,email,password:hash})
            if(user){
                success = true
                res.json({"success":success})                
            }
            else{
                res.json({"success":success})
            }
        }
        catch (error) {
            res.send("Internal server error" + error)
        }
    })


router.post('/login',
body('username').isEmail(),
body('password').isLength({min:5})
,async (req,res)=>{
    success = false
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    try{
        const{username,password} = req.body
        const user = await User.findOne({email:username})
        if(user){
            const hashPash = await bcrypt.compare(password,user.password)
            if(hashPash){
                success = true
                const data = {
                    user:user
                }
                const token = jwt.sign(data,process.env.JWT_SECRET)
                res.json({"success":success,"token":token}) 
            }
            else{
                res.json({"success":success})
            }
        }
        else{
            res.json({"success":success})
        }
    }
    catch(error){
        res.send("Internal server error" + error)
    }
})

router.post('/getuser',fetchuser,async(req,res)=>{
    try{

        const userId = req.user._id
        const user = await User.findById(userId)
        if(user){
            res.json({"success":true})
        }
        else{
            res.json({"success":false})
        }
    }
    catch(error){
        res.status(500).send("Internal server error")
    }
})

module.exports = router