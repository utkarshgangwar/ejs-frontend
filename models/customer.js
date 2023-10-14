const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    createDate: {
        type: Date,
        // required: true,
        default: Date.now,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    room: {
        type: String,
    },
    adult: {
        type: String,
    },
    childrenb: {
        type: String,
    },
    childrenAge:{
        type: Object
    },
    checkIn: {
        type: Date,
        // required: true,
        default: Date.now,
    },
    checkOut: {
        type: Date,
        // required: true,
        default: Date.now,
    }
})

module.exports = mongoose.model('Booking', bookingSchema);