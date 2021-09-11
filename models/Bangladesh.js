const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BangladeshSchema = new Schema({
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
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Bangladesh = mongoose.model('bangladesh', BangladeshSchema);