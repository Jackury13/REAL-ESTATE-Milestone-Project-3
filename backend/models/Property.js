const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    currentOwner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        min: 6
    },
    type: {
        type: String,
        enum: ['beach', 'montain', 'village'],
        required: true
    },
    desc: {
        type: String,
        required: true,
        min: 50
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sqft: {
        type: Number,
        required: true
    },
    continent: {
        type: String,
        required: true
    },
    beds: {
        type: Number,
        required: true,
        min: 1
    },
    bookmarkedUsers: {
        type: [String],
        default: []
    }
}, { timestamps: true })

module.exports = mongoose.model('Property', PropertySchema)
