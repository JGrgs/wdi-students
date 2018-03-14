mongoose = require('mongoose')
studentSchema =new mongoose.Schema({
    name: String,
    enrolledStatus: Boolean,
    course: String,
    phone: String
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student
