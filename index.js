const express = require('express');
const port = 8000;
const app = express();

const db = require('./config/mongoose');
const Student = require('./model/Student');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>Find the Data<h1>");
});

// Create Student Details...

app.post('/add-details', async (req, res) => {
    let details = new Student(req.body);
    let result = await details.save();
    res.send(result);
});

// Read Details for Student

app.get('/find-details', async (req, res) => {
    let details = await Student.find();
    if (details.length > 0) {
        res.send(details)
    } else {
        res.send({ details: "No Product found" })
    }
});

// Delete Details for Student

app.delete('/delete-details/:id', async (req, res) => {
    const result = await Student.deleteOne({ _id: req.params.id })
    res.send(result);
});

// Find one Details for student

app.get('/single-details/:id', async (req, res) => {
    let result = await Student.findOne({ _id: req.params.id });
    if (result) {
        res.send(result)
    } else {
        res.send({ result: "No Result Found.." })
    }
})

// Update Details for student

app.put('/update-details/:id', async (req, res) => {
    let result = await Student.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send(result)
});




app.listen(port, function (err) {
    if (err) {
        console.log("My Server in not running ", err);
    }
    console.log("My Server is running on the port ", port);
})