const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    school: String
})

module.exports = mongoose.model("Student", StudentSchema);