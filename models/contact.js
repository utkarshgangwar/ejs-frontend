const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    emailId: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now,
    }
})
module.exports = mongoose.model('Contact', contactSchema);