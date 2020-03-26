const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");
const Movies = require('./routes/Movies');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to database");
});

app.use(express.static(path.join(__dirname, '../client/build')));

app.use("/movies", Movies);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = app;