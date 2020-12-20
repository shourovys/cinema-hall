const mongoose = require('mongoose');

const { Schema } = mongoose;

const CinemaSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        set: [ Object ],
        
        
    },
    { timestamps: true }
);

const Cinema = mongoose.model('Cinema', CinemaSchema);

module.exports = Cinema;