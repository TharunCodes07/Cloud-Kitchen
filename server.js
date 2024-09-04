const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');

app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const sellRouter = require('./routes/sell');
const menuRouter = require('./routes/menu');

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => { console.log(error) });
db.once('open', () => { console.log("Connected to Database"); });

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/sell', sellRouter);
app.use('/menu', menuRouter);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
