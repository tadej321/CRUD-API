const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to DB
mongoose.connect('mongodb://localhost/computerstore', {useNewUrlParser: true, useFindAndModify: false});
mongoose.Promise = global.Promise;
const db = mongoose.connection;

app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(404).json({status: 404, error: "no product of this id"});
});


app.get('*', function (req, res) {
    res.json({status: 404, msg: "page not found, please refer to /api/products"});
});

app.listen(3000);
console.log("listening to port 3000");
