const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
    },
    Email: {
        type: String,
        required: true,
        trim: true,
    },
    Password: {
        type: String,
        required: true,
    },
    CreatedTime: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model("Info", userSchema);