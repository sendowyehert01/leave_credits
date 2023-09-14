const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NonTeachingSchema = new Schema({
    name: {
        type: String
    }
});

module.exports = mongoose.model('NonTeaching', NonTeachingSchema);