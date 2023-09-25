
const mongoose = require('mongoose');
//QPUCBeU5QHZ5p6EM
// mongoose.connect('mongodb+srv://yadavv7880:UHKFpBOz6JenipfR@test-db.dd7ofmw.mongodb.net/?retryWrites=true&w=majority');
mongoose.connect('mongodb+srv://yadavv7880:QPUCBeU5QHZ5p6EM@cluster0.j7eqbyw.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connting to MongoDB"));

db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;