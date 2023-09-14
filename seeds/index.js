const mongoose = require('mongoose');
const NonTeaching = require('../models/nonteaching');
const names = require('./names')

mongoose.connect('mongodb://127.0.0.1:27017/NonTeachingDB', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database Connected!');
});


const seedDB = async () => {
    await NonTeaching.deleteMany({});
    for (var i = 0; i < names.length; i++) {
        const camp = new NonTeaching(names[i])
        await camp.save();
    }
  };

seedDB().then(() => {
    mongoose.connection.close();
  });