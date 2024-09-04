const express = require('express');
const router = express.Router();
const User = require('../model/userClass.js');
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);

const store = new MongoDBSession({
    uri: 'mongodb://localhost:27017/sessions',
    collection: "mySessions",
});

router.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false,
    store: store,
}));

router.get('/', (req, res) => {
    res.render('../views/user/login', { user: req.session.user });
});

router.get('/new', (req, res) => {
    res.render('../views/user/new', { user: req.session.user });
});

router.post('/submit', async (req, res) => {
    console.log('Login request:', req.body);
    const user = await User.getUser(req.body.email_id, req.body.password);

    if (user.status === 'correct password') {
        req.session.isAuth = true;
        req.session.user = {
            username: user.username,
            email_id: user.email_id,
            address: user.address
        };
        req.session.save();
        console.log('Logged in user:', req.session.user);
        res.redirect(301, '/menu');
        return;
    } else if (user.status === 'wrong password') {
        res.redirect('/user');
        console.log('wrong password');
        return;
    } else {
        res.redirect('/user');
        console.log('user does not exist');
        return;
    }
});

router.post('/new/submit', (req, res) => {
    console.log('Registration request:', req.body);
    const user1 = new User(req.body.username, req.body.email_id, req.body.address, req.body.password);
    user1.save();
    console.log('registered');
    res.redirect('/user');
});

module.exports = router;
