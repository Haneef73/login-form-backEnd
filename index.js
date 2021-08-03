//thirdparty Module
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const infoRouter = require('./router');
const morgan = require('morgan');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://test:test@mycluster.oairq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//Middleware
app.use(morgan('dev'));
app.use(express.json())
app.use(cors());
app.use("/info", infoRouter);

app.listen(3001, () => {
    console.log('Server Started on 3001');
})

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log('Oops..! , database is not connected');
    }
    if (!err) {
        console.log('database connected');
    }
})