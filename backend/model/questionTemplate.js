const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema({
    Question: {
        type: String,
        required: true
    },
    Answer: {
        type: String,
        required: true
    }
})
 module.exports = mongoose.model("Questions", templateSchema);