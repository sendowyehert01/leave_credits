const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NonTeachingSchema = new Schema({
    // lastname: String,
    // firstname: String,
    // middlename: String,
    // suffix: String
    name: {
        type: String
    },
    data: [{
        type: Schema.Types.ObjectId,
        ref:  'NonTeachingData'
    }]
});

module.exports = mongoose.model('NonTeaching', NonTeachingSchema);