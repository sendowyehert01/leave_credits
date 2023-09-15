const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NonTeachingDataSchema = new Schema({
    from: Date,
    to: Date,
    abswpay: Number,
    abswopay: Number
});

module.exports = mongoose.model('NonTeachingData', NonTeachingDataSchema);