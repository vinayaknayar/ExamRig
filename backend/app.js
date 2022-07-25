// 07MJ9byn3RsRXx32
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/questionTemplate-routes');
const cors = require('cors');

const { MONGODB_URL: mongoDBURL } = process.env;

 //middleware
app.use(express.json());
app.use(cors());
app.use("/questions",router);


mongoose.connect(mongoDBURL)
.then(() => console.log("Connected To Database"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));