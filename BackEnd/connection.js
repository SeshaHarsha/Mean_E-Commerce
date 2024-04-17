const mongoose = require('mongoose')
require('dotenv').config()
const connection = mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME
}).then(()=>{
    console.log("connected")
}).catch(()=>{
    console.log("connection Fail")
})

module.exports = connection