const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TopNewsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    img: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = TopNews = mongoose.model('topNews', TopNewsSchema);