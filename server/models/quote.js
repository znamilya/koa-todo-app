'use strict';

let mongoose = require('mongoose');


let schema = new mongoose.Schema({
    text: {
        type: String,
        required: 'Отсутствует текст цитаты'
    },

    author: {
        type: String,
        default: 'unknown'
    },

    source: {
        type: String,
        default: 'unknown'
    },

    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Quote', schema);

