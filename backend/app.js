// 07MJ9byn3RsRXx32
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/questionTemplate-routes');
const cors = require('cors');


 //middleware
app.use(express.json());
app.use(cors());
app.use("/questions",router);


mongoose.connect("mongodb+srv://admin:07MJ9byn3RsRXx32@cluster0.w2jifpb.mongodb.net/Exam-Platform?retryWrites=true&w=majority")
.then(() => console.log("Connected To Database"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));