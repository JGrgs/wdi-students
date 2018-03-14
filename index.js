const express = require("express")
const app = express()
const mongoose = require("mongoose")
const logger = require("morgan")
const bodyParser = require("body-parser")
const PORT = 3000

mongoose.connect("mongodb://localhost/wdi-students", (err) =>{
    console.lo(err || "Connected to MONGO!!")
})

app.listen(PORT, (err) => {
    console.log(err || `Listening on server ${PORT}`)
})