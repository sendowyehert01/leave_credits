const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const NonTeaching = require('./models/nonteaching');
const methodOverride = require('method-override');

mongoose.connect('mongodb://127.0.0.1:27017/NonTeachingDBTest', {
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
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send('Leave Credits');
})

app.get('/nonteaching', async (req, res) => {
    const ntnames = await NonTeaching.find({});
    res.render('nonteaching', { ntnames });
})

app.get('/addnonteaching', (req, res) => {
    res.render('Add Name');
})

app.post('/nonteaching', async (req, res) => {
    const ntnames = new NonTeaching(req.body);
    await ntnames.save();
    res.redirect('/nonteaching');
})

app.get('/nonteaching/:id', async (req, res) => {
    const ntnames = await NonTeaching.findById(req.params.id);
    res.render('vl_data', { ntnames });
})

app.get('/nonteaching/:id/edit', async (req, res) => {
    const ntnames = await NonTeaching.findById(req.params.id);
    res.render('Edit Name', { ntnames });
})

app.put('/nonteaching/:id', async (req, res) => {
    const { id } = req.params;
    const ntnames = await NonTeaching.findByIdAndUpdate(id , { ...req.body });
    res.redirect(`/nonteaching/${ntnames._id}`);
})

app.delete('/nonteaching/:id', async (req, res) => {
    const { id } = req.params;
    await NonTeaching.findByIdAndDelete(id);
    res.redirect('/nonteaching');
})

app.listen(3000, () => {
    console.log('You are listening to PORT 3000');
});