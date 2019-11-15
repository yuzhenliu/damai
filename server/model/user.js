const mongoose = require('mongoose');

const User = mongoose.model("user", new mongoose.Schema({
    tel: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}))