const express = require("express")
const app = express()
const mongoose = require("mongoose")
const logger = require("morgan")
const bodyParser = require("body-parser")
const Student = require("./models/Student.js")
const PORT = 3000

mongoose.connect("mongodb://localhost/wdi-students", (err) =>{
    console.log(err || "Connected to MONGO!!")
})

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(express.static(`__dirname()/public`))

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.get("/api/students", (req, res) => {
    Student.find({}, (err, allDemStudents) => {
        if(err) return console.log(err)
        res.json(allDemStudents)
    })
})

app.get("api/students/:id", (req, res) => {
    
})

app.listen(PORT, (err) => {
    console.log(err || `Listening on server ${PORT}`)
})