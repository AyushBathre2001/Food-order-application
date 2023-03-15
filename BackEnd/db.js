const mongoose = require('mongoose')

mongoose.set('strictQuery',true)
const dbConnect = ()=>{
    mongoose.connect(process.env.URI).then(()=>{
        console.log("connected")
    }).catch(()=>{
        console.log("Not connected")
    })
}

module.exports = dbConnect