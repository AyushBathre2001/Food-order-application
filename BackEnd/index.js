require('dotenv').config()
const dbConnect = require('./db')
dbConnect()
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/insert',require('./routes/createDishes'))
app.use('/fetch',require('./routes/fetchDishes'))
app.use('/auth',require('./routes/authentication'))
app.use('/customer',require('./routes/manageOrders'))

app.listen(process.env.PORT, () => {
    console.log("Server is running")
})