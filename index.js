const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const NonTeaching = require('./models/nonteaching');

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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send('Leave Credits');
})

app.get('/nonteaching', async (req, res) => {
    const ntnames = await NonTeaching.find({});
    res.render('nonteaching', { ntnames });
})

// app.get('/addnonteaching', async (req, res) => {
//     const ntnames = new NonTeaching({ 
//         name: "Jeffel"
//     });
//     await ntnames.save();
//     res.send('Added!');
// })

app.listen(3000, () => {
    console.log('You are listening to PORT 3000');
});